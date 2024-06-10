// Here we are using object destructuring assignment to pluck off our variables from the props object


function Navbar({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">

        <li className="nav-item">
          <a
            href="#AboutMe"
            onClick={() => handlePageChange('AboutMe')}
            // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
            AboutMe
          </a>
        </li>


        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </a>
        </li>


        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}
            
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            Contact
          </a>
        </li>


        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            Resume
          </a>
        </li>
      </ul>
    );
  }
  
  export default Navbar;