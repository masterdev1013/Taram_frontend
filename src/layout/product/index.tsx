import React from 'react';
import { 
    Wrapper ,
    Product1,
    Product2,
    Product3,
    Images,
    Images1,
    Blue,
    Blue1,
    Join,
    Join1,
    Title,
    Title1,
    Description,

} from './index.styled';
import { Button } from '../../components/button';
export const Product: React.FC = () => {
    return(
        <Wrapper>
            <Product1>
                <Images1>
                    <Title1>
                        A Single System For All <span>Your Shipments</span>
                    </Title1>
                    <img src={require('../../images/2922 1.png')}/>
                    <Blue1></Blue1>
                    <Join1>
                        <Title>
                            Join the <span>Revolution</span>
                        </Title>
                        <Description>
                        Ship anywhere, sell everywhere, grow faster. Our new, end-to-end, AI-fueled technology empowers businesses to automate their supply chain from factory floor to customer door or retail store.
                        </Description>

                        <Button 
                            children='Sign Up Now ->'
                            fontSize='16px'
                            fontColor='#ffffff'
                            btnColor='#155DE9'
                            borderColor='#155DE9'
                        />
                    </Join1>
                </Images1>
            </Product1>
            <Product2>
                <Images>
                    <img src={require('../../images/dillon-shook-mY3_bvR74fI-unsplash 1.png')}/>
                    <Blue></Blue>
                <Join>
                        <Title>
                        Set Your  <span>Margins Free</span>
                        </Title>
                        <Description>
                        Act on surfaced insights to cut waste across your supply chain, minimize spend, avoid surprise fees, and strike the perfect balance between speed and cost.
                        </Description>
                    </Join>
                </Images>
            </Product2>
            <Product3>
                <Images1>
                    <img src={require('../../images/Rectangle 4723 (3).png')}/>
                    <Blue1></Blue1>
                    <Join1>
                        <Title>
                            Join the <span>Revolution</span>
                        </Title>
                        <Description>
                        Ship anywhere, sell everywhere, grow faster. Our new, end-to-end, AI-fueled technology empowers businesses to automate their supply chain from factory floor to customer door or retail store.
                        </Description>
                    </Join1>
                </Images1>
            </Product3>
        </Wrapper>
    )
};