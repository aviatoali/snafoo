import * as React from 'react';
import * as S from './styles';
import * as SnacksStyles from '../styles';
import stockBGImg from '../../../assets/media/images/geo.jpg';
import SnackCard from '../SnackCard';

export interface StockProps {
    stock: Snack[];
};

class Stock extends React.Component<StockProps, {}> {
    snackClickHandler = () => {
        // TODO: Add a detail modal component here that displays the description coming
        // back from snacks in the service.
    };

    renderSnackCardGrid = (): JSX.Element => {
        return (
            <S.SnackCardGrid>
                {
                    this.props.stock.map((snack: Snack, index) => {
                        return (
                            <SnackCard
                                key={index}
                                snack={snack}
                                onSnackClick={this.snackClickHandler}
                            />
                        );
                    })
                }
            </S.SnackCardGrid>
        );
    };

    renderEmptyState = (): JSX.Element => {
        return (
            <SnacksStyles.SectionEmptyState>
                Uh oh! Looks like we're having some trouble getting the current snack list. Please try back again later!
            </SnacksStyles.SectionEmptyState>
        );
    };

    render() {
        return (
            <SnacksStyles.SectionContainer id={'stock-component'} backgroundImg={stockBGImg}>
                <S.Content>
                    <SnacksStyles.SectionHeaderContainer>
                        <SnacksStyles.SectionHeader>Currently In Stock</SnacksStyles.SectionHeader>
                    </SnacksStyles.SectionHeaderContainer>
                    <SnacksStyles.SectionSubheaderContainer>
                        <SnacksStyles.SectionSubheader>Here are the snacks that are available in the Nerdery kitchen right now.</SnacksStyles.SectionSubheader>
                    </SnacksStyles.SectionSubheaderContainer>
                    {
                        this.props.stock && this.props.stock.length > 0 ?
                            this.renderSnackCardGrid() :
                            this.renderEmptyState()
                    }
                </S.Content>
            </SnacksStyles.SectionContainer>
        );
    }
}

export default Stock;