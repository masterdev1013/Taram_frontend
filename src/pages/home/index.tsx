import React from 'react';
import { Wrapper } from './index.styled';
import { DefaultLanding } from '../../layout/defaultlanding';
import { Revolution } from '../../layout/revolution';
import { About } from '../../layout/about';
import { Team } from '../../layout/team';
import { Product } from '../../layout/product';
import { Story } from '../../layout/story';
import { Insight } from '../../layout/insight';
import { Expertise } from '../../layout/expertise';
import { News } from '../../layout/news';
export const Home: React.FC = () => {
    return (
        <Wrapper>
            <DefaultLanding />
            <Revolution />
            <About />
            <Team />
            <Product />
            <Story />
            <News />
            <Insight />
            <Expertise />
        </Wrapper>
    )
};