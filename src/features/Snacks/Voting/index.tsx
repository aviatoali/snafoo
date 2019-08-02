import * as React from 'react';
import * as S from './styles';
import * as SnacksStyles from '../styles';
import { VOTES_MAX } from '../../../common/constants';

export interface VotingProps {
    votes: SnackVote[];
    voteFailed: boolean;
    availableItems: Snack[];
    onVoteClick: (snack: Snack) => void;
};

class Voting extends React.Component<VotingProps, {}> {
    constructor(props: VotingProps) {
        super(props);
        this.state = {};
    }

    onVoteClick = (snack: Snack, votesRemaining: number) => {
        if (votesRemaining > 0) {
            this.props.onVoteClick(snack);
        } else {
            window.alert("Sorry, you have reached your maximum votes for this month :(");
        }
    };

    renderVoteSection = (votesRemaining: number): JSX.Element => {
        return (
            <S.VotingOptionsContainer id={'voting-component'}>
                <S.VotingOptionsTable>
                    <tbody>
                        <tr>
                            <S.VotingOptionsTableHeader colSpan={2}>
                                Available Items
                            </S.VotingOptionsTableHeader>
                            <S.VotingOptionsTableCount colSpan={1}>
                                <S.ItemCountCircle>
                                    {this.props.availableItems.length}
                                </S.ItemCountCircle>
                            </S.VotingOptionsTableCount>
                        </tr>
                        {
                            this.props.availableItems.map((snack: Snack, index: number) => {
                                return (
                                    <S.VotingOptionsTableRow
                                        key={index}
                                        isEven={index % 2 === 0}
                                    >
                                        <S.PlusIconTableData
                                            isEven={index % 2 === 0}
                                            onClick={() => this.onVoteClick(snack, votesRemaining)}
                                        >
                                            <S.PlusIcon
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns='http://www.w3.org/2000/svg'
                                                xmlnsXlink='http://www.w3.org/1999/xlink'
                                                x='0px'
                                                y='0px'
                                                viewBox="0 0 16 16"
                                                enableBackground="new 0 0 16 16"
                                                xmlSpace="preserve"
                                            >
                                                <polygon
                                                    fill="#FFFFFF"
                                                    points="16,6 10,6 10,0 6,0 6,6 0,6 0,10 6,10 6,16 10,16 10,10 16,10 "
                                                />
                                            </S.PlusIcon>
                                        </S.PlusIconTableData>
                                        <S.VotingOptionsTableData>
                                            {`${snack.brand} ${snack.product}`}
                                        </S.VotingOptionsTableData>
                                        <S.VotingOptionsTableData>
                                            {`${snack.votes}`}
                                        </S.VotingOptionsTableData>
                                    </S.VotingOptionsTableRow>
                                );
                            })
                        }
                    </tbody>
                </S.VotingOptionsTable>
                <S.SelectionTable>
                    <tbody>
                        <tr>
                            <S.SelectionTableHeader colSpan={2}>
                                Selection
                            </S.SelectionTableHeader>
                            <S.VotingOptionsTableCount colSpan={1}>
                                <S.ItemCountCircle
                                    bgColor={'#008ea3'}
                                    textColor={'#ffffff'}>
                                    {this.props.votes.length}
                                </S.ItemCountCircle>
                            </S.VotingOptionsTableCount>
                        </tr>
                        {
                            this.props.votes.map((vote: SnackVote, index: number) => {
                                return this.renderSelectionRow(vote, index)
                            })
                        }
                    </tbody>
                </S.SelectionTable>
            </S.VotingOptionsContainer>

        );
    };

    renderSelectionRow = (vote: SnackVote, key: number): JSX.Element | null => {
        const snackIndex = this.props.availableItems.findIndex((sn: Snack) => sn.id === vote.id);
        return snackIndex !== -1 ? (
            <S.SelectionTableRow key={key}>
                <S.SelectionTableData>
                    {`${this.props.availableItems[snackIndex].brand} ${this.props.availableItems[snackIndex].product}`}
                </S.SelectionTableData>
                <S.SelectionTableData>
                    {this.props.availableItems[snackIndex].votes}
                </S.SelectionTableData>
            </S.SelectionTableRow>
        ) : null;
    };

    renderEmptyState = (): JSX.Element => {
        return (
            <SnacksStyles.SectionEmptyState textColor={'#716e70'}>
                Uh oh! Looks like we're having some trouble getting the votes for the available snacks. Please try back again later!
            </SnacksStyles.SectionEmptyState>
        );
    };

    renderSubHeader = (): JSX.Element => {
        return !this.props.voteFailed ? (
            <SnacksStyles.SectionSubheader textColor={'#716e70'}>
                Vote on the snacks you want to see in this month's rotation
            </SnacksStyles.SectionSubheader>
        ) : (
                <SnacksStyles.SectionSubheader
                    shouldShake={true}
                    textColor={'#ff0000'}
                >
                    Uh oh! Looks like there was an error in casting your vote. Please try recasting your vote later!
            </SnacksStyles.SectionSubheader>
            )
    };

    render() {
        const votesRemaining = this.props.votes.length > VOTES_MAX ? 0 : VOTES_MAX - this.props.votes.length;
        return (
            <SnacksStyles.SectionContainer maxWidth={'1024px'}>
                <S.Content>
                    <SnacksStyles.SectionHeaderContainer>
                        <SnacksStyles.SectionHeader textColor={'#716e70'}>
                            Snack Voting
                        </SnacksStyles.SectionHeader>
                    </SnacksStyles.SectionHeaderContainer>
                    <SnacksStyles.SectionSubheaderContainer bottomGap={'18px'}>
                        {this.renderSubHeader()}
                    </SnacksStyles.SectionSubheaderContainer>
                    <S.RemainingVotesContainer>
                        {`${votesRemaining} Votes Remaining`}
                    </S.RemainingVotesContainer>
                    {
                        this.props.availableItems && this.props.availableItems.length > 0 ?
                            this.renderVoteSection(votesRemaining) :
                            this.renderEmptyState()
                    }
                </S.Content>
            </SnacksStyles.SectionContainer>
        );
    }
}

export default Voting;