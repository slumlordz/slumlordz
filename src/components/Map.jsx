import {useState} from 'react';
import styled from 'styled-components';
import ObjectWrapper from './Object';
import Roadmap from './Roadmap';
import butcher from '../assets/images/butcher.png';

const Interactive = styled.div`
    display: block;
    width: 50%;
    margin: 2% auto;
    overflow: hidden;
    position: relative;
    border: 5px solid #1086e8;
    animation: border-flicker 2s linear infinite;

    img {
        position: relative;
        border-radius: 10px;
    }
    @keyframes border-flicker {
        0% {
            box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
        }
        2% {
            box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
        }
        4% {
            box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
        }

        8% {
            box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
        }
        70% {
            box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
        }
        100% {
            box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
        }
    }
`;

const Pin = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--neon-blue);
    position: absolute;
    left: 50%;
    top: 50%;
    animation: bounce 2s ease-in-out;

    @keyframes bounce {
        0% {
            opacity: 0;
            filter: alpha(opacity=0);
            transform: translateY(-2000px);
        }
        60% {
            opacity: 1;
            filter: none;
            transform: translateY(30px);
        }
        80% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }

    &:before {
        content: '';
        width: 14px;
        height: 14px;
        margin: 8px 0 0 8px;
        background: var(--dark-purple);
        position: absolute;
        border-radius: 50%;
    }
    &:after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid var(--neon-blue);
        bottom: -7px;
        left: 5px;
    }
    .tooltip-content {
        position: absolute;
        width: 256px;
        left: -28%;
        bottom: 100%;
        text-align: left;
        font-size: 0.765em;
        line-height: 1.4;
        box-shadow: -5px -5px 15px rgba(48, 54, 61, 0.2);
        background: #2a3035;
        opacity: 0;
        cursor: default;
        pointer-events: none;
        transition: opacity 0.2s, transform 0.2s;
    }

    &:hover .tooltip-content {
        pointer-events: auto;
        opacity: 1;
        transform-origin: 50% 100%;
        transform: scale(1);
    }

    .tooltip-content::after {
        content: '';
        top: 100%;
        left: 50%;
        border: solid transparent;
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: transparent;
        border-top-color: #2a3035;
        border-width: 10px;
        margin-left: -10px;
        z-index: 10;
    }
`;
const Pulse = styled.div``;

const Image = styled.img`
    max-width: 200px;
`;
const Map = (props) => {
    return (
        <Interactive>

            <Pin>
                <Pulse />{' '}
                <span className='tooltip-content'>
                    <Image src={butcher} />
                </span>
            </Pin>
        </Interactive>
    );
};

export default Map;
