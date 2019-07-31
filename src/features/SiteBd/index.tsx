import React from 'react';


export interface SiteBdProps { };

export interface SiteBdState { };

class SiteBd extends React.Component<SiteBdProps, SiteBdState> {
    constructor(props: SiteBdProps) {
        super(props);
        this.state = {}
    }

    onVoteClick = () => {
        console.log('@@@@@@@@@@@@@@@@@ onClick firing');
    }

    render() {
        return (
            <div className="site-bd">
                <div className="site-bd-section">
                    <div className="heroBanner">
                        <div className="heroBanner-content u-constrainer">
                            <div className="heroBanner-content-hd">
                                <h1 className="hdg hdg_1">Nerdery Snack Food System</h1>
                            </div>
                            <div className="heroBanner-content-bd">
                                <p className="copy">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                            </div>
                            <div className="heroBanner-content-ft">
                                <button className="btn" onClick={this.onVoteClick}>Vote Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-bd-section site-bd-section_gray">
                    <div className="u-constrainer">
                        <div className="layoutPanel">
                            <div className="layoutPanel-hd">
                                <div className="layoutPanel-hd-title">
                                    <h2 className="hdg hdg_2 mix-hdg_dark">Sign up for Snafoo updates!</h2>
                                </div>
                            </div>
                            <div className="layoutPanel-bd">
                                <div className="grid">
                                    <div className="grid-col grid-col_2of3">
                                        <form className="inputForm">
                                            <div className="inputForm-item inputForm-item_half">
                                                <label className="u-isVisuallyHidden" htmlFor="form-firstname">Fist Name</label>
                                                <input className="inputForm-text" type="text" name="" placeholder="Fist Name" />
                                            </div>
                                            <div className="inputForm-item inputForm-item_half">
                                                <label className="u-isVisuallyHidden" htmlFor="form-lastname">Last Name</label>
                                                <input className="inputForm-text" type="text" name="" placeholder="Last Name" />
                                            </div>
                                            <div className="inputForm-item inputForm-item_half">
                                                <label className="u-isVisuallyHidden" htmlFor="form-email">Email</label>
                                                <input className="inputForm-text" type="text" name="" placeholder="Email" />
                                            </div>
                                            <div className="inputForm-item inputForm-item_half">
                                                <label className="u-isVisuallyHidden" htmlFor="form-phonenumber">Phone Number</label>
                                                <input className="inputForm-text" type="text" name="" placeholder="Phone Number" />
                                            </div>
                                            <div className="inputForm-item">
                                                <label className="u-isVisuallyHidden" htmlFor="form-message">Message</label> <textarea
                                                    className="inputForm-area" placeholder="Message"></textarea>
                                            </div>
                                            <div className="inputForm-item">
                                                <div className="inputForm-item-checkGroup">
                                                    <input id="form-employee" className="u-isVisuallyHidden" type="checkbox" />
                                                    <label htmlFor="form-employee">I am a Nerdery employee</label>
                                                </div>
                                                <div className="inputForm-item-checkGroup">
                                                    <input id="form-notify" className="u-isVisuallyHidden" type="checkbox" />
                                                    <label htmlFor="form-notify">Notify Me for Special Offers!</label>
                                                </div>
                                            </div>
                                            <div className="inputForm-item">
                                                <input className="btn btn_dark" type="submit" value="Sign Up" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="grid-col grid-col_1of3">
                                        <div className="media u-vr_x4">
                                            <div className="media-figure">
                                                <svg className="icon">
                                                    <use xlinkHref="#icon-email"></use>
                                                </svg>
                                            </div>
                                            <div className="media-bd">
                                                <span className="assideText">info@nerdery.com</span>
                                            </div>
                                        </div>
                                        <div className="media u-vr_x4">
                                            <div className="media-figure">
                                                <svg className="icon">
                                                    <use xlinkHref="#icon-fax"></use>
                                                </svg>
                                            </div>
                                            <div className="media-bd">
                                                <span className="assideText">(877) 664.6373</span>
                                            </div>
                                        </div>
                                        <div className="media u-vr_x4">
                                            <div className="media-figure">
                                                <svg className="icon">
                                                    <use xlinkHref="#icon-locate"></use>
                                                </svg>
                                            </div>
                                            <div className="media-bd">
                                                <span className="assideText">
                                                    The Nerdery Snafoo Team
                          <br />9555 James Ave. S.
                          <br />Bloomington MN, 55431
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SiteBd;