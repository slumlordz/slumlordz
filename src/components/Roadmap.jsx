import {useState} from 'react';
import styled from 'styled-components';
import mart from '../assets/images/24-7.png';
import car from '../assets/images/car.png';
import gas from '../assets/images/Gas.png';
import shack from '../assets/images/Shack.png';
import store from '../assets/images/store.png';
import villa from '../assets/images/Villa.png';
import wc from '../assets/images/Wc.png';

const Section = styled.div`
    background: var(--main-black);
    padding: 1rem;
`;
const Timeline = styled.section`
    display: flex;
    background-color: #031625;

    &:hover {
        .tl-item {
            width: 23.3333%;
        }
    }
    .tl-item {
        transform: translate3d(0, 0, 0);
        position: relative;
        width: 25%;
        height: 50vh;
        color: #fff;
        overflow: hidden;
        transition: width 0.5s ease;

        &:before,
        &:after {
            transform: translate3d(0, 0, 0);
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }

        &:after {
            background: transparentize(#031625, 0.15);
            opacity: 1;
            transition: opacity 0.5s ease;
        }

        &:before {
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 1) 85%
            );
            z-index: 1;
            opacity: 0;
            transform: translate3d(0, 0, 0) translateY(50%);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }

        &:hover {
            width: 30% !important;

            &:after {
                opacity: 0;
            }

            &:before {
                opacity: 1;
                transform: translate3d(0, 0, 0) translateY(0);
                transition: opacity 1s ease, transform 1s ease 0.25s;
            }

            .tl-content {
                opacity: 1;
                transform: translateY(0);
                transition: all 0.75s ease 0.5s;
            }

            .tl-bg {
                filter: grayscale(0);
            }
        }
    }

    .tl-content {
        transform: translate3d(0, 0, 0) translateY(25px);
        position: relative;
        z-index: 1;
        text-align: center;
        margin: 0 1.618em;
        top: 30%;
        opacity: 0;

        h1 {
            font-family: Neueplak;
            color: var(--light-green);
            font-size: 1.44rem;
            font-weight: normal;
        }
    }

    .tl-year {
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 1;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;

        p {
            font-family: 'Noto Sans', sans-serif;
            font-size: 1.728rem;
            line-height: 0;
            color: var(--dark-white);
        }
    }

    .tl-bg {
        transform: translate3d(0, 0, 0);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        transition: filter 0.5s ease;
        filter: grayscale(70%);
    }
`;
const StyledHeading = styled.h1`
    font-family: Neueplak;
    font-size: 2rem;
    color: var(--main-red);
    text-align: center;
`;
const Roadmap = () => {
    return (
        <Section>
            <StyledHeading>ROADMAP</StyledHeading>

            <Timeline>
                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${car})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>1</p>
                    </div>

                    <div className='tl-content'>
                        <h1>Community</h1>
                        <p>
                            Lay the foundation of a strong and engaged community
                        </p>
                    </div>
                </div>

                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${mart})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>2</p>
                    </div>

                    <div className='tl-content'>
                        <h1 className='f3 text--accent ttu'>Mint</h1>
                        <p>Mint 8,888 unique Slumlordz' block NFTs</p>
                    </div>
                </div>

                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${villa})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>3</p>
                    </div>

                    <div className='tl-content'>
                        <h1 className='f3 text--accent ttu'>Launch p2e game</h1>
                        <p>
                            Launch the Slumlordz' play-to-earn game with the
                            following features: Block NFT staking, which yields
                            $SLUM; Block customization and upgradability;
                            Renovate buildings; Purchase new buildings at the
                            Slum Queen's Black Market; District Battles
                        </p>
                    </div>
                </div>

                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${gas})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>4</p>
                    </div>

                    <div className='tl-content'>
                        <h1 className='f3 text--accent ttu'>
                            Slum Queen's Raffle
                        </h1>
                        <p>
                            Our holders will have the opportunity to purchase
                            raffle tickets with $SLUM in order to win prizes,
                            such as Blue Chip NFTs, Slumlordz' Merchandise and
                            Physical Art
                        </p>
                    </div>
                </div>
                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${wc})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>5</p>
                    </div>

                    <div className='tl-content'>
                        <h1 className='f3 text--accent ttu'>
                            SLUM/SOL pair on Raydium
                        </h1>
                        <p>
                            For purchasing raffle tickets and new pfp collection
                        </p>
                    </div>
                </div>
                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${store})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>6</p>
                    </div>

                    <div className='tl-content'>
                        <h1 className='f3 text--accent ttu'>
                            Slumlordz PFP collection
                        </h1>
                        <p>
                            Slumlordz PFP NFT collection - Slumlords - will be
                            released, which you will be able to mint using $SLUM
                        </p>
                    </div>
                </div>
                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${shack})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>7</p>
                    </div>

                    <div className='tl-content'>
                        <h1 className='f3 text--accent ttu'>
                            Staking your PFP
                        </h1>
                        <p>
                            Integrate staking capacity for Slumlord NFTs, which
                            will generate extra rewards, capabilities and
                            utility access.
                        </p>
                    </div>
                </div>
                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${gas})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>8</p>
                    </div>

                    <div className='tl-content'>
                        <h1 className='f3 text--accent ttu'>DAO</h1>
                        <p>
                            Collaborative Pre-Sale(Whitelist) Opportunities; NFT
                            Research provision; High Value Networking
                            Opportunities
                        </p>
                    </div>
                </div>
            </Timeline>
        </Section>
    );
};
export default Roadmap;
