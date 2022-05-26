import {useState} from 'react';
import styled from 'styled-components';

const Section = styled.div`
    background: var(--main-black);
    padding: 1rem;
`;

const Timeline = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: var(--dark-white);
    margin-top: -3rem;

    > div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        height: 400px;
        max-width: 1000px;
        position: relative;
        z-index: 0;
    }

    .step {
        width: 25px;
        height: 25px;
        border 1px solid var(--dark-red);
        background-color: var(--dark-red);       
        position: relative;
        border-radius: 50%;
    }
    .step:hover {
        cursor: pointer;
    }
    .step::before,
    .step::after {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        top: 50%;
        background-color: var(--dark-red);
        width: 8vw;
        height: 2px;
    }

    h1, p {
        visibility:hidden;
        opacity:0;
        transition:visibility 0.3s linear,opacity 0.3s linear;
        width: 200px;
        font-weight: bold;
    }

    .step.active {
        h1, p, .circle, .ringring {
            visibility: visible;
            opacity: 1;
        }
    }

    h2 {
        top: -65px;
        left: 16px;
        width: 70px;
        transform: translateX(-5px) rotateZ(-45deg);
        font-size: 1rem;
        color: var(--dark-white);
        position: absolute;
        font-family: 'JetBrains Mono', monospace;
    }

    h1 {
        color: var(--main-green);
        font-family: Neueplak;
        font-weight: bold;
        padding-top: 2rem;
    }

    .circle {
        visibility: hidden;
        width: 23px;
        height: 23px;
        background-color: var(--dark-green);
        border-radius: 50%;
        position: absolute;
        top: 1px;
        left: 1px;
    }
    
    .ringring {
        visibility: hidden;
        border: 3px solid var(--main-green);
        -webkit-border-radius: 30px;
        height: 25px;
        width: 25px;
        position: absolute;
        -webkit-animation: pulsate 2s ease-out;
        -webkit-animation-iteration-count: infinite; 
        opacity: 0.0;
        top: -3px;
        left: -3px;
    }

    @keyframes pulsate {
        0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
        50% {opacity: 1.0;}
        100% {-webkit-transform: scale(1.5, 1.5); opacity: 0.0;}
    }
   
    @media (min-width: 850px) {
        .step::before {
            left: -10%;
        }

        .step::after {
            right: -10%;
        }
    }

    @media (max-width: 850px) {
        justify-content: initial;
        .circle, .ringring {
            display: none;
        }
        > div {
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            height: auto;
            margin-top: 10vh;
        }

        .step {
            width: 60px;
            height: 60px;
            margin: 0 10px 50px;
            background-color: var(--dark-red);
            position: unset;
        }

        h2 {
            display: none;
        }
        h1 {
            margin-top: -1rem;
            margin-left: 1rem;
            width: 100%;
        }
        p {
            margin-top: 2rem;
            position: absolute;
            z-index: 5;
            background: var(--main-black);
            font-family: 'JetBrains Mono', monospace;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            top: 100%;
            right: 0;
            bottom: 0;
            width: 80%;
        }
        .step::before,
        .step::after {
            content: none;
        }
    }
`;
const StyledHeading = styled.h1`
    font-family: 'Neueplak', sans-serif;
    font-size: 3rem;
    text-shadow: 0 0 6px var(--dark-red), 0 0 8px var(--main-red),
        0 0 0px var(--dark-red), 0 0 3px var(--main-red),
        0 0 7px var(--dark-red), 0 0 4px var(--main-red);
    text-align: center;
`;
const Roadmap = () => {
    const [index, setIndex] = useState(1);

    const handleClick = (i) => {
        setIndex(i);
    };

    return (
        <Section>
            <StyledHeading>ROADMAP</StyledHeading>

            <Timeline>
                <div>
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
                </div>
            </Timeline>
        </Section>
    );
};
export default Roadmap;
