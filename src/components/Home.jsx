import {useState} from 'react';
import styled from 'styled-components';
import ObjectWrapper from './Object';
import Roadmap from './Roadmap';
import video from '../assets/Draft.mp4';
const MainHome = styled.div`
    background: var(--dark-green);
    padding: 1rem;
`;

const StyledHeading = styled.h1`
    font-family: Neueplak;
    font-size: 2rem;
    color: var(--main-red);
    text-align: center;
`;
const StyledP = styled.p`
    font-size: 1rem;
    color: var(--dark-white);
    text-align: center;
    font-family: 'Noto Sans', sans-serif;
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
            <Video autoPlay loop src={video}></Video>

            {/* <ObjectWrapper /> */}
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
        </>
    );
};

export default HomePage;
