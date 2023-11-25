import React from 'react';
import { Wrapper } from './index.styled';
import { DefaultLanding } from '../../layout2/defaultlanding';
import { Deals } from '../../layout2/deals';
import { Blog } from '../../layout2/blog';
import { Service } from '../../layout2/service';
import { Shipping } from '../../layout2/shipping';
import { Advantage } from '../../layout2/advantage';
import { FromBlog } from '../../layout2/fromblog';

export const Home2: React.FC = () => {
    return (
        <Wrapper>
            <DefaultLanding />
            <Deals />
            <Blog />
            <Service />
            <Shipping />
            <Advantage />
            <FromBlog />
        </Wrapper>
    )
};