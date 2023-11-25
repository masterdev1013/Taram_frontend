import React from 'react';
import { Wrapper } from './index.styled';

export const Title: React.FC<{children:any,fontSize:String,fontWeight:String,fontColor:String}> = ({children,fontSize,fontWeight,fontColor}) => {
    return (
        <Wrapper fontsize={fontSize} fontweight={fontWeight} fontcolor={fontColor}>
            {children}
        </Wrapper>
    )
};