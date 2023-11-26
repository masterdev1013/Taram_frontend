import styled from "styled-components";

export const Wrapper = styled.div`
    padding:100px;
    @media screen and (max-width:1440px)  {
        width:1240px;
    }
`;
export const InsightTitle = styled.div`
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
    svg {
        margin-left:10px;
    }
`

export const InsightContent = styled.div`
    display:flex;
    flex-direction:row;
`;
export const List = styled.div`
    display:flex;
    flex-direction:row;
    margin-left:30px;
    margin-bottom:30px;
`;
export const ListImg = styled.div`
    margin-right:30px;
`;
export const ListDescrip = styled.div`
    padding-top:20px;
`;
export const ListGroup = styled.div`
    display:flex;
    flex-direction:column;
`;
export const Image = styled.div`
    margin-bottom:20px;
`;
export const ImgTitle = styled.div`
    color: #677587;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    text-transform: uppercase;
    margin-bottom:20px;
`;
export const ListImgTitle = styled.div`
    color: #677587;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    text-transform: uppercase;
    margin-bottom:10px;
`;
export const Text = styled.div`
    width:605px;
    color: #677587;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px; /* 218.75% */
    margin-bottom:30px;
`;
export const Description = styled.div`

`;
export const Title = styled.div`
    color: #03203F;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 30px */
    margin-bottom:30px;
`;

export const ListTitle = styled.div`
    color: #03203F;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 30px */
    margin-bottom:30px;
`
