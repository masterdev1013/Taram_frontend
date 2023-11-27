import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:15px 100px;
    background-color:white;
    @media screen and (max-width:1440px){
        width:1240px;   
    }
}
`
export const Logo = styled.div`
    
    a {
        text-decoration:none;
        text-transform:uppercase;
        color: #155DE9;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 6.8px;
    }
`;

export const Navigation = styled.div`
    

    ul {
        display:flex;
        flex-direction:row;
        align-items:center;
        list-style:none;
        margin:0;
        padding:0;

        li {
            margin-right:50px;
            a {
                text-decoration:none;
                color: #03203F;
                font-family: Poppins;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                svg {
                    width: 13.68px;
                    height: 13.68px;
                    flex-shrink: 0;
                    margin-left:6px;
                }
            }
        }
    }
`;

export const Register = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    svg {
        fill: #03203F;
        stroke-width: 0.2px;
        stroke: #03203F;
    }
    button {
        margin-left:16px;
    }
`
