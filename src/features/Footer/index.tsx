import React from 'react';

class Footer extends React.Component<{}, {}> {
    render() {
        return (
            <footer className="site-ft">
                <div className="footer u-constrainer">
                    <div className="footer-primary">
                        <a className="footLogo">
                            <svg viewBox="0 0 900 300">
                                <use xlinkHref="#logo"></use>
                            </svg>
                        </a>
                    </div>
                    <div className="footer-secondary">
                        <nav className="hList hList_divided u-vr_x3">
                            <a className="navLink navLink_dark" href="#home-component">Home</a>
                            <a className="navLink navLink_dark" href="#stock-component">Current</a>
                            <a className="navLink navLink_dark" href="#voting-component">Voting</a>
                            <a className="navLink navLink_dark" href="#sign-up-component">Sign Up</a>
                        </nav>
                        <small className="finePrint">&copy; The Nerdery | 9555 James Ave S #245, Bloomington, MN 55431</small>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;