import requests
import os
import json 
from datetime import datetime
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# Define the path to the JSON file in the same directory as app.py
json_file_path = os.path.join(os.path.dirname(__file__), 'feedback.json')

# Load API key from environment variable or define it directly
API_KEY = os.getenv("NEWS_API_KEY")

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/about')
def about():
    return render_template('about.html')

# Update the news fetching route with pagination logic
@app.route('/news', methods=['GET'])
def get_news():
    search_query = request.args.get('search')
    category_query = request.args.get('category', 'technology')
    page = int(request.args.get('page', 1))  # Get the page number from the URL, default to 1
    page_size = 12  # Set the number of articles per page

    base_url = 'https://newsapi.org/v2/'
    params = {'apiKey': API_KEY, 'pageSize': page_size, 'page': page}

    if search_query:
        url = f'{base_url}everything'
        params['q'] = search_query
    else:
        url = f'{base_url}top-headlines'
        params['category'] = category_query

    # Make API request
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()  # Raise an error for bad responses

        data = response.json()
        total_results = data.get('totalResults', 0)
        total_pages = (total_results // page_size) + (1 if total_results % page_size != 0 else 0)
        
        articles = data.get('articles', [])
        filtered_articles = [
            article for article in articles
            if article.get('urlToImage') and article.get('author')
        ]
        if not filtered_articles:
            print("No articles found after filtering.")
            
        return jsonify({
            'articles': filtered_articles,
            'current_page': page,
            'total_pages': total_pages,
            'total_results': total_results
        })
    except requests.RequestException as e:
        return jsonify({'error': f'Failed to fetch news: {str(e)}'}), 500

# Function to save feedback to a JSON file
def save_feedback(user_id, feedback_text, email):
    feedback_entry = {
        "user_id": user_id,
        "feedback": feedback_text,
        "email": email,
        "timestamp": datetime.now().isoformat()
    }

    # Try to open the feedback file and append the new feedback
    try:
        with open(json_file_path, "r") as file:
            feedback_data = json.load(file)
    except FileNotFoundError:
        feedback_data = []

    feedback_data.append(feedback_entry)

    with open(json_file_path, "w") as file:
        json.dump(feedback_data, file, indent=4)
    
    print("Feedback saved successfully.")

# Route to handle the feedback submission
@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    data = request.get_json()  # Get the data sent from the frontend
    user_id = data.get("user_id")  # Extract user_id from the request
    feedback_text = data.get("feedback")  # Extract feedback from the request
    email = data.get("email")  # Extract email from the request

    if user_id and feedback_text and email:
        save_feedback(user_id, feedback_text, email)  # Call the save_feedback function
        return jsonify({"message": "Feedback received!"}), 200
    else:
        return jsonify({"error": "Missing user_id, feedback, or email"}), 400

if __name__ == '__main__':
    app.run(debug=True)

