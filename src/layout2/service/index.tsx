import React from 'react';
import { 
    Wrapper,
    Title,
    Services,
    ServiceBar,
    Icon,
    ServiceTitle,
    ServiceDescription,
    SeaRates,
    Description,
    Text,
    RatesTitle,
    Images,
    Img1,
    Bar,
    BarTitle,
    BarDescription
} from './index.styled';

export const Service: React.FC = () => {
    return (
        <Wrapper>
            <Title>
                Services
            </Title>

            <Services>
                <ServiceBar>
                    <Icon>
                        <img src={require('../../images/ship-cruise-holidays-sea-svgrepo-com (1) 9.png')}/>
                    </Icon>
                    <ServiceTitle>
                        Freight Services
                    </ServiceTitle>
                    <ServiceDescription>
                        Open up new opportunities to grow your business. Enter new markets and discover new continents. We are with you, door-to-door.
                    </ServiceDescription>
                </ServiceBar>
                <ServiceBar>
                    <Icon>
                        <img src={require('../../images/ship-cruise-holidays-sea-svgrepo-com (1) 9.png')}/>
                    </Icon>
                    <ServiceTitle>
                        Freight Services
                    </ServiceTitle>
                    <ServiceDescription>
                        Open up new opportunities to grow your business. Enter new markets and discover new continents. We are with you, door-to-door.
                    </ServiceDescription>
                </ServiceBar>
                <ServiceBar>
                    <Icon>
                        <img src={require('../../images/ship-cruise-holidays-sea-svgrepo-com (1) 9.png')}/>
                    </Icon>
                    <ServiceTitle>
                        Freight Services
                    </ServiceTitle>
                    <ServiceDescription>
                        Open up new opportunities to grow your business. Enter new markets and discover new continents. We are with you, door-to-door.
                    </ServiceDescription>
                </ServiceBar>
                <ServiceBar>
                    <Icon>
                        <img src={require('../../images/ship-cruise-holidays-sea-svgrepo-com (1) 9.png')}/>
                    </Icon>
                    <ServiceTitle>
                        Freight Services
                    </ServiceTitle>
                    <ServiceDescription>
                        Open up new opportunities to grow your business. Enter new markets and discover new continents. We are with you, door-to-door.
                    </ServiceDescription>
                </ServiceBar>
                <ServiceBar>
                    <Icon>
                        <img src={require('../../images/ship-cruise-holidays-sea-svgrepo-com (1) 9.png')}/>
                    </Icon>
                    <ServiceTitle>
                        Freight Services
                    </ServiceTitle>
                    <ServiceDescription>
                        Open up new opportunities to grow your business. Enter new markets and discover new continents. We are with you, door-to-door.
                    </ServiceDescription>
                </ServiceBar>
            </Services>

            <SeaRates>
                <Description>
                    <RatesTitle>
                        SeaRates today
                    </RatesTitle>
                    <Text>
                        <p>
                            The lowest rates. The shortest transit times. SeaRates is the largest tariff search engine in the world for international shipping
                        </p>
                        <p>
                            We compare all available cargo delivery options at your request and arrange their transportation and insurance.
                        </p>
                        <p>
                            We provide transparency and control, the cheapest price and the fastest transit time.
                        </p>
                    </Text>
                </Description>

                <Images>
                    <Img1>
                        <img src={require('../../images/Rectangle 4752.png')}/>
                    </Img1>
                    <Bar>
                        <BarTitle>
                            Part of DP World
                        </BarTitle>
                        <BarDescription>
                            Rest assured that your cargo is in safe hands when you book with SeaRates by DP World.
                        </BarDescription>
                    </Bar>
                </Images>
            </SeaRates>
        </Wrapper>
    )
}