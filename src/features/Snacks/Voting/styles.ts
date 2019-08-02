import styled from 'styled-components';

export const Content = styled.div`
    margin: 0 auto;
    width: 100%;
`;

export const RemainingVotesContainer = styled.div`
    margin: 0 auto;
    width: 310px;
    height: 30px;
    border-top: 1px solid black;
    text-align: center;
    color: #716e70;
    font-size: 18px;
    font-weight: 300;
    padding-top: 13px;
    margin-bottom: 30px;
    @media (max-width: 401px) {
        display: none;
    };
`;

export interface ItemCountCircleProps {
    textColor?: string;
    bgColor?: string;
};

export const ItemCountCircle = styled.div`
    height: 12px;
    width: 12px;
    margin-top: 10px;
    padding: 5px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    background: ${(props: ItemCountCircleProps) => props.bgColor ? props.bgColor : '#ffffff'};
    font-size: 12px;
    color: ${(props: ItemCountCircleProps) => props.textColor ? props.textColor : '#008ea3'};
    position: absolute;
    right: 15px;
    top: 5px;
    display: none;
    @media (min-width: 401px) {
        display: table-cell;
    };
`;
// TODO: Add onhover effect

export const PlusIcon = styled.svg`
    height: 20px;
    width: auto;
    padding-left: 5px;
    display:flex;
    justify-content: center;
    justify-self: center;
    text-align: center;
    @media (max-width: 401px) {
        padding-right: 11px;
        width: 30px;
    };
`;

export const SelectionTableHeader = styled.th`
    text-align: left;
    color: #716e70;
    font-size: 28px;
    padding: 10px 0 12px 10px;
    border-bottom: 1px solid #716e70;
    font-size: 24px;
    @media (min-width: 401px) {
        font-size: 28px;
    };
`;

export const SelectionTable = styled.table`
    min-width: 40%;
    margin-left: 2%;
`;

export const SelectionTableData = styled.td`
    text-align: left;
    vertical-align: middle;
    padding-left: 10px;
    font-size: 14px;
    @media (min-width: 401px) {
        font-size: 16px;
    };
`;

export const SelectionTableRow = styled.tr`
    background-color: #ffffff;
    height: 50px;
    color: #716e70;
    ${SelectionTableData}:last-child {
        text-align: center;
        padding-right: 12px;
        @media (max-width: 401px) {
            display: none;
        };
    };
`;

export interface VotingOptionsTableRowProps {
    isEven?: boolean;
};

export const VotingOptionsTableData = styled(SelectionTableData)`
    ${(props: VotingOptionsTableRowProps) => props.isEven != null && `
        background-color: ${props.isEven ? '#c5c5c5' : '#cfcfcf'};
    `};
`;

export const VotingOptionsTableRow = styled.tr`
 background-color: ${(props: VotingOptionsTableRowProps) => props.isEven != null && props.isEven ? '#d6d6d6' : '#e1e1e1'};
    height: 50px;
    color: #716e70;
    ${VotingOptionsTableData}:first-child {
        cursor: pointer;
    };
    ${VotingOptionsTableData}:last-child {
        text-align: center;
        padding-right: 3px;
        @media (max-width: 401px) {
            display: none;
        };
    };
`;

export const VotingOptionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const VotingOptionsTable = styled.table`
    min-width: 58%;
    background-color: #d6d6d6;
    margin-bottom: 20px;
    @media (min-width: 401px) {
        margin-bottom: 0px;
    }
`;

export const VotingOptionsTableHeader = styled.th`
    text-align: left;
    background-color: #008ea3;
    color: #ffffff;
    padding: 14px 0 12px 14px;
    font-size: 24px;
    @media (min-width: 401px) {
        font-size: 28px;
        padding: 10px 0 12px 10px;
    };
`;

export const VotingOptionsTableCount = styled.th`
    position: relative;
    background-color: #008ea3;
`;