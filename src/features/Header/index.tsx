import React from 'react';

export interface HeaderProps { };

export interface HeaderState { };

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {}
  }

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
            <a className="navLink" href="#">Home</a>
            <a className="navLink" href="#">Current</a>
            <a className="navLink" href="#">Voting</a>
            <a className="navLink" href="#">Sign Up</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;