import styled from 'styled-components';

interface SectionContainerProps {
    backgroundImg?: string;
};

export const SectionContainer = styled.div`
    display: flex;
    text-align: center;
    padding: 40px 15px;
    ${(props: SectionContainerProps) => (props.backgroundImg != null && props.backgroundImg !== '') && `
        background-image: url(${props.backgroundImg});
        background-repeat: 'no-repeat';
        background-size: 'cover';
    `};
    @media (min-width: 801px) {
        padding: 40px 45px;
    };
`;

interface SectionHeaderProps {
    textColor?: string;
};

export const SectionHeaderContainer = styled.div`
    margin-bottom: 18px;
`;

export const SectionHeader = styled.h2`
    color: ${(props: SectionHeaderProps) => props.textColor ? props.textColor : '#ffffff'};
    font-weight: normal;
    font-size: 32px;
    line-height: 1.3;
    @media (min-width: 801px) {
        font-size: 54px;
    }
`;

export const SectionSubheaderContainer = styled.div`
    margin-bottom: 20px;
    @media (min-width: 401px) {
        margin-bottom: 50px;
    };
`;

export const SectionSubheader = styled.p`
    color: #ffffff;
    font-weight: 300;
    line-height: 1.3;
    font-size: 14px;
    @media (min-width: 401px) {
        font-size: 22px;
    }
`;
