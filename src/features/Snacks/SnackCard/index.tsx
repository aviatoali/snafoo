import * as React from 'react';
import * as S from './styles';

export interface SnackCardProps {
    snack: Snack;
    onSnackClick: () => void;
};

class SnackCard extends React.Component<SnackCardProps, {}> {
    constructor(props: SnackCardProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <S.Container>
                <S.ImageContainer>
                    <S.Image src={this.props.snack.image} />
                    <S.Triangle />
                    <S.VoteContainer>{this.props.snack.votes}</S.VoteContainer>
                </S.ImageContainer>
                <S.InfoContainer>
                    <S.Product>{this.props.snack.product}</S.Product>
                    <S.Brand>{this.props.snack.brand}</S.Brand>
                </S.InfoContainer>
            </S.Container>
        );
    }
}

export default SnackCard;