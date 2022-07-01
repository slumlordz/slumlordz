import {useState} from 'react';
import styled from 'styled-components';
import block from '../assets/images/block.png';
import cork from '../assets/images/cork.jpeg';
import sketch1 from '../assets/images/sketch1.jpg';
import sketch2 from '../assets/images/sketch2.jpg';
import sketch3 from '../assets/images/sketch3.jpg';
import sketch4 from '../assets/images/sketch4.jpg';
import sketch5 from '../assets/images/sketch5.jpg';
import sketch6 from '../assets/images/sketch6.jpg';

const Section = styled.div`
    padding: 4rem;
    height: 100vh;
    background: var(--beige);
`;

const Timeline = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    padding: 1rem;
    align-items: center;
    margin: auto;
    background-image: url(${cork});
    background-color: var(--dark-brown);
    background-blend-mode: multiply;
`;

const Fold = styled.div`
    background: var(--beige);
    perspective: 1500px;
    position: relative;
    width: 100%;
    height: 0;
    padding: ${(props) => `${props.ratio}% 0 0`};
    position: relative;
    box-sizing: border-box;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
    filter: saturate(70%) contrast(85%);
    .bottom:after,
    .front:after {
        content: '';
        width: 100%;
        left: 0;
        position: absolute;
    }

    .front:after,
    .bottom:after {
        height: 150%;
        top: 0;
        z-index: 2;
        background-repeat: no-repeat;
        background-image: linear-gradient(
                to right,
                rgba(255, 255, 255, 0.1) 0.5%,
                rgba(0, 0, 0, 0.15) 1.2%,
                transparent 1.2%
            ),
            linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.1) 0.5%,
                rgba(0, 0, 0, 0.15) 1.2%,
                transparent 1.2%
            ),
            linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.1) 0.5%,
                rgba(0, 0, 0, 0.15) 1.2%,
                transparent 1.2%
            ),
            linear-gradient(265deg, rgba(0, 0, 0, 0.2), transparent 10%),
            linear-gradient(5deg, rgba(0, 0, 0, 0.2), transparent 15%),
            linear-gradient(-5deg, rgba(0, 0, 0, 0.1), transparent 10%),
            linear-gradient(5deg, rgba(0, 0, 0, 0.1), transparent 10%),
            linear-gradient(-265deg, rgba(0, 0, 0, 0.2), transparent 10%),
            linear-gradient(-5deg, rgba(0, 0, 0, 0.2), transparent 15%),
            linear-gradient(266deg, rgba(0, 0, 0, 0.2), transparent 10%);
        background-size: 50% 100%, 100% 33.3333%, 100% 33.3333%, 50% 33.3333%,
            50% 33.3333%, 50% 33.3333%, 50% 33.3333%, 50% 33.3333%, 50% 33.3333%,
            50% 33.3333%;
        background-position: right top, left center, left bottom, left top,
            left top, right top, left center, right center, right center,
            left bottom;
    }

    h2 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        margin: 0;
        color: var(--dark-red);
        font-family: Shrimp;
        line-height: 4vmax;
    }
    .top {
        height: 50%;
        transition: all 0.5s ease-out;
        transform: rotateX(0deg);
        transform-origin: 0 100%;
        transform-style: preserve-3d;
        position: absolute;
        top: 0px;
        width: 100%;
        z-index: 10;
        .face {
            backface-visibility: hidden;
            position: absolute;
        }
    }
    &:hover .top {
        transform: rotateX(-180deg);
    }
    .front {
        background: ${(props) => `url(${props.url})`};
        background-size: cover;
        height: 100%;
        width: 100%;
    }
    .back {
        background: var(--beige);
        height: 100%;
        transform: rotateX(180deg);
        width: 100%;
    }
    .bottom {
        background: ${(props) => `url(${props.url})`} bottom;
        background-size: cover;
        height: 50%;
        position: absolute;
        top: 50%;
        width: 100%;
        z-index: 0;
        overflow: hidden;
    }

    p {
        padding: 1rem;
        font-size: 1vmax;
        font-family: 'Politetype';
        height: 100%;
        margin: 0;
        color: var(--black);
    }
`;
const StyledHeading = styled.h1`
    font-family: 'Code', sans-serif;
    font-size: 3rem;
    color: var(--black);
`;
const Roadmap = () => {
    const sketches = [
        {
            img: sketch1,
            ratio: '70.13',
            title: 'Community & Mint',
            text: 'Build a strong and engaged community & mint 8,888 unique Slumlordz’ block NFTs',
        },
        {
            img: sketch2,
            ratio: '59.34',
            title: 'Staking',
            text: 'Immerse into our P2E Game and enjoy renovating your block, purchase new buildings and increase your rent',
        },
        {
            img: sketch3,
            ratio: '41.17',
            title: 'Raffles',
            text: 'The Queen has something special for you, apart from rare buildings you can raffle for blue chip NFTs and WL exclusively with $SLUM',
        },
        {
            img: sketch4,
            ratio: '56.25',
            title: 'Sustainability',
            text: 'We are motivated to create a long-term sustainable P2E ecosystem, SLUM/SOL pair will be added to Raydium and royalties + yield farming will sustain the price',
        },
        {
            img: sketch5,
            ratio: '75',
            title: 'PFP and future collectibles',
            text: 'In order to further ensure sustainability, exclusive further collections including Slumlord PFPs will be minted using $SLUM. Special utility TBA',
        },
        {
            img: sketch6,
            ratio: '75',
            title: 'District battles',
            text: 'In Phase two we will introduce the PVP portion of the game where you will battle other Slumlordz for that precious $SLUM',
        },
    ];
    return (
        <Section>
            <StyledHeading>SLUMLORDZ BLUEPRINT</StyledHeading>
            <p> We are building a whole new world</p>
            <Timeline>
                {sketches.map((s) => (
                    <Fold url={s.img} ratio={s.ratio}>
                        <h2>{s.title}</h2>
                        <div class='top'>
                            <div class='front face'></div>
                            <div class='back face'>
                                <p>{s.text}</p>
                            </div>
                        </div>
                        <div class='bottom'></div>
                    </Fold>
                ))}

                {/* <div>
                    <div
                        onClick={() => handleClick(1)}
                        className={`step ${1 === index ? 'active' : null}`}
                    >
                        <h2> Community </h2>

                        <div class='ringring'></div>
                        <div class='circle'></div>
                        <h1>01</h1>
                        <p>Build a strong and engaged community</p>
                    </div>
                    <div
                        onClick={() => handleClick(2)}
                        className={`step ${2 === index ? 'active' : null}`}
                    >
                        <h2> Mint </h2>

                        <div class='ringring'></div>
                        <div class='circle'></div>
                        <h1>02</h1>
                        <p>Mint 8,888 unique Slumlordz’ block NFTs</p>
                    </div>
                    <div
                        onClick={() => handleClick(3)}
                        className={`step ${3 === index ? 'active' : null}`}
                    >
                        <h2> Staking </h2>
                        <div class='ringring'></div>
                        <div class='circle'></div>
                        <h1>03</h1>
                        <p>
                            Launch P2E Game
                            <br />
                            • Block NFT Staking
                            <br />
                            • Building Decay
                            <br />
                            • Building Repair
                            <br />• Black Market Purchases
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick(4)}
                        className={`step ${4 === index ? 'active' : null}`}
                    >
                        <h2> Raffles </h2>
                        <div class='ringring'></div>
                        <div class='circle'></div>
                        <h1>04</h1>
                        <p>
                            $SLUM Raffle <br />• Blue Chip NFTs <br />•
                            Whitelist Spots <br />• Slumlordz’ Assets
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick(5)}
                        className={`step ${5 === index ? 'active' : null}`}
                    >
                        <h2> Sustainability </h2>
                        <div class='ringring'></div>
                        <div class='circle'></div>
                        <h1>05</h1>
                        <p>SLUM/SOL pair on Raydium</p>
                    </div>
                    <div
                        onClick={() => handleClick(6)}
                        className={`step ${6 === index ? 'active' : null}`}
                    >
                        <h2> PFP </h2>

                        <div class='ringring'></div>
                        <div class='circle'></div>
                        <h1>06</h1>
                        <p>
                            Launch Slumlordz’ PFP Collection
                            <br /> Exclusive SLUM mint
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick(7)}
                        className={`step ${7 === index ? 'active' : null}`}
                    >
                        <h2>PFP Utility</h2>

                        <div class='ringring'></div>
                        <div class='circle'></div>
                        <h1>07</h1>
                        <p>Integrate exclusive Slumlord NFT utility</p>
                    </div>
                    <div
                        onClick={() => handleClick(8)}
                        className={`step ${8 === index ? 'active' : null}`}
                    >
                        <h2> DAO </h2>

                        <div class='ringring'></div>
                        <div class='circle'></div>
                        <h1>08</h1>
                        <p>
                            • Exclusive Whitelists <br />• NFT Research
                            <br /> • Networking Opportunities
                        </p>
                    </div>
                </div> */}
            </Timeline>
        </Section>
    );
};
export default Roadmap;
