
## 📄 `README.md` (Copy and paste this into `README.md` file)

```markdown
# 📰 NewsFlow - Real-Time News Aggregator 🌍

NewsFlow is a responsive full-stack web application that aggregates real-time global news using the [NewsAPI](https://newsapi.org). Built with Flask and JavaScript, it offers users a sleek and interactive dashboard to explore headlines by category, perform live search, submit feedback, and switch between multiple languages and themes — all in one place.

---

## 🚀 Features

- 🔍 **Live Search** with debounce functionality
- 📚 **Category-based Filtering** (Tech, Business, Health, Sports, etc.)
- 🧾 **Pagination** – Displays 12 articles per page with clean formatting
- 🌗 **Dark/Light Mode Toggle** via JavaScript & localStorage
- 🌍 **Multilingual Support**
  - Google Translate for 100+ languages
  - Manual local translation (English, Hindi, Bengali)
- 💬 **Feedback Form** – Sends feedback and stores it in `feedback.json`
- 📱 **Mobile-Responsive Design** with animations and transitions
- 📷 **Only Valid Articles** – Filters out missing images/authors
- 🎨 **Clean UI/UX** – Includes hover effects, loading animation, structured layout

---

## 🛠️ Tech Stack

| Layer | Tools Used |
|-------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend**  | Flask (Python) |
| **API**      | NewsAPI |
| **Templating** | Jinja2 |
| **Storage**  | JSON (for feedback) |
| **Translation** | Google Translate API + Custom JS Engine |

---

## 📁 Project Structure

```

NewsFlow/
├── app.py                  # Main Flask backend app
├── feedback.json           # Stores submitted feedback
├── static/                 # Frontend assets (JS, CSS, Images)
│   ├── script.js
│   ├── about.js
│   ├── styles.css
│   ├── aboutstyle.css
│   └── logo.png
├── templates/              # Jinja2 templates
│   ├── main.html
│   └── about.html
├── .gitignore              # Files/folders excluded from Git
└── README.md               # This file

````

---

## 🧠 About the Project

This project was developed to demonstrate a practical full-stack use case involving API consumption, dynamic DOM updates, user input handling, and responsive design. It focuses on **real-world utility**, accessibility, and interactivity — suitable for desktop and mobile users alike.

It was created as part of an internship project and designed for deployment readiness with modular code and scalable structure.

---

## 🖼️ Screenshots (Optional – Add if you have)

> You can insert screenshots or a demo video link here to show off the UI and features.

---

## ⚙️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/udaykumar0515/RealTime-News-Aggregator
cd NewsFlow-Aggregator
````

2. **Install required packages**

```bash
pip install flask requests
```

3. **Add your NewsAPI key**

* Get it from: [https://newsapi.org](https://newsapi.org)
* Paste it inside `app.py` where API calls are made

4. **Run the Flask server**

```bash
python app.py
```

5. **Open in browser**

```
http://127.0.0.1:5000/
```

---


## 🙋‍♂️ Author

**Udaykumar**
📧 [udaykumarhaibathi@gmail.com](mailto:udaykumarhaibathi@gmail.com)
🔗 [LinkedIn](https://linkedin.com/in/uday-kumar-haibathi-311b66322)
💻 [GitHub](https://github.com/udaykumar0515)

---

## 🤝 Contributions

Pull requests and suggestions are welcome!
If you liked this project, feel free to ⭐ the repo to support my work.

---

## 📬 Feedback

Users can submit feedback via the in-app form. For any technical queries or ideas, open an issue on this repo or reach out via email.

