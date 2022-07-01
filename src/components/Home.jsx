import styled from 'styled-components';
import {useEffect} from 'react';

import queen from '../assets/images/QUEEN_hm.png';
import nft from '../assets/images/nft.png';
import show from '../assets/images/show.png';

import block from '../assets/images/block.png';
import b2 from '../assets/images/b2.png';
import $ from 'jquery';
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

    .container {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    input[type='radio'] {
        display: none;
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
        width: 100%;
        height: 100%;
        margin-bottom: 20px;
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
        width: 90%;
        height: 100%;
        border: 2px solid var(--black);
        position: absolute;
        padding: 3rem;
        transform: rotate(10deg) skew(2deg, -2deg);
        top: -3rem;
        left: -2rem;
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
                    <div class='container'>
                        <input type='radio' name='slider' id='item-1' checked />
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
                                <img src={show} alt='song' />
                            </label>
                        </div>
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
