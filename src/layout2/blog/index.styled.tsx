import styled from "styled-components";

export const Wrapper = styled.div`
    
    // display:flex;
    // flex-direction:row;
    // padding-bottom:100px;
    // position:relative;
    html, body {
        padding: 0;
        margin: 0;
        background: #005C97;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #363795, #005C97);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #363795, #005C97); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        
        width: 100vw;
        height:100vh;
        display:flex;
        align-item:center;
       
      
      }
      .container {
        position: relative;
        margin: 0 auto;
        width: 80%;
        margin-top:100px;
      
      }
      h2{
        font-family:Pacifico;
        font-size:36px;
        margin:20px auto;
        text-align:center;
      }
      img{
        border-radius:8px;
        background:#fff;
        color:#3498db;
        font-size:36px;
        line-height:100px;
        margin:10px;
        // padding:2%;
        //width: 100px;
        //height: 100px;
        position:relative;
        text-align:center;
        .top {
          font-size: 70%;
          height: 70%;
          
          margin: 0 auto;
       
        }
        .bottom {
          font-size: 70%;
          width: 70%;
          margin: 0 auto;
       
        }
      }
      .clip {
      
        // height: 200px;
        overflow: hidden;
        bottom: 0;
      }
      
      .center .slick-slide {
       
        // height: 500px;
      }
      
      .center .slick-center img{
        //-moz-transform:scale(1.08);
        //-ms-transform:scale(1.08);
        //-o-transform:scale(1.08);
        //-webkit-transform:scale(1.08);
        transform:scale(1.0);
        //width: 150px;
        //height: 120px;
        color:#e67e22;
        opacity:1;
        .top {
          font-size: 90%;
          width: 90%;
          background-color: rgba(blue, 0.3);
        }
        .bottom {
          font-size: 90%;
          width: 90%;
          background-color: rgba(green, 0.3);
        }
      }
      .center img{
        opacity:0.8;
        transition:all 300ms ease;
        bottom: 0;
        transform:scale(0.9);
      }
      
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