import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../state/types';
import { getSnacks } from './Stock/actions';
import { postVote, getVotes } from './Voting/actions';
import Stock from './Stock';
import Voting from './Voting';
import { VOTES_MAX } from '../../common/constants';

export interface SnacksProps {
    stock: Snack[];
    availableItems: Snack[];
    votes: SnackVote[];
    postVoteFailed: boolean;
    getVotes: () => void;
    getSnacks: () => void;
    postVote: (id: string) => void;
};

class Snacks extends React.Component<SnacksProps, {}> {
    componentDidMount() {
        this.props.getSnacks();
        this.props.getVotes();
    }

    handleVoteClick = (snack: Snack) => {
        if (this.props.votes && this.props.votes.length < VOTES_MAX) {
            const snackIndex = this.props.votes.findIndex(sn => sn.id === snack.id);
            if (snackIndex === -1) {
                this.props.postVote(snack.id);
            }
        }
    };

    render() {
        return (
            <div className="site-bd-section">
                <Stock stock={this.props.stock} />
                <Voting
                    votes={this.props.votes}
                    availableItems={this.props.availableItems}
                    voteFailed={this.props.postVoteFailed}
                    onVoteClick={this.handleVoteClick}
                />
            </div >
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    stock: state.snacks.stock.list,
    availableItems: state.snacks.votes.availableItems,
    votes: state.snacks.votes.votes,
    postVoteFailed: state.snacks.votes.postVoteFailed
});

const mapDispatchToProps = (dispatch: Function) => ({
    getVotes: () => { dispatch(getVotes()); },
    getSnacks: () => { dispatch(getSnacks()); },
    postVote: (id: string) => { dispatch(postVote(id)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Snacks);