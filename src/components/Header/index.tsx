import { useContext } from "react";
import { WalletContext, WalletContextValues } from "../../contexts/AppContexts";
import styled from "styled-components";
import Container from "../Container";
import Button from "@material-ui/core/Button";

const Header = () => {
    const { account, connect, disconnect } = useContext(
        WalletContext
    ) as WalletContextValues;

    return (
        <StyledHeader>
            <Container>
                <StyledHeaderWrapper>
                    <StyledHeaderLogo>
                        PredictX Assignment
                    </StyledHeaderLogo>
                    {!account ? (
                        <Button variant="contained" color="primary" onClick={() => connect()}>
                            Connect Wallet
                        </Button>
                    ) : (
                        <Button variant="contained" color="secondary" onClick={() => disconnect()}>
                            Disconnect
                        </Button>
                    )}
                </StyledHeaderWrapper>
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    width: 100%;
    background: deepskyblue;
`;

const StyledHeaderLogo = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
`

const StyledHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px 0;
`;

export default Header;