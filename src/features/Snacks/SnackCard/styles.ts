import styled from 'styled-components';

export  const Container = styled.div`
    width: 40%;
    margin: 0 5% 5px 5%;
    @media (min-width: 401px) {
        margin: 0 1.5% 35px 1.5%;
        width: 30%;
        
    };
    min-height: 20vh;
`;

export interface ImgContainerProps {
    backgroundImg: string;
};

export const ImageContainer = styled.div`
    height: calc(80% - 15px);
    display: flex;
    align-items: center;
    background-color: #ffffff;
    justify-content: center;
    box-shadow: 2px 2px 4px #626262cc;
    border: 5px solid #ffffff;
    position: relative;
    margin-bottom: 4.5%;
    @media (min-width: 401px) {
        box-shadow: 5px 5px 4px #626262cc;
    };
    transition: all 300ms;
    &:hover {
        border-color: #3d8b9f;
    };
    &:active {
        box-shadow: 3px 3px 2px #626262cc;
    };
`;

export const Triangle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    padding-left: 16%;
    padding-top: 16%;
    overflow: hidden;
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        margin-left:-500px;
        margin-top:-500px;
        border-left: 500px solid transparent;
        border-top: 500px solid #00C7FF;
    };
`;

export const Image = styled.img`
    width: 70%;
    @media (min-width: 401px) {
        width: 50%;
    }
`;

export const InfoContainer = styled.div`
    text-align: left;
`;

export const Product = styled.h4`
    color: #ffffff;
    font-weight: normal;
    font-size: 1.1vw;
    margin-bottom: 2.5%;
`;

export const Brand = styled.h5`
    color: #ffffff;
    font-weight: normal;
    font-size: 1.8vh;
    font-size: 0.8vw;
`;

export const VoteContainer = styled(Brand)`
    position: absolute;
    top: 0px;
    right: 0px;
    text-align: right;
    z-index: 2;
    padding-top: 2.5%;
    padding-right: 2.5%;
`;
