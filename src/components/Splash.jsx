import styled from 'styled-components';
import slogan from '../assets/images/slogan.png';
import gsap from 'gsap';
import $ from 'jquery';
import temple from '../assets/images/temple.png';
import market from '../assets/images/market.png';
import shack from '../assets/images/Shack.png';
import time from '../assets/images/time.png';
import factory from '../assets/images/factory.png';
import coffee from '../assets/images/coffee.png';
import butcher from '../assets/images/butcher.png';
import gas from '../assets/images/Gas.png';
import car from '../assets/images/car.png';
import store from '../assets/images/store.png';
import {useEffect} from 'react';

const images = [
    temple,
    market,
    shack,
    time,
    factory,
    coffee,
    butcher,
    gas,
    car,
    store,
];
const Splash = styled.div`
    display: block;
    display: block;
    width: 100vw;
    height: calc(100vh - 150px);
    background-image: url(${slogan});
    background-color: #0c0d0a;
    background-blend-mode: multiply;

    .ring,
    .img,
    img {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        user-select: none;
        position: absolute;
    }

    .stage {
        overflow: hidden;
        height: 50%;
        width: 100%;
        display: flex;
        align-items: center;
        position: absolute;
    }

    .container {
        perspective: 2000px;
        width: 300px;
        height: 400px;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
`;

const SubHeading = styled.h2`
    font-family: 'Shrimp';
    color: var(--white);
    font-size: 3rem;
    animation: glitch 2s linear infinite;
    margin: 3rem;
    text-align: center;
`;

const Footer = styled.div`
    background-color: var(--black);
    width: 100%;
    height: 15vmin;
    border-radius: 61px 50px 0 0;
    margin-top: -5vmin;
    color: var(--beige);
    font-size: 1.2vmax;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Shrimp';
    margin-top: 20px;
`;

const Slide = styled.div`
    width: 2500px;
    height: 3vmin;
    padding-bottom: 5px;
    color: var(--green);
    font-family: 'Code';
    font-size: 20px;
    text-transform: uppercase;
    background: linear-gradient(135deg, var(--dark-green) 0%, var(--black) 68%);

    span {
        display: inline-block;
        margin-right: 50px;
        animation: title 6s infinite linear;
    }

    @keyframes title {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-233px);
        }
    }
`;

const SplashScreen = () => {
    useEffect(() => {
        let xPos = 0;

        gsap.timeline()
            .set('.ring', {rotationY: 180, cursor: 'grab'})
            .set('.img', {
                rotateY: (i) => i * -36,
                transformOrigin: '50% 50% 500px',
                z: -500,
                backgroundImage: (i) => `url(${images[i]})`,
                backgroundPosition: (i) => getBgPos(i),
                backfaceVisibility: 'hidden',
            })
            .from('.img', {
                duration: 1.5,
                y: 200,
                opacity: 0,
                stagger: 0.1,
                ease: 'expo',
            })
            .add(() => {
                $('.img').on('mouseenter', (e) => {
                    let current = e.currentTarget;
                    gsap.to('.img', {
                        opacity: (i, t) => (t == current ? 1 : 0.5),
                        ease: 'power3',
                    });
                });
                $('.img').on('mouseleave', (e) => {
                    gsap.to('.img', {opacity: 1, ease: 'power2.inOut'});
                });
            }, '-=0.5');

        $(window).on('mousedown touchstart', dragStart);
        $(window).on('mouseup touchend', dragEnd);

        function dragStart(e) {
            e.preventDefault();
            if (e.touches) e.clientX = e.touches[0].clientX;
            xPos = Math.round(e.clientX);
            gsap.set('.ring', {cursor: 'grabbing'});
            $(window).on('mousemove touchmove', drag);
        }

        function drag(e) {
            if (e.touches) e.clientX = e.touches[0].clientX;

            gsap.to('.ring', {
                rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 360),
                onUpdate: () => {
                    gsap.set('.img', {backgroundPosition: (i) => getBgPos(i)});
                },
            });

            xPos = Math.round(e.clientX);
        }

        function dragEnd(e) {
            $(window).off('mousemove touchmove', drag);
            gsap.set('.ring', {cursor: 'grab'});
        }

        function getBgPos(i) {
            return (
                100 -
                (gsap.utils.wrap(
                    0,
                    360,
                    gsap.getProperty('.ring', 'rotationY') - 180 - i * 36
                ) /
                    360) *
                    500 +
                'px 0px'
            );
        }
    }, []);
    return (
        <>
            <Splash id='splash'>
                <Slide>
                    <span>SLUMLORDZ</span>
                    <span>SLUMLORDZ</span>
                    <span>SLUMLORDZ</span>
                    <span>SLUMLORDZ</span>
                    <span>SLUMLORDZ</span>
                    <span>SLUMLORDZ</span>
                    <span>SLUMLORDZ</span>
                    <span>SLUMLORDZ</span>
                    <span>SLUMLORDZ</span>
                    <span>SLUMLORDZ</span>
                    <span>SLUMLORDZ</span>
                </Slide>

                <SubHeading>SHOWCASE</SubHeading>
                <div class='stage'>
                    <div class='container'>
                        <div class='ring'>
                            {images.map((img, i) => {
                                return (
                                    <div className='img'>
                                        {' '}
                                        <img src={img} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Splash>
            <Footer>© 2022, Slumlordz, We are all gonna slum it!</Footer>
        </>
    );
};

export default SplashScreen;
