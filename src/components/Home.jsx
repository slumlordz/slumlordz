import {useState} from 'react';
import styled from 'styled-components';
import ObjectWrapper from './Object';
import Roadmap from './Roadmap';
import queen from '../assets/images/QUEEN_hm.png';
import block from '../assets/images/block.png';
import b2 from '../assets/images/b2.png';

import Map from './Map';
import SplashScreen from './Splash';
const MainHome = styled.div`
    box-shadow: inset 0 -6px 49px 2px var(--blue), inset 0 1px 17px var(--blue),
        inset 0 1px 74px var(--blue);
    background-color: var(--beige);
    display: flex;
    justify-content: space-between;
    padding: 4vmin 10vmin;
    height: calc(100vh - 100px - 8vmin);
    @media screen and (max-width: 801px) {
        display: block;
    }
`;

const Left = styled.div`
    text-align: right;
    line-height: 1;
    flex: 1;
    margin-right: 20vmin;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
        background-image: url(${block});
        background-clip: text;
        -webkit-background-clip: text;
        background-size: 120%;
        display: inline;
        background-position-y: 60%;
        color: transparent;
        font-size: 12vw;
        text-transform: uppercase;
        font-weight: 800;
        text-shadow: -5px -8px 0px black;
        -webkit-font-smoothing: antialiased;
        font-family: 'Code Italic', sans-serif;
        margin: 0;
    }

    .inline {
        position: relative;
    }

    .slum-text-s {
        cursor: pointer;

        &:before {
            content: '';
            color: var(--red);
            position: absolute;
            font-size: 1.5rem;
            font-family: PoliteType;
            text-transform: none;
            left: 0;
            right: 0;
            margin-left: 0;
            margin-right: 0;
            text-align: center;
            top: -1.5rem;
        }

        &:hover {
            text-shadow: none;
            &:before {
                content: 'Build and renovate using';
            }
        }
    }
    .slum-text-l {
        cursor: pointer;
        &:before {
            content: '';
            color: var(--red);
            position: absolute;
            font-size: 1.5rem;
            font-family: PoliteType;
            text-transform: none;
            left: 0;
            right: 0;
            margin-left: 0;
            margin-right: 0;
            text-align: center;
            top: -1.5rem;
        }

        &:hover {
            text-shadow: none;
            &:before {
                content: 'Battle others for';
            }
        }
    }
    .slum-text-u {
        cursor: pointer;
        &:before {
            content: '';
            color: var(--red);
            position: absolute;
            font-size: 1.5rem;
            font-family: PoliteType;
            text-transform: none;
            left: 0;
            right: 0;
            margin-left: 0;
            margin-right: 0;
            text-align: center;
            top: -1.5rem;
        }

        &:hover {
            text-shadow: none;
            &:before {
                content: 'Raffle for blue chip NFTs with';
            }
        }
    }
    .slum-text-m {
        cursor: pointer;
        &:before {
            content: '';
            color: var(--red);
            position: absolute;
            font-size: 1.5rem;
            font-family: PoliteType;
            text-transform: none;
            left: 0;
            right: 0;
            margin-left: 0;
            margin-right: 0;
            text-align: center;
            top: -1.5rem;
        }

        &:hover {
            text-shadow: none;
            &:before {
                content: 'Grab future collections minted with';
            }
        }
    }

    p {
        color: var(--black);
        font-family: 'Code', sans-serif;
        margin: 0;
        text-transform: uppercase;

        &.one {
            font-size: 8vw;
        }
        &.two {
            font-size: 6vw;
        }

        &.three {
            font-size: 4vw;
        }

        &.four {
            font-size: 3vw;
        }

        &.five {
            font-size: 2vw;
        }
    }
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    flex: 1;
    --glitch-width: 100%;
    --glitch-height: 100%;
    --gap-horizontal: 10px;
    --gap-vertical: 5px;
    --time-anim: 2s;
    --delay-anim: 2s;
    --blend-mode-1: none;
    --blend-mode-5: overlay;
    --blend-color-1: transparent;
    --blend-color-5: #af4949;

    .glitch__item {
        background: url(${queen}) no-repeat 50% 50% / cover;
        height: 100%;
        width: 93%;
        top: 0;
        left: 0;
        position: absolute;
    }

    .glitch__item:nth-child(n + 2) {
        opacity: 0;
    }

    .glitch__item:nth-child(2) {
        background-color: var(--blend-color-1);
        background-blend-mode: var(--blend-mode-1);
        animation-name: glitch-anim-2;
    }

    .glitch__item:nth-child(2) {
        background-color: var(--blend-color-1);
        background-blend-mode: var(--blend-mode-1);
        animation-name: glitch-anim-3;
    }

    .glitch__item:nth-child(4) {
        background-color: var(--blend-color-1);
        background-blend-mode: var(--blend-mode-1);
        animation-name: glitch-anim-4;
    }

    .glitch__item:nth-child(5) {
        background-color: var(--blend-color-5);
        background-blend-mode: var(--blend-mode-5);
        animation-name: glitch-anim-flash;

        @keyframes glitch-anim-flash {
            0%,
            5% {
                opacity: 0.2;
                transform: translate3d(
                    var(--glitch-horizontal),
                    var(--glitch-height),
                    0
                );
            }
            5.5%,
            100% {
                opacity: 0;
                transform: translate3d(0, 0, 0);
            }
        }
    }

    @keyframes glitch-anim-2 {
        0% {
            opacity: 1;
            transform: translate3d(var(--gap-horizontal), 0, 0);
            -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
        }
        2% {
            -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
            clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
        }
        4% {
            -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
            clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
        }
        6% {
            -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
            clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
        }
        8% {
            -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
            clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
        }
        10% {
            -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
            clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
        }
        12% {
            -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
            clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
        }
        14% {
            -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
            clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
        }
        16% {
            -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
            clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
        }
        18% {
            -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
            clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
        }
        20% {
            -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
            clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
        }
        21.9% {
            opacity: 1;
            transform: translate3d(var(--gap-horizontal), 0, 0);
        }
        22%,
        100% {
            opacity: 0;
            transform: translate3d(0, 0, 0);
            -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
            clip-path: polygon(0 0, 0 0, 0 0, 0 0);
        }
    }

    @keyframes glitch-anim-3 {
        0% {
            opacity: 1;
            transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0);
            -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
            clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
        }
        3% {
            -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
            clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
        }
        5% {
            -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
            clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
        }
        7% {
            -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
            clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
        }
        9% {
            -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
            clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
        }
        11% {
            -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
            clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
        }
        13% {
            -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
            clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
        }
        15% {
            -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
            clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
        }
        17% {
            -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
            clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
        }
        19% {
            -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
            clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
        }
        20% {
            -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
            clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
        }
        21.9% {
            opacity: 1;
            transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0);
        }
        22%,
        100% {
            opacity: 0;
            transform: translate3d(0, 0, 0);
            -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
            clip-path: polygon(0 0, 0 0, 0 0, 0 0);
        }
    }

    @keyframes glitch-anim-4 {
        0% {
            opacity: 1;
            transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0)
                scale3d(-1, -1, 1);
            -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
            clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
        }
        1.5% {
            -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
            clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
        }
        2% {
            -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
            clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
        }
        2.5% {
            -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
            clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
        }
        3% {
            -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
            clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
        }
        5% {
            -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
            clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
        }
        5.5% {
            -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
            clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
        }
        7% {
            -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
            clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
        }
        8% {
            -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
            clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
        }
        9% {
            -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
            clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
        }
        10.5% {
            -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
            clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
        }
        11% {
            -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
            clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
        }
        13% {
            -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
            clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
        }
        14% {
            -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
            clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
        }
        14.5% {
            -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
            clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
        }
        15% {
            -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
            clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
        }
        16% {
            -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
            clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
        }
        18% {
            -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
            clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
        }
        20% {
            -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
            clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
        }
        21.9% {
            opacity: 1;
            transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0)
                scale3d(-1, -1, 1);
        }
        22%,
        100% {
            opacity: 0;
            transform: translate3d(0, 0, 0);
            -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
            clip-path: polygon(0 0, 0 0, 0 0, 0 0);
        }
    }
    .wrap {
        position: relative;
        max-width: 35vmax;
        max-height: 40vmax;

        &:hover .glitch__item {
            animation-duration: var(--time-anim);
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
        img {
            max-width: 35vmax;
            max-height: 40vmax;
            height: auto;
            box-shadow: 16px 14px 9px 1px var(--dark-brown);
        }
        &:before {
            content: '';
            width: 90%;
            height: 100%;
            border: 2px solid var(--black);
            position: absolute;
            padding: 3rem;
            transform: rotate(10deg) skew(2deg, -2deg);
            top: -3rem;
            left: -2rem;
        }
    }
`;

const StyledP = styled.div`
    background-color: #0c0d0a;
    background-image: url(${b2});
    background-size: auto;
    background-position: center;
    background-blend-mode: soft-light;
    padding: 2rem;

    h1 {
        font-size: 3rem;
        color: var(--white);
        font-family: Shrimp;
    }
    p {
        font-size: 1.3rem;
        color: var(--white);
        background-color: #000;
        text-align: justify;
        font-family: 'PoliteType', sans-serif;
        padding: 2vmin 5vmin 5vmin;
        max-width: 700px;
        margin: auto;
        border: 3px solid var(--green);
    }
`;

const HomePage = (props) => {
    // const {
    //     candyMachineId,
    //     config,
    //     connection,
    //     treasury,
    //     txTimeout,
    //     startDateSeed,
    // } = props;
    // const [loaded, setLoaded] = useState(false);

    // const wallet = useAnchorWallet();

    return (
        <>
            {/* <ObjectWrapper /> */}
            <MainHome>
                <Left>
                    <div className='inline'>
                        <div className='slum-text-s'>S</div>
                        <div className='slum-text-l'>l</div>
                        <div className='slum-text-u'>u</div>
                        <div className='slum-text-m'>m</div>
                    </div>
                    <p className='one'>lordz</p>
                    <p className='two'>lordz</p>
                    <p className='three'>lordz</p>
                    <p className='four'>lordz</p>
                    <p className='five'>lordz</p>
                </Left>
                <Right>
                    <div className='wrap'>
                        <div className='glitch__item' />
                        <div className='glitch__item' />
                        <div className='glitch__item' />
                        <div className='glitch__item' />
                        <div className='glitch__item' />

                        <img src={queen} />
                    </div>
                </Right>
            </MainHome>
            <StyledP>
                <p>
                    <h1>PICTURE THIS</h1>
                    Glamour, excitement, and opportunities – big cities have
                    everything you need to make your dreams come to life. But
                    once you step into the crowd, you’ll find out that luxury
                    requires a little more than hard work. You’ll have to play
                    dirty. You’ll have to light your morals on fire. You’ll have
                    to join the Slumlordz.
                </p>
            </StyledP>
            <SplashScreen />
        </>
    );
};

export default HomePage;
