import React from 'react';
import { 
    Wrapper,
    Main, 
    Description, 
    Title, 
    Text, 
    Image, 
    Month, 
    Rate, 
    Img  ,
    Price,
    PrevImg,
    NextImg,
    Circles
} from './index.styled';
import { Button } from '../../components/button';
export const Blog: React.FC = () => {
    return (
        <Wrapper>
                <PrevImg>
                    <img src={require('../../images/Rectangle 4958.png')}/>
                </PrevImg>
                <Main>
                    <Description>
                        <Title>
                            Special rates for contract for 6+ months!
                        </Title>
                        <Text>
                            If your contract with us for 6 months or more with a certain commitment of cargo you will ship- you are definitely getting lower rates
                        </Text>
                        <Button 
                            children='See More ->'
                            fontSize='16px'
                            fontColor='#155DE9'
                            btnColor='#ffffff'
                            borderColor='#155DE9'
                        />
                    </Description>

                    <Image>
                        <div>
                            <Month> 
                                6 Months
                            </Month>
                            <Rate>
                                Rate
                                <Price>
                                    <span>$2000</span>
                                    <span>$1500</span>
                                </Price>
                            </Rate>
                        </div>
                        <Img>
                            <img src={require('../../images/Rectangle 4959.png')}/>
                        </Img>
                    </Image>
                </Main>
                <NextImg>
                    <img src={require('../../images/Rectangle 4957.png')}/>
                </NextImg>
            <Circles>
                <svg xmlns="http://www.w3.org/2000/svg" width="134" height="14" viewBox="0 0 134 14" fill="none">
                    <circle cx="7" cy="7" r="7" fill="#155DE9"/>
                    <circle cx="37" cy="7" r="6.5" stroke="#155DE9"/>
                    <circle cx="67" cy="7" r="6.5" stroke="#155DE9"/>
                    <circle cx="97" cy="7" r="6.5" stroke="#155DE9"/>
                    <circle cx="127" cy="7" r="6.5" stroke="#155DE9"/>
                </svg>
            </Circles>
        </Wrapper>
    )
}