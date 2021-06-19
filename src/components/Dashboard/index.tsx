import { useContext, useState } from "react";
import { WalletContext, WalletContextValues } from "../../contexts/AppContexts";
import styled from "styled-components";
import Container from "../Container";
import TokenList from "./components/tokenList";
import TokenGraph from "./components/tokenGraph";
import { tokenData } from "../../mockData/topTokens";

const Dashboard = () => {
    const { account } = useContext(
        WalletContext
    ) as WalletContextValues;
    const [tokens] = useState(tokenData.data);
    return (
        <StyledHome>
            <Container>
                {!account ? (
                    <StyledNotification>Please connect the Metamask</StyledNotification>
                ) : (
                    <StyledHomeWrapper>
                        <StyledAccountWrapper>
                            Address: {account}
                        </StyledAccountWrapper>
                        <StyledMostInteractionWrapper>
                            {tokens.map((token, index) => (
                                <TokenList token={token} key={index}></TokenList>
                            ))}
                        </StyledMostInteractionWrapper>
                        <TokenGraph tokens={tokens}></TokenGraph>
                    </StyledHomeWrapper>
                )}
            </Container>
        </StyledHome>
    );
}

const StyledHome = styled.div`
    background-color: #ffffff;
`;

const StyledNotification = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledHomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledAccountWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledMostInteractionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;


export default Dashboard;