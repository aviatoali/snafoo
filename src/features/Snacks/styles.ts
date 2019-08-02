import styled, { css, keyframes } from 'styled-components';

interface SectionContainerProps {
    backgroundImg?: string;
    maxWidth?: string;
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
    ${(props: SectionContainerProps) => props.maxWidth && `
        max-width: ${props.maxWidth};
        margin: 0 auto;
    `};
`;

interface SectionHeaderProps {
    textColor?: string;
    bottomGap?: string;
    shouldShake?: boolean;
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
        margin-bottom: ${(props: SectionHeaderProps) => props.bottomGap ? props.bottomGap : '50px'};
    };
`;

export const SectionSubheader = styled.p`
    color: ${(props: SectionHeaderProps) => props.textColor ? props.textColor : '#ffffff'};
    font-weight: 300;
    line-height: 1.3;
    font-size: 14px;
    animation: ${(props: SectionHeaderProps) => props.shouldShake != null && props.shouldShake ? shakeAnimation : `none`};
    @media (min-width: 401px) {
        font-size: 22px;
    }
`;

export interface SectionEmptyStateProps {
    textColor?: string;
};

export const SectionEmptyState = styled.div`
    font-size: 18px;
    color: ${(props: SectionEmptyStateProps) => props.textColor ? props.textColor : '#ffffff'};
`;

const shake = keyframes`
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
`;

const shakeAnimation = props => css`
    ${shake} 0.6s;
`;