import React from 'react';
import { 
    Wrapper,
    Title,
    Description ,
    Img1,
    Img2,
    Img3,
    Images,
    Content
} from './index.style';
import { Button } from '../../components/button';

export const DefaultLanding: React.FC = () => {
    return(
        <Wrapper>
            <Content>
                <Title>
                    Your end-to-end <span>supply chain</span>, all in one platform
                </Title>
                <Description>
                    Send, receive, deposit, request, invest and exchange money globally 
                    in multiple currencies easily, quickly and safely with great rates 
                    and low fees.
                </Description>

                <Button 
                    children='Escrow Money ->'
                    fontSize='16px'
                    fontColor='#ffffff'
                    btnColor='#155DE9'
                    borderColor='#155DE9'
                />
            </Content>
            <Images>
                <Img1>
                    <img src={require('../../images/Rectangle 4756.png')}/>
                </Img1>
                <Img2>
                    <img src={require('../../images/Rectangle 4755.png')}/>
                </Img2>
                <Img3>
                    <img src={require('../../images/Rectangle 6.png')}/>
                </Img3>
            </Images>
        </Wrapper>
    )
};