import React from 'react';
import { 
    Wrapper,
    Title,
    ShipmentGroup
} from './index.styled';
import { Shipment } from '../../components/shipment';

export const About: React.FC = () => {
    return (

        <Wrapper>
            <Title>
                A Single System For All <span>Your Shipments</span>
            </Title>

            <ShipmentGroup>
                <Shipment />
                <Shipment />
                <Shipment />
            </ShipmentGroup>

        </Wrapper>
    )
}