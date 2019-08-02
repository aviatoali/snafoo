import * as React from 'react';
import * as S from './styles';
import * as SnacksStyles from '../styles';

export interface VotingProps {
};

export interface VotingState {

};

class Voting extends React.Component<VotingProps, VotingState> {
    constructor(props: VotingProps) {
        super(props);
        this.state = {};
    }

    render() {
        // console.log('@@@@@@@@@@@@@@@ Voting component render this.props: ', this.props);
        return (
            <SnacksStyles.SectionContainer>
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
                        >
                            Vote Now
                            </button>
                    </div>
                </div>
            </SnacksStyles.SectionContainer>
        );
    }
}


export default Voting;