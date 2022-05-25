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
    padding: 8rem 1rem 1rem;

    h3 {
        color: var(--dark-white);
        margin: 5rem;
        text-align: center;
    }
`;

const Carousel = styled.section`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    margin: auto;

    &::-webkit-scrollbar {
        -webkit-appearance: none;
    }

    &::-webkit-scrollbar:horizontal {
        height: 11px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid var(--main-green);
        background-color: var(--main-black);
    }

    .tl-item {
        position: relative;
        min-width: 300px;
        height: 40vh;
        color: #fff;
        margin: 2rem;

        &:hover {
            transition: all 300ms linear;
            transform: scale(1.1);

            &:after {
                opacity: 0;
            }
            .tl-bg {
                filter: grayscale(0);
            }
        }
    }

    .tl-year {
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 1;
        border-top: 1px solid var(--light-green);
        border-bottom: 1px solid var(--light-green);

        p {
            font-family: 'JetBrains Mono', monospace;
            font-size: 1.2rem;
            line-height: 0;
            color: var(--dark-white);
        }
    }

    .tl-bg {
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
    font-size: 3rem;
    text-shadow: -1px 0 var(--main-red), 0 1px var(--main-red),
        1px 0 var(--main-red), 0 -1px var(--main-red);
    text-align: center;
`;

const Roadmap = () => {
    return (
        <Section>
            <Carousel>
                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${car})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>Chop Shop</p>
                    </div>
                </div>

                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${mart})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>Mini Mart</p>
                    </div>
                </div>

                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${villa})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>Villa</p>
                    </div>
                </div>

                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${gas})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>Gas Station</p>
                    </div>
                </div>
                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${wc})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'> Fast Food</p>
                    </div>
                </div>

                <div className='tl-item'>
                    <div
                        className='tl-bg'
                        style={{backgroundImage: `url(${shack})`}}
                    ></div>

                    <div className='tl-year'>
                        <p className='f2 heading--sanSerif'>Shack</p>
                    </div>
                </div>
            </Carousel>

            <h3> © 2022 Slumlordz - All rights reserved</h3>
        </Section>
    );
};
export default Roadmap;
