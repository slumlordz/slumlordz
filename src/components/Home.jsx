import {useState} from 'react';
import styled from 'styled-components';
import ObjectWrapper from './Object';
import Roadmap from './Roadmap';
import Carousel from './Carousel';
import video from '../assets/QUEEN.mp4';
const MainHome = styled.div`
    padding: 5rem 1rem;
`;

const StyledHeading = styled.h1`
    font-family: Neueplak;
    font-size: 3rem;

    text-shadow: 0 0 6px var(--dark-red), 0 0 8px var(--main-red),
        0 0 0px var(--dark-red), 0 0 3px var(--main-red),
        0 0 7px var(--dark-red), 0 0 4px var(--main-red);
    text-align: center;
`;
const StyledP = styled.p`
    clip-path: polygon(
        0px 25px,
        26px 0px,
        calc(60% - 25px) 0px,
        60% 25px,
        100% 25px,
        100% calc(100% - 10px),
        calc(100% - 15px) calc(100% - 10px),
        calc(80% - 10px) calc(100% - 10px),
        calc(80% - 15px) 100%,
        80px calc(100% - 0px),
        65px calc(100% - 15px),
        0% calc(100% - 15px)
    );
    box-shadow: inset 0 -1px 1px 1px var(--main-green),
        inset 0 3px 16px var(--main-green), inset 0 -2px 25px var(--main-green);

    background: var(--main-grey);
    font-size: 1rem;
    color: var(--dark-white);
    text-align: justify;
    font-family: 'JetBrains Mono', monospace;
    font-weight: bold;
    padding: 3rem;
    max-width: 850px;
    margin: auto;
    &:before {
        content: 'P-14';
        display: block;
        position: absolute;
        bottom: -12px;
        right: 25px;
        padding: 2px 2px 0px 2px;
        font-size: 0.6rem;
        line-height: 0.6rem;
        color: #000;
        background-color: var(--yellow-color);
        border-left: 2px solid var(--border-color);
    }
`;
const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: contain;
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
            <Video autoPlay loop muted src={video}></Video>

            <ObjectWrapper />
            <MainHome>
                <StyledHeading>LORE</StyledHeading>
                <StyledP>
                    Glamour, excitement, and opportunities – big cities have
                    everything you need to make your dreams come to life. But
                    once you step into the crowd, you’ll find out that luxury
                    requires a little more than hard work. You’ll have to play
                    dirty. You’ll have to light your morals on fire. You’ll have
                    to join the Slumlordz.
                    <br /> <br />
                    You start off as a basic slumlord, without much to offer –
                    just infested properties, full of pests and mold. The old
                    furniture and faulty appliances won’t get you far either, so
                    why not set your game straight and start renovating? A good
                    upgrade goes a long way, and who knows, you might even make
                    it onto the Slum Queen’s whitelist.
                    <br /> <br />
                    Who is the Slum Queen? She’s a survivor, a fighter, a
                    winner. Born to poverty, in a system of abuse, she clawed
                    and scratched her way to the top - peasants and billionaires
                    both left in her wake. The list of her shady dealings
                    stretches long, but not so long as her reach. Founder of the
                    Black Market. She sits atop the Slumlordz’ food chain, and
                    you’ll need to stay on the boss lady’s good side if you want
                    to have any hope of climbing even half as high yourself.
                </StyledP>
            </MainHome>

            <Roadmap />
            <Carousel />
        </>
    );
};

export default HomePage;
