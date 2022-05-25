import styled, {css} from 'styled-components';

const MenuTrigger = styled.div`
    @media screen and (min-width: 601px) {
        display: none;
    }
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 25px;
    left: 25px;
    z-index: 10;
    -webkit-user-select: none;
    user-select: none;
    text-align: center;
    span {
        display: flex;
        width: 29px;
        height: 2px;
        margin-bottom: 5px;
        position: relative;
        background: var(--main-green);
        border-radius: 3px;
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
    &.toggled {
        span {
            opacity: 1;
            transform: rotate(45deg) translate(-3px, -1px);
            background: var(--main-red);
        }
        span:nth-last-child(3) {
            opacity: 0;
            transform: rotate(0deg) scale(0.1, 0.1);
        }
        span:nth-last-child(2) {
            transform: rotate(-45deg) translate(0, -1px);
        }
    }
`;

const MenuNav = styled.nav`
    @media screen and (max-width: 600px) {
        height: 65px;
        padding: 0;
        display: flex;
        align-items: center;
    }
    min-height: 80px;
    font-size: 12px;
    background-color: var(--main-black);

    .logo-mobile {
        width: 140px;
        height: auto;
        margin: 0.2rem 1rem;
    }
`;

const MenuItem = styled.div(
    css`
        text-align: left;
        a {
            text-decoration: none;
            color: #f2f2f2;
            display: block;
            margin: 0 1rem;
            font-family: Neueplak;
            color: var(--dark-white);
        }
        a.active {
            border-bottom: 1px solid var(--light-green);
        }
        a:hover:not(img) {
            border-bottom: 1px solid var(--light-green);
        }
        img {
            width: 30px;
            height: 30px;
            cursor: pointer;
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
        color: var(--light-purple);
        background: transparent;
        padding: 5px 10px;
        border: 2px solid var(--light-purple);
        font-size: 11px;
        line-height: 40px;
        min-width: 180px;
        min-height: 40px;
        cursor: pointer;
        line-height: auto;
        font-family: 'Press Start 2P', cursive;
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
        display: block;
        width: auto;
        height: auto;
        box-shadow: 0 0 10px var(--main-green);
        top: 0;
        left: 0;
        padding: 50px;
        background-color: var(--main-black);
        transform-origin: 0% 0%;
        transform: translate(-110%, 0);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
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
        width: 90px;
        height: auto;
        margin: 1rem 0;
    }
`;

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`;

export {MenuNav, MenuTrigger, MenuItem, StakeButton, StyledDiv};

export default MenuStyled;
