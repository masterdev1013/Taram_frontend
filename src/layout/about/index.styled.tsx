import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #F1F7FF;
    padding:50px 100px;
    @media screen and (max-width:1440px)  {
        width:1240px;
    }
`;
export const ShipTitle = styled.div`
    display:flex;
    color: #03203F;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 270%;
`;

export const ShipIcon = styled.div`
    position:relative;
    margin-right:5px;
`;

export const Abouts = styled.div`
    display:flex;
    flex-direction:row;
`

export const ShipDescription = styled.div`
    width:345px;
    color: #677587;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
`;
export const Title = styled.div`
    color: #03203F;
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 151.9%;
    display:flex;
    justify-content:center;
    margin-bottom:40px;
    span {
        color: #155DE9;
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 151.9%;
    }
`;

export const ShipmentGroup = styled.div`
    width: 393px;
    height: 268px;
    flex-shrink: 0;
    padding:30px;
    box-sizing:border-box;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    margin-right:30px;
`;