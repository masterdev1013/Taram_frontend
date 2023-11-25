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
    flex-direction:row;
    color: #03203F;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 250%; /* 24.304px */
    img {
        margin-right:10px;
    }
    margin-right:20px;
`;
export const Status = styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    margin-right:12px;
`;
export const ShippingTitle = styled.div`
    color: #03203F;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    svg {
        margin-right:5px;
    }
    margin-bottom:20px;
`;
export const ShippingBar = styled.div`

`;
export const Bar = styled.div`
    display:flex;
    margin-bottom:10px;
    box-sizing:border-box;
    padding:10px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    color: #155DE9;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height:200%; /* 21.266px */
    svg {
        margin-top:8px;
        margin-right:20px;
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
