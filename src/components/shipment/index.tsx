import React from 'react';
import { 
    Wrapper ,
    Title,
    Icon,
    Description,
    Div1,
    Div2
} from './index.styled';

export const Shipment: React.FC = () => {
    return (
        <Wrapper>
            <Title>
                <Icon>
                    <img src={require('../../images/icon1.PNG')}/>
                </Icon>
                Simplify Workflows
            </Title>
            
            <Description>
            Step out of the messy reality of calls, faxes, and endless emails and into a new world, where everything is connected to a single platform — suppliers, shippers, customs, ports, and more.
            </Description>
        </Wrapper>
    )
};