import styled from 'styled-components';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';

import queen from '../assets/images/QUEEN_hm.png';
import nft from '../assets/images/nft.png';
import show from '../assets/images/show.png';
import gas from '../assets/images/gas.gif';
import twitter from '../assets/images/twitter.png';

import block from '../assets/images/block.png';
import b2 from '../assets/images/b2.png';
import $ from 'jquery';
import SplashScreen from './Splash';
const MainHome = styled.div`
    box-shadow: inset 0 -6px 49px 2px var(--blue), inset 0 1px 17px var(--blue),
        inset 0 1px 74px var(--blue);
    background-color: var(--beige);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12vmax;
    padding: 4vmin 15vmin 4vmin 6vmin;
    height: calc(100vh - 100px - 8vmin);
    position: relative;
    @media screen and (max-width: 801px) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;
        padding: 4vmin;
    }
    .arrow,
    .arrow:before {
        position: absolute;
        left: 50%;
    }
    .arrow {
        width: 40px;
        height: 40px;
        bottom: 8%;
        left: 5%;
        -webkit-transform: rotate(45deg);
        border-left: none;
        border-top: none;
        border-right: 3px var(--dark-green) solid;
        border-bottom: 3px #fff solid;
    }

    .arrow:before {
        content: '';
        width: 20px;
        height: 20px;
        top: 50%;
        margin: -10px 0 0 -10px;
        border-left: none;
        border-top: none;
        border-right: 2px var(--dark-green) solid;
        border-bottom: 2px #fff solid;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: arrow;
    }
    @keyframes arrow {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translate(-10px, -10px);
        }
    }
`;

const Left = styled.div`
    text-align: right;
    line-height: 1;
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
        font-size: 12vmax;
        text-transform: uppercase;
        font-weight: 800;
        text-shadow: -5px -8px 0px black;
        -webkit-font-smoothing: antialiased;
        font-family: 'Code Italic', sans-serif;
        margin: 0;
        @media screen and (max-width: 801px) {
            text-align: center;
        }
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
            top: -3rem;
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
            top: -3rem;
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
            top: -3rem;
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
            top: -3rem;
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
        @media screen and (max-width: 801px) {
            display: none;
        }
    }
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform-style: preserve-3d;
    align-items: center;
    position: relative;
    @media screen and (max-width: 801px) {
        height: 60%;
    }
    input[type='radio'] {
        display: none;
    }
    .arrow-left {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 50%;
        z-index: 20;
        left: 0;
        -webkit-transform: rotate(135deg);
        border-left: none;
        border-top: none;
        border-right: 4px var(--dark-red) solid;
        border-bottom: 4px #fff solid;
    }

    .arrow-right {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 50%;
        z-index: 20;
        right: 0;
        -webkit-transform: rotate(-45deg);
        border-left: none;
        border-top: none;
        border-right: 4px var(--dark-red) solid;
        border-bottom: 4px #fff solid;
    }
    .card {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        transition: transform 0.4s ease;
        cursor: pointer;
    }
    .cards {
        position: relative;
        width: 80%;
        height: 80%;
        display: flex;
        align-items: center;
    }

    img {
        width: 100%;
        height: auto;
    }

    #item-1:checked ~ .cards #song-3,
    #item-2:checked ~ .cards #song-1,
    #item-3:checked ~ .cards #song-2 {
        transform: translatex(-40%) scale(0.8);
        opacity: 0.4;
        z-index: 0;
    }

    #item-1:checked ~ .cards #song-2,
    #item-2:checked ~ .cards #song-3,
    #item-3:checked ~ .cards #song-1 {
        transform: translatex(40%) scale(0.8);
        opacity: 0.4;
        z-index: 0;
    }

    #item-1:checked ~ .cards #song-1,
    #item-2:checked ~ .cards #song-2,
    #item-3:checked ~ .cards #song-3 {
        transform: translatex(0) scale(1);
        opacity: 1;
        z-index: 1;

        img {
            box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
        }
    }

    &:before {
        content: '';
        width: 100%;
        height: 100%;
        border: 2px solid var(--black);
        position: absolute;
        padding: 1rem;
        transform: rotate(10deg) skew(2deg, -2deg);
        top: 0;
        left: -2rem;
        @media screen and (max-width: 801px) {
            display: none;
        }
    }
`;

const StyledP = styled.div`
    background-color: #0c0d0a;
    background-image: url(${b2});
    background-size: auto;
    background-position: center;
    background-blend-mode: soft-light;
    padding: 3rem 2rem;

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

const CallToAction = styled.div`
    position: fixed;
    bottom: 20%;
    z-index: 10;
    left: 0%;
    background-color: #47773a9e;
    padding: 0.5rem;
    color: var(--white);
    font-family: shrimp;
    display: flex;
    align-items: center;

    img {
        width: 30px;
        height: auto;
        border: 1px solid var(--beige);
        background: var(--beige);
        border-radius: 4px;
        padding: 0.2rem;
        margin-left: 8px;
    }
`;

const CallToAction2 = styled.div`
    position: fixed;
    bottom: 13%;
    z-index: 10;
    left: 0%;
    background-color: #420c01ad;
    padding: 0.5rem;
    color: var(--white);
    font-family: shrimp;
    display: flex;
    align-items: center;

    a {
        width: auto;
        height: 30px;
        background: var(--dark-red);
        border-radius: 4px;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--dark-green);
        padding: 0.2rem;
        line-height: 2rem;
        margin-left: 8px;
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
                <div class='arrow'></div>
                <CallToAction>
                    {' '}
                    You're early →
                    <a
                        href='https://twitter.com/Slumlordz_NFT'
                        target={'_blank'}
                    >
                        <img alt='' src={twitter} />
                    </a>
                </CallToAction>
                <CallToAction2>
                    {' '}
                    Read our →
                    <Link to={'/blueprint'} className='button'>
                        blueprint
                    </Link>
                </CallToAction2>
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
                    <div class='arrow-left'></div>

                    <input
                        type='radio'
                        name='slider'
                        id='item-1'
                        defaultChecked
                    />
                    <input type='radio' name='slider' id='item-2' />
                    <input type='radio' name='slider' id='item-3' />
                    <div class='cards'>
                        <label class='card' for='item-1' id='song-1'>
                            <img src={nft} alt='song' />
                        </label>
                        <label class='card' for='item-2' id='song-2'>
                            <img src={queen} alt='song' />
                        </label>
                        <label class='card' for='item-3' id='song-3'>
                            <img src={gas} alt='song' />
                        </label>
                    </div>
                    <div class='arrow-right'></div>
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
