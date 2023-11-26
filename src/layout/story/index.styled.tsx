import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #F1F7FF;
    padding:50px 0;
    text-align:center;
    
    overflow:hidden;

    @media screen and (max-width:1440px)  {
      width:1440px;
    }
`;

export const Slider = styled.div`
  margin-bottom:30px;
  height: 80px;
  overflow: hidden;
  position: relative;
  width: 100%;
  	@-webkit-keyframes s_scroll {
		0% {
			-webkit-transform: translateX(0);
							transform: translateX(0);
		}
		100% {
			-webkit-transform: translateX(calc(-156.8px * 7));
							transform: translateX(calc(-156.8px * 7));
		}
	}

	@keyframes s_scroll {
		0% {
			-webkit-transform: translateX(0);
							transform: translateX(0);
		}
		100% {
			-webkit-transform: translateX(calc(-156.8px * 7));
							transform: translateX(calc(-156.8px * 7));
		}
	}
`

export const Images = styled.div`
-webkit-animation: s_scroll 30s linear infinite;
          animation: s_scroll 30s linear infinite;
  display: flex;
  width: calc(156.8px * 12);
`
export const Img = styled.div`
  margin-right:31.2px;
  img {
    width:156.8px;
    height:80px;
  }
}
`
export const Title = styled.div`
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
`