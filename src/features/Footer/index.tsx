import React from 'react';

export interface FooterProps { };

export interface FooterState { };

class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.state = {}
    }

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
                            <a className="navLink navLink_dark" href="#">Home</a>
                            <a className="navLink navLink_dark" href="#">Current</a>
                            <a className="navLink navLink_dark" href="#">Voting</a>
                            <a className="navLink navLink_dark" href="#">Sign Up</a>
                        </nav>
                        <small className="finePrint">&copy; The Nerdery | 9555 James Ave S #245, Bloomington, MN 55431</small>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;