import React from 'react';
import { 
    Wrapper,
    Title,
    Images,
    Img 
} from './index.styled';

import { Button } from '../../components/button';

export const Story: React.FC = () => {
    return(
        <Wrapper>
            <Title>
                A Single System For All <span>Your Shipments</span>
            </Title>
            <Images>
                <Img>
                    <img src={require('../../images/01-dark 1.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/03-light 1.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/04-dark 4.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/04-light 1.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/06-dark 1.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/06-dark 1.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/06-dark 1.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/06-dark 1.png')}/>
                </Img>
            </Images>
            <Images>
                <Img>
                    <img src={require('../../images/01-dark 1.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/03-light 1.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/04-dark 4.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/04-light 1.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/06-dark 1.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/06-dark 1.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/06-dark 1.png')}/>
                </Img>
                <Img>
                    <img src={require('../../images/06-dark 1.png')}/>
                </Img>
            </Images>

            <Button 
                children='Read Their Stories ->'
                fontSize='16px'
                fontColor='#ffffff'
                btnColor='#155DE9'
                borderColor='#155DE9'
            />
        </Wrapper>
    )
};