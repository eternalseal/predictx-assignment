import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { statistics } from "../../../mockData/topTokens";

const TokenGraph = (props: any) => {
    return (
        <StyledGraph>
            <ResponsiveContainer width="90%" height={300}>
                <LineChart
                    data={statistics}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </StyledGraph>
    )
}

const StyledGraph = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

export default TokenGraph;