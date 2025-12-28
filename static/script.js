    let currentPage = 1;
    let totalResults = 0; // Keeps track of the total number of articles
    let currentQuery = '';
    let currentCategory = 'Home'; // Default category to display
    let loadingIndicator; // To store the loading indicator element

    // Function to reset search and display latest news
    function resetSearch() {
        document.getElementById('search-input').value = '';
        currentQuery = '';
        fetchNews(currentCategory); // Fetch news for the default category
        displayWelcomeSection(); // Show welcome section on home page
    }

    // Function to fetch news by category or search query
    function fetchNews(category = 'technology', page = 1) {
        currentPage = page;
        currentCategory = category;
        const query = currentQuery ? `search=${currentQuery}` : `category=${category}`;
        const url = `/news?${query}&page=${currentPage}`;
        
        // Show loading indicator
        showLoadingIndicator();

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                totalResults = data.totalResults; // Set totalResults from API response
                displayArticles(data.articles);
                updatePagination();
            })
            .catch(error => {
                console.error('Error fetching news:', error);
                displayError(`Failed to fetch news: ${error.message}`);
            })
            .finally(() => {
                // Hide loading indicator
                hideLoadingIndicator();
            });
    }

    // Function to search news by keyword with debounce
    let debounceTimeout;
    function searchNews() {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            const query = document.getElementById('search-input').value.trim();
            if (query) {
                currentQuery = query;
                fetchNews('', 1); // Fetch news based on search query
                hideWelcomeSection(); // Hide welcome section when searching
            } else {
                resetSearch(); // Reset to default if query is empty
            }
        }, 300); // Debounce delay in milliseconds
    }

    // Function to display news articles on the page
    function displayArticles(articles) {
        const newsSection = document.getElementById('news-articles');
        newsSection.innerHTML = '';

        // Filter out articles without essential fields
        const validArticles = articles.filter(article => article.title && article.urlToImage && article.author);

        // Determine how many articles to show
        const articlesToShow = validArticles.slice(0, 12); 

        // Display valid articles
        articlesToShow.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('news-article');

            const img = document.createElement('img');
            img.src = article.urlToImage;
            img.alt = article.title || 'No title available';
            articleDiv.appendChild(img);

            const title = document.createElement('h2');
            title.textContent = article.title;
            articleDiv.appendChild(title);

            const author = document.createElement('p');
            author.innerHTML = `<strong>Author:</strong> ${article.author || 'Unknown'}`; // Handle undefined author
            articleDiv.appendChild(author);

            const description = document.createElement('p');
            description.textContent = article.description || 'No description available.'; // Handle undefined description
            articleDiv.appendChild(description);

            const readMoreLink = document.createElement('a');
            readMoreLink.href = article.url;
            readMoreLink.target = '_blank';
            readMoreLink.textContent = 'Read more';
            readMoreLink.classList.add('read-more-btn');
            articleDiv.appendChild(readMoreLink);

            newsSection.appendChild(articleDiv);
        });

        // If there are fewer valid articles, add placeholders for layout consistency
        const placeholderCount = 12 - articlesToShow.length;
        if (placeholderCount > 0) {
            for (let i = 0; i < placeholderCount; i++) {
                const placeholderDiv = document.createElement('div');
                placeholderDiv.classList.add('news-article', 'placeholder');
                newsSection.appendChild(placeholderDiv);
            }
        }
    }

    // Function to display error messages
    function displayError(message) {
        const newsSection = document.getElementById('news-articles');
        newsSection.innerHTML = `<p class="error">${message}</p>`;
    }

    function showLoadingIndicator() {
        const loadingDiv = document.getElementById('loading');
        loadingDiv.style.display = 'block'; // Show the loading animation
    }

    function hideLoadingIndicator() {
        const loadingDiv = document.getElementById('loading');
        loadingDiv.style.display = 'none'; // Hide the loading animation
    }

    // Update pagination display
    function updatePagination() {
        const paginationDiv = document.getElementById('pagination');
        paginationDiv.innerHTML = '';

        const previousButton = document.createElement('button');
        previousButton.innerText = 'Previous';
        previousButton.disabled = currentPage === 1;
        previousButton.onclick = () => fetchNews(currentQuery || currentCategory, currentPage - 1);
        paginationDiv.appendChild(previousButton);

        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.disabled = (currentPage * 12 >= totalResults); // Adjust for 12 articles per page
        nextButton.onclick = () => fetchNews(currentQuery || currentCategory, currentPage + 1);
        paginationDiv.appendChild(nextButton);
    }

    // Fetch default category news (Technology) on page load
    window.onload = () => resetSearch();

    // Event listener for the Enter key press in the search input
    document.getElementById('search-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchNews();
        }
    });

    // Function to display the welcome section
    function displayWelcomeSection() {
        const welcomeSection = document.getElementById('welcome');
        welcomeSection.style.display = 'block';
    }

    // Function to hide the welcome section
    function hideWelcomeSection() {
        const welcomeSection = document.getElementById('welcome');
        welcomeSection.style.display = 'none';
    }
    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        
        // Toggle the dark mode icon
        const icon = document.getElementById('darkModeIcon');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            icon.innerHTML = '⏾'; // Half Moon icon for Dark mode
        } else {
            localStorage.setItem('darkMode', 'disabled');
            icon.innerHTML = '&#9728;'; // Full Sun icon for Light mode
        }
    }

    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeIcon').innerHTML = '⏾'; // Half Moon icon for Dark mode
    } else {
        document.getElementById('darkModeIcon').innerHTML = '&#9728;'; // Full Sun icon for Light mode
    } 


    // Get the button and form container
    const feedbackButton = document.getElementById('feedbackButton');
    const feedbackFormContainer = document.getElementById('feedbackFormContainer');
    const feedbackForm = document.getElementById('feedbackForm');

    // Add click event to toggle the form visibility
    feedbackButton.addEventListener('click', () => {
        // Toggle the display of the feedback form
        if (feedbackFormContainer.style.display === "none") {
            feedbackFormContainer.style.display = "block";
            feedbackButton.innerText = "Close Feedback"; // Change button text
        } else {
            feedbackFormContainer.style.display = "none";
            feedbackButton.innerText = "Give Feedback"; // Revert button text
        }
    });

    feedbackForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        
        // Get feedback input values
        const user_id = document.getElementById('user_id').value;
        const email = document.getElementById('email').value;
        const feedback = document.getElementById('feedback').value;
        
        // Check if the feedback form fields are filled and email contains '@'
        if (user_id && email && feedback) {
            if (!email.includes('@')) {
                alert("Please enter a valid email with '@'.");
                return; // Stop the form submission if email is invalid
            }

            // Send the feedback to the server using fetch
            const response = await fetch('/submit_feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: user_id,
                    email: email,
                    feedback: feedback,
                }),
            });
            
            // Check if the feedback was successfully submitted
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                feedbackForm.reset(); // Reset the form
                feedbackFormContainer.style.display = "none"; // Hide the feedback form
                feedbackButton.innerText = "Give Feedback"; // Reset button text
            } else {
                alert(result.error);
            }
        } else {
            // If fields are not filled, show alert
            alert("Please fill in all fields before submitting.");
        }
    });


    // Call the function to display the welcome section when loading the home page
    displayWelcomeSection();
