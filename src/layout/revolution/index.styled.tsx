import styled from "styled-components";

export const Wrapper = styled.div`
    padding:10px 100px 100px 10px;
    background-color:white;
    
`;

export const Images = styled.div`
    
    width:1106px;
    height:689px;
    position:relative;
    img {
        position:absolute;
        top:80px;
        left:80px;
        z-index:1;
        width:600px;
    }
`;

export const Blue = styled.div`
    position:absolute;
    top:120px;
    right:75px;
    width:762px;
    height:515px;
    background-color:#155DE9;
    content:"";
`

export const Join = styled.div`
    width:741px;
    height:488px;
    
    position:absolute;
    left:577px;
    top:134px;
    z-index:2;
    background-color:white;
    button{
        margin-left:71px;
    }
`;

export const Title = styled.div`
    color: #03203F;
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 151.9%;
    margin:122px 0 16px 71px;
    span {
        color: #155DE9;
        font-family: Poppins;
        font-size: 35px;
        font-style: normal;
        font-weight: 600;
        line-height: 151.9%;
    }
`;

export const Description = styled.div`
    color: #677587;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    width:592px;
    margin-left:71px;
    margin-bottom:40px;
`;