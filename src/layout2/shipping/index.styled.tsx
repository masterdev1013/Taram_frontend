import styled from "styled-components";

export const Wrapper = styled.div`
    padding:50px 100px;
    background:#F1F7FF;
`;

export const Title = styled.div`
    display:flex;
    justify-content:center;
    color: #03203F;
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 151.9%; /* 53.165px */
    span {
        color: #155DE9;
        font-family: Poppins;
        font-size: 35px;
        font-style: normal;
        font-weight: 600;
        line-height: 151.9%;
    }
    margin-bottom:40px;
`;
export const ShippingBlog = styled.div`
    display:flex;
    flex-direction:row;
`;
export const Country = styled.div`
    display:flex;
    align-items:center;
    img {
        width: 30px;
        height: 24px;
        flex-shrink: 0;
        margin-right:10px;
    }
    color: #03203F;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 151.9%; /* 24.304px */
`;
export const Status = styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    margin-right:30px;
`;
export const ShippingTitle = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    color: #03203F;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    margin-bottom:20px;
    svg{
        margin-right:5px;
    }
`;
export const ShippingBar = styled.div`
    display:flex;
    flex-direction:column;

`;
export const Bar = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width: 393px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.02);
    padding:14px 16px;
    box-sizing:border-box;
    margin-bottom:24px;
    span {
        color: #155DE9;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 151.9%; /* 21.266px */
        margin-left:40px;
    }
    svg {
        margin-left:30px;
        margin-right:25px;
    }
`;

export const ButtonGroup = styled.div`
    display:flex;
    justify-content:center;
    margin-top:10px;
    button {
        margin-right:10px;
    }
`
