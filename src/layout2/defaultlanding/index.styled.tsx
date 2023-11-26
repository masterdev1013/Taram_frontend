import styled from "styled-components";

export const Wrapper = styled.div`
    height: 477px;
    flex-shrink: 0;
    
    padding:149px 100px;
    box-sizing:border-box;
    background: #F1F7FF;
    text-align:center;
    width:1440px;
    @media screen and (max-width:1440px)  {
        width:1440px;
    }
`;

export const Title = styled.div`
    color: #03203F;
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    span {
        color: #155DE9;
        font-family: Poppins;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;

export const ButtonBar = styled.div`
    width: 405px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-sizing:border-box;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:5px 20px;
    margin-left:320px;
    margin-right:16px;
    div {
        width: 106px;
        height: 38px;
        flex-shrink: 0;
        text-align:center;
        padding:5px;
        box-sizing:border-box;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
    }

    div:first-child{
        color: #155DE9;
        border-radius: 4px;
        background: #F1F7FF;
    }
`;

export const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:168px;
`;

export const SearchBar = styled.div`
    position:absolute;
    width: 1240px;
    box-sizing:border:box;
    padding:5px;
    flex-shrink: 0;
    background: #FFF;
    margin-top:20px;
    display:flex;
    align-items:center;
    overflow:auto;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.10);
`;

export const Switch = styled.div`
    
    padding-top:14px;
    margin-left:70px;
`
export const Search = styled.div`
    width:25%;
    display:flex;
    flex-direction:row;
`;
export const Icon = styled.div`
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #F1F7FF;
    margin-right:5px;
    padding:12px;
    box-sizing:border-box; 
`;
export const SearchTitle = styled.div`
    color: #03203F;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
export const Text = styled.div`
    color: #677587;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const Desc = styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
`;
export const SearchIcon = styled.div`
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #155DE9;
    padding:15px;
    box-sizing:border-box;
    margin-left:125px;
    margin-top:4px;
`