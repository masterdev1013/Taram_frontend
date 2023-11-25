import styled from "styled-components";

export const Wrapper = styled.div`
    
    padding:100px;
`;

export const NewsTitle = styled.div`
    color: #03203F;
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 151.9%; /* 53.165px */
    justify-content:center;
    display:flex;
    margin-bottom:50px;
    span {
        color: #155DE9;
        font-family: Poppins;
        font-size: 35px;
        font-style: normal;
        font-weight: 600;
        line-height: 151.9%;
    }
`;
export const Image = styled.div`
    padding:30px;
    box-sizing:border-box;
    width: 393px;
    height: 463px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.07);
    margin-right:22px;
`
export const Title = styled.div`
    color: #03203F;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    width:300px;
    margin-bottom:30px;
`
export const Images = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:50px;
`;

export const Img1 = styled.div`
    margin-bottom:20px;
`;

export const ImgTitle = styled.div`
    color: #64748B;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: 5.6px;
    text-transform: uppercase;
    margin-bottom:10px;
`;

export const Button = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    color: #155DE9;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
    svg{
        margin-left:10px;
    }
`;

export const Circles = styled.div`
    display:flex;
    justify-content:center;
    svg {
        width: 110px;
        height: 14px;
        flex-shrink: 0;
    }
`;