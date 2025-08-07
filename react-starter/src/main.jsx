import React from 'react';
import ReactDOM from 'react-dom';
// Import Helmet for managing changes to the document head (title, meta tags, etc.)
import { Helmet } from 'react-helmet';
import '@/index.css';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

// ReactDOM.render(..., document.getElementById('root'));
// Renders the React application into the DOM element with the id root.
ReactDOM.render(
  // React.StrictMode helps identify potential problems in an application during development.
  // It activates additional checks and warnings for its descendants.
  // It does not affect the production build.
  <React.StrictMode>
    {/* Helmet manages the document head, setting default title, title template, charset, language, and AMP attribute */}
    <Helmet
      defaultTitle='Vite React Tailwind Starter' // Sets the default page title
      titleTemplate='%s | Vite React Tailwind Starter' // Template for dynamic page titles
    >
      <meta charSet='utf-8' /> {/* Sets character encoding */}
      <html lang='en' amp /> {/* Sets language to English */}
    </Helmet>
	{/* BrowserRouter provides the routing context for the application 
	 It connects your app to the browser's URL using the HTML5 History API, allowing it to 
	 navigate between "pages" and manage the browser's session history
	  (enabling the back and forward buttons).
	*/}
	<BrowserRouter>
    	<App />
  	</BrowserRouter>	
  </React.StrictMode>,
  // Mount the React app to the DOM element with id 'root'
  document.getElementById('root')
);