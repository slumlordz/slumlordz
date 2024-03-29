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
import {Footer} from './Splash';
const Section = styled.div``;

const Timeline = styled.div`
    height: auto;
    min-height: 80vh;
    border: 10px solid var(--beige);
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    padding: 1rem;
    align-items: center;
    margin: auto;
    background-image: url(${cork});
    background-color: var(--dark-brown);
    background-blend-mode: multiply;
    @media screen and (max-width: 801px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
`;

const Fold = styled.div`
    background: var(--beige);
    perspective: 1500px;
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
        padding: 0 1rem;
        margin: 0;
        color: var(--dark-red);
        font-family: Shrimp;
        display: flex;
        align-items: center;
        height: 50%;
        justify-content: center;
        text-align: center;
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
        .pin {
            background-image: radial-gradient(var(--dark-red) 50%, black 100%);
            width: 15px;
            height: 15px;
            border-radius: 50%;
            margin: 0.3rem auto;
            z-index: 20;
            position: absolute;
            left: 0;
            right: 0;
        }
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
        padding: 0 1rem;
        font-size: 2.5vmin;
        font-family: 'Politetype';
        margin: 0;
        color: var(--black);
        position: absolute;
        text-align: center;
        display: flex;
        align-items: flex-start;
        height: 80%;
        @media screen and (max-width: 601px) {
            font-size: 2vmax;
        }
    }
`;

const Roadmap = () => {
    const sketches = [
        {
            img: sketch3,
            ratio: '41.17',
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
            img: sketch1,
            ratio: '70.13',
            title: 'Raffles',
            text: 'The Queen has something special for you, apart from rare buildings you can raffle for blue chip NFTs and WL exclusively with $SLUM',
        },
        {
            img: sketch5,
            ratio: '75',
            title: 'Sustainability',
            text: 'We are motivated to create a long-term sustainable P2E ecosystem, SLUM/SOL pair will be added to Raydium and royalties + yield farming will sustain the price',
        },
        {
            img: sketch4,
            ratio: '56.25',
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
        <>
            <Section>
                <Timeline>
                    {sketches.map((s) => (
                        <Fold url={s.img} ratio={s.ratio}>
                            <h2>{s.title}</h2>
                            <div class='top'>
                                <div class='front face'>
                                    <div class='pin'></div>
                                </div>
                                <div class='back face'>
                                    <p>{s.text}</p>
                                </div>
                            </div>
                            <div class='bottom'></div>
                        </Fold>
                    ))}
                </Timeline>
            </Section>
            <Footer>© 2022, Slumlordz, We are all gonna slum it!</Footer>
        </>
    );
};
export default Roadmap;
