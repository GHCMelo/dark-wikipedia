import styled from 'styled-components'

const colors = {
    bg: "#121214",
    bg_secondary: "#212025",
    bg_tertiary: "#29282d",
    title: "#e1e1ec",
    text: "#a8a8b3"
}

export const Body = styled.div`
    background-color: ${colors.bg};
    height: 100vh;
`

export const Header = styled.div`
    background-color: ${colors.bg_secondary};
    height: 70px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: fixed;
    z-index: 1;

    & > div:nth-child(1){

        display: flex;
        align-items: center;
        margin-left: 25px;

        & > img{
            width: 50px;
            height: 50px;
            display: none;

            @media(max-width: 800px){
                display: block;
            };
        };
        
    }

    & > div:nth-child(2){
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;

        & > svg {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
        };

        & > input {
            background-color: ${colors.bg};
            color: ${colors.title};
            width: 100%;
            height: 50px;
            padding: 0px 1em 0px 2.65em;
            border-radius: 7px;
            border: none;
            transition: border 0.3s;
            
            &:focus {
                outline: none;
                border: 1px solid ${colors.text}
            }
        }
    }

    & > div:nth-child(3){
        display: flex;
        padding-right: 15px;
        justify-content: flex-end;
        align-items: center;

        & > span {
            display: flex;
            justify-content: center;
            align-items: center;
            background: ${colors.bg};
            border-radius: 50%;
            width: 50px;
            height: 50px;
            padding: 1px;

            & > svg {
                color: ${colors.text}
            }
        }
    }
`

export const Layout = styled.div`
    display: flex;
    flex-direction: row;
    background: ${colors.bg};
`

export const Accordion = styled.div`

`

export const Collapse = styled.div`
    background-color: ${props => props.active ? colors.bg_tertiary : "none" };
`

export const Items = styled.div`
    display: ${props => props.display === true ? "flex": "none" };
    color: ${colors.text};
    background: ${colors.bg_tertiary};
    padding: 10px 20px;
    flex-direction: column;
    overflow: hidden;

    & > span {
        margin-bottom: 5px;
    }
`

export const SideMenu = styled.div`
    background-color: ${colors.bg_secondary};
    box-shadow: 2px 0px 40px -15px rgb(21 21 21);
    width: 15%;
    height: calc(100vh + 70px);
    position: fixed;
    top: -70px;
    z-index: 2;

    & > div:nth-child(1){
        height: 70px;
        background: ${colors.bg};
        margin-top: 70px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        & > img {
            width: 50px;
            height: 50px;
        };
    };

    & > div:nth-child(2){

        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;

        & > span {
            color: ${colors.title};
            font-size: 18px;
        }
    }

    ${Accordion}{
        margin: 20px 0;
        ${Collapse}{            
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: ${colors.text};
            cursor: pointer;
            padding: 10px 15px;
            
            &:hover{
                background: ${colors.bg_tertiary};
            }
        }
    };

    @media(max-width: 800px){
        display: none;
    }
`

export const Introduction = styled.div`

`

export const Text = styled.div`

`

export const Content = styled.div`
    width: 65%;
    margin-left: 15%;
    padding: 0 30px 0 20px;
    margin-top: 80px;

    ${Introduction}{
        & > h1 {
            color: ${colors.title};
        }

        & > p {
            color: ${colors.text};
            font-size: 15px;
            line-height: 24px;
        }
    }

    ${Text}{
        margin-top: 50px;

        & > h2 {
            color: ${colors.title};
        }

        & > p {
            color: ${colors.text};
            font-size: 15px;
            line-height: 24px;
        }
    };

    @media(max-width: 800px){
        width: 100%;
        margin-left: 0px;
    }
`

export const SideRightMenu = styled.div`
    margin-top: 80px;
    background: ${colors.bg_secondary};
    border-radius: 7px;
    padding: 20px 10px;
    margin-left: 15px;
    margin-right: 15px;
    width: calc((100% - (65% + 15%)) - 15px);
    height: min-content;
    border: 1px solid #2e2c2f;

    & > div:nth-child(1){

        display: flex;
        align-items: center;
        flex-direction: column;

        & > h4 {
            text-align: center;
            color: ${colors.text}
        };
    
        & > img {
            margin-top: 10px;
            width: 80%;
        }
    }

    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;

        & > span {
            margin-bottom: 5px;
            color: ${colors.text}
        }
    }

    & > div:nth-child(3){
        margin-top: 40px;

        & > div{
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-top: 10px;

            & > span:nth-child(1){
                color: ${colors.text};
            };

            & > span:nth-child(2){
                color: ${colors.text};
                font-weight: bold;
            }
        }
    }

    @media(max-width: 800px){
        display: none;
    }
`