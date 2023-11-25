import React from 'react';
import { 
    Wrapper,
    Images,
    Join,
    Title,
    Blue,
    Description
} from './index.styled';

import { Button } from '../../components/button';

export const Revolution: React.FC = () => {
    return (
        <Wrapper>
            <Images>
                <img src={require('../../images/vidar-nordli-mathisen-y8TMoCzw87E-unsplash 1.png')}/>
                <Blue></Blue>
               <Join>
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
                </Join>
            </Images>
        </Wrapper>
    )
}