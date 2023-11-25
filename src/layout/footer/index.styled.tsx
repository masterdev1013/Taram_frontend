import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    height: 785px;
    background: #002366;
    padding:70px 100px;
    h1 {
        margin-bottom:16px;
    }
    hr {
        width:100%;
        background: rgba(255, 255, 255, 0.20);
    }
`;

export const FooterContent = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:180px;

    h1 {
        margin-bottom:16px;
    }
`

export const Products = styled.div`
    width:25%;
`;
export const Solutions = styled.div`
    width:25%;
`;
export const Developers = styled.div`
    width:18%;
`;
export const Resources = styled.div`
    width:17%;
`;
export const Company = styled.div`
    width:14%;
`;

export const List = styled.div`
    ul {
        list-style:none;
        margin:0;
        padding:0;
        display:flex;
        flex-direction:column;
        align-items:start;
        color:#fff;
        li {
            margin-bottom:14px;
        }
    }
`;
export const Copyright = styled.div`
    display:flex;
    justify-content:center;
    padding:10px 0;
    color:#fff;
    ul {
        list-style:none;
        margin:0;
        padding:0;
        display:flex;
        flex-direction;row;
        align-items:center;
        li {
            padding:0px 50px;
            border-right:1px solid #fff;
        }
        li:last-child {
            border:none;
        }
    }

`;

export const Social = styled.div`
    margin:45px 0;
    ul {
        margin:0;
        padding:0;
        list-style:none;
        display:flex;
        flex-direction:row;
        li{
            margin-right:10px;
        }
    }
`