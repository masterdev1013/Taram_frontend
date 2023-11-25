import React from 'react'
import { Wrapper } from './index.styled';

export const Label: React.FC<{children:any,fontSize:String,fontColor:String}> = ({children,fontSize,fontColor}) => {
    return (
        <Wrapper fontsize={fontSize} fontcolor={fontColor}>
            {children}
        </Wrapper>
    )
};