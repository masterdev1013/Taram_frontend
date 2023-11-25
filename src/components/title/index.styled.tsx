import styled from 'styled-components'

interface WrapperProps {
    fontsize:String,
    fontweight:String,
    fontcolor:String
}

export const Wrapper = styled.h1<WrapperProps>`
    font-size:${props => props.fontsize ? `${props.fontsize}` : '12px'};
    font-weight:${props => props.fontweight ? `${props.fontweight}` : '200'};
    color:${props => props.fontcolor ? `${props.fontcolor}` : 'black'};
`;