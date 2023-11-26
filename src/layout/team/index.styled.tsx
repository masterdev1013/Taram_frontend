import styled from "styled-components";

export const Wrapper = styled.div`
    padding:100px;
    
    display:flex;
    flex-direction:row;
    position:relative;
    overflow:hidden;
    @media screen and (max-width:1440px)  {
        width:1240px;
    }
`;

export const Description = styled.div`
    margin-right:30px;
`;
export const Images = styled.div`
    display:flex;
    flex-direction:row;
`;
export const Icon = styled.div`
    margin-bottom:40px;
    width: 65px;
    height: 65px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #155DE9;
    box-shadow: 5px 4px 15px 0px rgba(31, 117, 243, 0.25);
`;
export const Text = styled.div`
    width:392px;
    color: #03203F;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 180%; 
    margin-bottom:40px;
`;
export const Img1 = styled.div`
    width: 394px;
    height: 490px;
    flex-shrink: 0;
`;
export const Img2 = styled.div`
    width: 287px;
    height: 387px;
    flex-shrink: 0;
    margin-left:30px;
`;
export const Img3 = styled.div`
    width: 287px;
    height: 387px;
    flex-shrink: 0;
    margin-left:30px;
`;
export const Small = styled.div`
    display:flex;
    flex-direction:row;
`;
export const SmallDescrip = styled.div`
    display:flex;
    flex-direction:column;
`;
export const SmallIcon = styled.div`
    width: 84px;
    height: 84px;
    flex-shrink: 0;
    margin-right:22px;
    img {
        width:100%;
        height:100%;
    }
`;
export const SmallTitle = styled.div`
    color: #03203F;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
export const SmallText = styled.div`
    color: #677587;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const Prev = styled.div`
    position:absolute;
    bottom:120px;
    right:220px;
    padding:16px;
    box-sizing:border-box;
    border-radius:50px;
    background-color: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.06);
    svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
    }
`;
export const Next = styled.div`
    position:absolute;
    bottom:120px;
    right:120px;
    padding:16px;
    box-sizing:border-box;
    border-radius:50px;
    background-color: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.06);
    svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
    }
`;
