import styled from 'styled-components'

interface WrapperProps {
    fontsize:String,
    fontcolor:String
}

export const Wrapper = styled.p<WrapperProps>`
    font-size:${props => props.fontsize ? `${props.fontsize}` : '12px'};
    color:${props => props.fontcolor ? `${props.fontcolor}` : '12px'};
`;