import React from 'react';
import { 
    Wrapper,
    Title,
    ShipmentGroup,
    ShipTitle,
    ShipIcon,
    ShipDescription,
    Abouts
} from './index.styled';

export const About: React.FC = () => {
    return (

        <Wrapper>
                <Title>
                    A Single System For All <span>Your Shipments</span>
                </Title>
                <Abouts>
                    <ShipmentGroup>
                        <ShipTitle>
                            <ShipIcon>
                                <img src={require('../../images/icon1.PNG')}/>
                            </ShipIcon>
                            Simplify Workflows
                        </ShipTitle>
                        
                        <ShipDescription>
                            Step out of the messy reality of calls, faxes, and endless emails and into a new world, where everything is connected to a single platform — suppliers, shippers, customs, ports, and more.
                        </ShipDescription>
                    </ShipmentGroup>
                    <ShipmentGroup>
                        <ShipTitle>
                            <ShipIcon>
                                <img src={require('../../images/icon2.PNG')}/>
                            </ShipIcon>
                            Coordinate Confidence
                        </ShipTitle>
                        
                        <ShipDescription>
                            You’ll gain shipment visibility for every order, at every step of the way, with the ability for everyone involved to instantly pull it up on-demand and respond with in-app messaging.
                        </ShipDescription>
                    </ShipmentGroup>
                    <ShipmentGroup>
                        <ShipTitle>
                            <ShipIcon>
                                <img src={require('../../images/icon3.PNG')}/>
                            </ShipIcon>
                            Make Smarter Decisions
                        </ShipTitle>
                        
                        <ShipDescription>
                            Your previously siloed data now unlocks predictive modeling, powerful analytics, and actionable insights that our seasoned trade advisors can help you interpret and implement.
                        </ShipDescription>
                    </ShipmentGroup>

                </Abouts>

        </Wrapper>
    )
}