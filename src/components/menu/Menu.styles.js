import styled, {css} from 'styled-components';
import time from '../../assets/images/time-t.png';
const MenuTrigger = styled.div`
    @media screen and (min-width: 601px) {
        display: none;
    }
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 1rem;
    border-radius: 50%;
    z-index: 10;
    width: 50px;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: var(--brown);
    cursor: pointer;
    span {
        display: flex;
        width: 30px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background: var(--black);
        border-radius: 10px 0 10px 0;
        z-index: 1;
        transform-origin: 5px 0px;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }
    span:first-child {
        transform-origin: 0% 0%;
    }
    span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }
    span:last-child {
        margin-bottom: 0;
    }
    &.toggled {
        span {
            opacity: 1;
            transform: rotate(42deg) translate(-3px, -2px);
            background: var(--dark-red);
        }
        span:nth-last-child(3) {
            opacity: 0;
            transform: rotate(0deg) scale(0.1, 0.1);
        }
        span:nth-last-child(2) {
            transform: rotate(-42deg) translate(0, -2px);
        }
    }
`;

const MenuNav = styled.nav`
    min-height: 80px;
    font-size: 12px;
    margin-top: 20px;
    background: var(--beige);

    .logo-mobile {
        width: 140px;
        height: auto;
        margin: 0.2rem 1rem;
        display: none;
    }
    @media screen and (max-width: 600px) {
        height: 65px;
        padding: 0;
        display: flex;
        align-items: center;
        .logo-mobile {
            display: block;
        }
    }
`;

const MenuItem = styled.div(
    css`
        margin: 0 1rem;
        font-size: 1rem;
        font-family: Code;
        text-transform: uppercase;
        a.button {
            text-decoration: none;
            box-sizing: border-box;
            padding: 0.4rem;
            color: var(--dark-red);
            border: 0 solid;
            outline: 1px solid;
            outline-color: var(--brown);
            outline-offset: 0px;
            text-shadow: none;
            transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
            background-color: var(--beige);
            &:hover {
                border: 1px solid;
                background-color: var(--brown);
                outline-color: rgba(255, 255, 255, 0);
                outline-offset: 15px;
            }
            &.disabled {
                pointer-events: none;
                cursor: not-allowed;
                opacity: 0.5;
            }
        }
        img {
            width: 43px;
            height: auto;
            cursor: pointer;
        }
        @media screen and (max-width: 600px) {
            font-size: 2rem;
            padding: 1rem;

            img {
                width: 65px;
            }
        }
    `
);
const StakeButton = styled.div`
    @media screen and (max-width: 600px) {
        display: none;
    }
    .wallet-adapter-button {
        display: flex;
        justify-content: space-around;
        border-radius: 0;
        font-weight: bold;
        color: var(--red);
        padding: 5px 10px;
        font-size: 11px;
        line-height: 40px;
        min-width: 180px;
        min-height: 40px;
        cursor: pointer;
        line-height: auto;
        font-family: 'Shrimp', cursive;
        margin: 1rem;

        &:hover {
            border-color: var(--shadow-purple);
            color: var(--shadow-purple);
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        img {
            width: 15px;
            height: 15px;
            display: block;
            margin: 0;
        }
    }
`;

const MenuStyled = styled.div`
    @media screen and (max-width: 600px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0;
        width: 100vw;
        height: 100vh;
        transform-origin: 0% 0%;
        transform: translate(100%, 0);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
        background-image: url(${time});
        background-size: auto;
        background-position: center 64%;
        background-color: var(--brown);
        text-align: center;
        div {
            display: block;
        }
        &.toggled {
            transform: translate(0, 0);
        }
        .logo {
            display: none;
        }
    }
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    z-index: 8;

    .logo {
        width: 140px;
        height: auto;
    }
`;

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`;

export {MenuNav, MenuTrigger, MenuItem, StakeButton, StyledDiv};

export default MenuStyled;
