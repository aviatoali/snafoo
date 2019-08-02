import React from 'react';

export interface HomeProps { };

export interface HomeState { };

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {}
    }

    onVoteClick = () => {
        console.log('@@@@@@@@@@@@@@@@@ onClick firing');
    }

    render() {
        return (
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
                            <button
                                className="btn"
                                onClick={this.onVoteClick}
                            >
                                Vote Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;