import React from 'react';
import { 
    Wrapper,
    Title,
    Advantages,
    AdvantageBar,
    Image1,
    Image,
    Description1,
    Description,
    Icon, 
    AdvantageTitle,
    Text,
    Schedule,
    ScheduleTitle,
    ScheduleText,
} from './index.styled';
import { Button } from '../../components/button';
export const Advantage: React.FC = () => {
    return (
        <Wrapper>
            <Title>
                Our Advantages
            </Title>

            <Advantages>
                <AdvantageBar>
                    <Image>
                        <img src={require('../../images/container-shipping-industry-cargo-freight-delivery-crane-svgrepo-com 1.png')}/>
                    </Image>
                    <Description>
                        <Icon>1</Icon>

                        <AdvantageTitle>
                            All in one shipping
                        </AdvantageTitle>

                        <Text>
                            Affordable pricing of shipping services is what we constantly strive for. At SeaRates.com you will find cheap rates to any country, from the world\'s top freight forwarders, saving you time and money. Why spend a lot of resource and energy on negotiations to get the best shipping rate? Find and book them online at SeaRates.com.
                        </Text>
                    </Description>
                </AdvantageBar>
                <AdvantageBar>
                    <Description1>
                        <Icon>2</Icon>

                        <AdvantageTitle>
                            All in one shipping
                        </AdvantageTitle>

                        <Text>
                            Affordable pricing of shipping services is what we constantly strive for. At SeaRates.com you will find cheap rates to any country, from the world\'s top freight forwarders, saving you time and money. Why spend a lot of resource and energy on negotiations to get the best shipping rate? Find and book them online at SeaRates.com.
                        </Text>
                    </Description1>
                    <Image1>
                        <img src={require('../../images/Frame.png')}/>
                    </Image1>
                </AdvantageBar>
                <AdvantageBar>
                    <Image>
                        <img src={require('../../images/Frame (1).png')}/>
                    </Image>
                    <Description>
                        <Icon>3</Icon>

                        <AdvantageTitle>
                            All in one shipping
                        </AdvantageTitle>

                        <Text>
                            Affordable pricing of shipping services is what we constantly strive for. At SeaRates.com you will find cheap rates to any country, from the world\'s top freight forwarders, saving you time and money. Why spend a lot of resource and energy on negotiations to get the best shipping rate? Find and book them online at SeaRates.com.
                        </Text>
                    </Description>
                </AdvantageBar>
                <AdvantageBar>
                    
                    <Description1>
                        <Icon>4</Icon>

                        <AdvantageTitle>
                            All in one shipping
                        </AdvantageTitle>

                        <Text>
                            Affordable pricing of shipping services is what we constantly strive for. At SeaRates.com you will find cheap rates to any country, from the world\'s top freight forwarders, saving you time and money. Why spend a lot of resource and energy on negotiations to get the best shipping rate? Find and book them online at SeaRates.com.
                        </Text>
                    </Description1>
                    <Image1>
                        <img src={require('../../images/Frame (2).png')}/>
                    </Image1>
                </AdvantageBar>
            </Advantages>

            <Schedule>
                <ScheduleTitle>
                    Combine everything in one place
                </ScheduleTitle>
                <ScheduleText>
                    Search from more than 500,000 ocean freight quotes and get the latest international shipping rates from any carrier in seconds. With us you get a launching pad for your supply chain, and with it the effectiveness, control and transparency of your business.
                </ScheduleText>

                <Button 
                    children='Get Started ->'
                    fontSize='16px'
                    fontColor='#155DE9'
                    btnColor='#fff'
                    borderColor='#fff'
                />
            </Schedule>
        </Wrapper>
    )
};