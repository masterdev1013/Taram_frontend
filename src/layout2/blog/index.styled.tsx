import styled from "styled-components";

export const Wrapper = styled.div`
    
    display:flex;
    flex-direction:row;
    padding-bottom:100px;
    position:relative;
`;

export const Main = styled.div`
    width: 1242px;
    height: 600px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #ECF3FE;
    display:flex;
`;
export const Price = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:30px;
    span {
        color: #03203F;
        font-family: Poppins;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 151.9%; /* 45.57px */
    }
    span:first-child {
        color: #677587;
        font-family: Poppins;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 151.9%; /* 45.57px */
        text-decoration-line: strikethrough;
    }
`

export const Description = styled.div`
    width:40%;
    padding:150px 50px;
`;
export const Title = styled.div`
width:400px;
color: #03203F;
font-family: Poppins;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom:20px;
`;
export const Text = styled.div`
color: #677587;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 180%; /* 28.8px */
margin-bottom:30px;
`;
export const Image = styled.div`
    display:flex;
`;
export const Month = styled.div`
margin-top:250px;
width: 106px;
height: 48px;
flex-shrink: 0;
border-radius: 8px;
margin-bottom:20px;
background: #FFF;
box-shadow: 0px 5px 15px 0px rgba(21, 93, 233, 0.10);
color: #677587;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 200%; /* 24.304px */
box-sizing:border-box;
padding:8px 15px;
`;
export const Rate = styled.div`
    position:absolute;
    padding:20px;
    display:flex;
    flex-direction:column;
    width: 249px;
    height: 118px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 6px 15px 0px rgba(21, 93, 233, 0.10);
    color: #03203F;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 151.9%; /* 30.38px */
`;
export const Img = styled.div`
    margin-left:50px;
    margin-top:50px;
`;

export const PrevImg = styled.div`
    margin-top:30px;
    margin-right:28px;
`;
export const NextImg = styled.div`
    margin-top:30px;
    margin-left:30px;

`;
export const Circles = styled.div`
    position:absolute;
    bottom:50px;
    left:700px;
    display:flex;
    justify-content:center;
    svg {
        width: 110px;
        height: 14px;
        flex-shrink: 0;
    }
`;