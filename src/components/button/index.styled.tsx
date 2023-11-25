import styled from 'styled-components';

interface WrapperProps {
    btncolor:String,
    fontsize:String,
    fontcolor:String,
    bordercolor:String
}

export const Wrapper = styled.button<WrapperProps>`
    background-color:${props => props.btncolor ? `${props.btncolor}` : '#141416'};
    font-size:${props => props.fontsize ? `${props.fontsize}` : '12px'};
    color:${props => props.fontcolor ? `${props.fontcolor}` : '12px'};
    border:1px;
    border-style:solid;
    border-color:${props => props.bordercolor ? `${props.bordercolor}` : 'white'};
    padding:13px 20px;
    border-radius:4px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
`