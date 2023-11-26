import React from 'react';
import { Wrapper } from './index.styled';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import './index.css'
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const items = [
    <div className="item" data-value="1">
        <img src={require('../images/Rectangle 4753.png')}/>
    </div>,
    <div className="item" data-value="2">
        <img src={require('../images/Rectangle 4753.png')}/>
    </div>,
    <div className="item" data-value="3">
        <img src={require('../images/Rectangle 4753.png')}/>
    </div>,
    <div className="item" data-value="3">
        <img src={require('../images/Rectangle 4753.png')}/>
    </div>
];
export const Test: React.FC = () => {
    return (
        <Wrapper>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                paddingLeft={100}
                paddingRight={100}
            />
        </Wrapper>
    )
};
