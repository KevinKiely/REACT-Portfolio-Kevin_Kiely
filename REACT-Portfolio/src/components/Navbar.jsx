// Here we are using object destructuring assignment to pluck off our variables from the props object
function Navbar({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        
        <li className="nav-item">
          <a
            href="#AboutMe"
            onClick={() => handlePageChange('AboutMe')}
            // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            AboutMe
          </a>
        </li>


        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>


        <li className="nav-item">
          <a
            href="#blog"
            onClick={() => handlePageChange('Blog')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
          >
            Blog
          </a>
        </li>


        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }
  
  export default Navbar;