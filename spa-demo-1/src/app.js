// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Define the HTML content for each "page"
  const pages = {
    home: `<h2>Welcome to the Home Page</h2><p>This is the main landing page of our Single-Page Application.</p>`,
    about: `<h2>About Us</h2><p>This section tells you more about our fictional company.</p>`,
    contact: `<h2>Contact Us</h2><form id="contact-form"><label for="name">Name:</label><input type="text" id="name" required /><label for="email">Email:</label><input type="email" id="email" required /><button type="submit">Send Message</button></form>`,
  };

  // Get the content container where page content will be rendered
  const contentDiv = document.getElementById('content');
  // Select all navigation links inside the nav element
  const navLinks = document.querySelectorAll('nav a');

  // Function to render the selected page's content
  const renderPage = (page) => {
    contentDiv.innerHTML = pages[page] || pages.home;
  };

  // Add click event listeners to each navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link navigation
      const page = event.target.getAttribute('href').substring(1); // Get page name from href (e.g., #home)
      renderPage(page); // Render the selected page
      history.pushState({ page }, '', `#${page}`); // Update browser history (for back/forward navigation)
    });
  });

  // Listen for browser navigation events (back/forward buttons)
  window.addEventListener('popstate', (event) => {
    // Render the page stored in history state, or default to 'home'
    renderPage(event.state ? event.state.page : 'home');
  });
});

  // Initial render: show the home page when the app loads