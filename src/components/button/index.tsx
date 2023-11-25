import React from 'react';
import { Wrapper } from './index.styled';

export const Button: React.FC<{
    children:any,
    btnColor:String, 
    fontSize:String, 
    fontColor:String, 
    borderColor:String
}> = ({
    children, 
    btnColor, 
    fontSize, 
    fontColor, 
    borderColor
}) => {
    return (
        <Wrapper btncolor={btnColor} fontsize={fontSize} fontcolor={fontColor} bordercolor={borderColor}>
            {children}
        </Wrapper>
    )
};