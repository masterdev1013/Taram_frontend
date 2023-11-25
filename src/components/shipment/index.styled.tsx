import styled from "styled-components";

export const Wrapper = styled.div`
    width: 393px;
    height: 268px;
    flex-shrink: 0;
    padding:30px;
    box-sizing:border-box;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.div`
    display:flex;
    color: #03203F;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 180%;
`;

export const Icon = styled.div`
    position:relative;
`;

export const Description = styled.div`
    width:345px;
    color: #677587;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
`;

export const Div1 = styled.div`
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #155DE9;
    z-index:9;
`;

export const Div2 = styled.div`
    position:absolute;
    bottom:5px;
    right:-5px;
    width: 48px;    
    height: 48px;
    transform: rotate(16.547deg);
    flex-shrink: 0;
    border-radius: 6px;
    background-color: #C4D8F4;
    margin-right:15px;
`;