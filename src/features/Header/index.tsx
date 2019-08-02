import React from 'react';

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header className={"site-hd"}>
        <div className="masthead u-constrainer">
          <a className="logo">
            <svg viewBox="0 0 900 300">
              <use xlinkHref="#logo"></use>
            </svg>
          </a>
          <nav className="hList">
            <a className="navLink" href="#home-component">Home</a>
            <a className="navLink" href="#stock-component">Current</a>
            <a className="navLink" href="#voting-component">Voting</a>
            <a className="navLink" href="#sign-up-component">Sign Up</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;