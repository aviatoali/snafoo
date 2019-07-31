import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../state/types';
import * as S from './styles';
import { getSnacks } from './Stock/actions';
import { postVote } from './Voting/actions';

export interface SnacksProps {
    stock: Snack[];
    votes: string[];
    getSnacks: () => void;
    postVote: (id: string) => void;
};

export interface SnacksState {

};

class Snacks extends React.Component<SnacksProps, SnacksState> {
    constructor(props: SnacksProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getSnacks();
    }

    render() {
        console.log('@@@@@@@@@@@@@@@ render this.props: ', this.props);
        return (
            <S.Container>
                SNACKS!
            </S.Container>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    stock: state.snacks.stock.list,
    votes: state.snacks.votes.list
});

// TODO: move these out of here later
const mapDispatchToProps = (dispatch: Function) => ({
    getSnacks: () => { dispatch(getSnacks()); },
    postVote: (id: string) => { dispatch(postVote(id)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Snacks);