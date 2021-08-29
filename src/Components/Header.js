import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav
      className="navbar navbar-expand-sm
    navbar-dark bg-danger mb-3 py-0"
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="ul.navbar-nav.mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div>
    //   <h1 style={headingStyle}>{branding}</h1>
    // </div>
  );
};

Header.defaultProps = {
  branding: "My App",
};
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

const headingStyle = {
  color: "green",
  fontSize: "40px",
};
export default Header;

// Inline styling <h1 style={{color:'blue', fontSize: '50px'}}>{branding}</h1>
