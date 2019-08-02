import styled from 'styled-components';

export const Content = styled.div`
    margin: 0 auto;
    @media (min-width: 401px) {
        width: 68%;
    };
`;

export const SnackCardGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;    
    overflow-y: scroll;
    height: 70vh;
    @media (min-width: 401px) {
        height: 110vh;
    };
`;

export const Test = styled.div`
    display:flex;
    flex-direction: column;
    height: 100%;
`;
