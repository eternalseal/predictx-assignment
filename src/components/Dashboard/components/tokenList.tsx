import styled from "styled-components";

const TokenList = (props: any) => {
    return (
        <StyledList>
            <StyledListTitle>
                <img src={props.token.logo} alt={props.token.name}/>
                <span>{props.token.symbol}</span>
            </StyledListTitle>
            <StyledListDetail>
                <span>Transaction Count: {props.token.txCount}</span> 
            </StyledListDetail>
        </StyledList>
    )
}

const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 10px 10px 10px;
    margin: 10px 0 10px 0;
    border: 1px solid #b3b3b3;
    border-radius: 10px;
`;

const StyledListTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    img {
        width: 30px;
        height: 30px;
        padding: 10px 10px 10px 10px;
    }
    span {
        font-size: 12px;
    }
`;

const StyledListDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default TokenList;