import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #F1F7FF;
    padding:50px 0;
    text-align:center;
    
    overflow:hidden;
`;

export const Images = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:40px;
`
export const Img = styled.div`
    width: 156.8px;
    height: 80px;
    margin-right:31px;
    flex-shrink: 0;
    img {
        width:100%;
        height:100%;
    }
`
export const Title = styled.div`
    display:flex;
    justify-content:center;
    color: #03203F;
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 151.9%; /* 53.165px */
    margin-bottom:40px;
    span {
        color: #155DE9;
        font-family: Poppins;
        font-size: 35px;
        font-style: normal;
        font-weight: 600;
        line-height: 151.9%;
    }
`