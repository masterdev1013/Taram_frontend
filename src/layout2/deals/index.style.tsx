import styled from "styled-components";

export const Wrapper = styled.div`
    
    padding:100px 100px 0 100px;
`;

export const Title = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:50px;
    color: #03203F;
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    span {
        color: #155DE9;
        font-family: Poppins;
        font-size: 35px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;
export const Hots = styled.div`
    margin-bottom:100px;
`;
export const Caption = styled.div`
    color: #03203F;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    img {
        margin-left:15px;
    }
    margin-bottom:20px;
`;
export const HotsBlog = styled.div`
    display:flex;
    flex-direction:row;
`;
export const Hot = styled.div`
margin-right:25px;
width: 288px;
height: 296px;
flex-shrink: 0;
border-radius: 12px;
background: #FFF;
box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.10);
padding:16px;
box-sizing:border-box;

`;
export const Country = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    img {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        margin-right:9px;
    }
    color: #03203F;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin:12px 0;
`;
export const PriceBar = styled.div`
    display:flex;
    justify-content:space-between;
`;
export const Bar = styled.div`
    display:flex;
    padding:0 7px;
    align-items:center;
    justify-content:space-between;
    maring-right:20px;
    width: 120px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #F1F7FF;
    color: #03203F;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    box-sizing:border-box;
    line-height: 150%; /* 21.266px */
`;
export const Price = styled.div`
    color: #155DE9;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 151.9%; /* 30.38px */
`;