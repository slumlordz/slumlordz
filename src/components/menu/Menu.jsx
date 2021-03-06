import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import twitter from '../../assets/images/twitter.png';
import discord from '../../assets/images/discord.png';
import logo from '../../assets/images/logo.png';

import MenuStyled, {
    MenuNav,
    MenuItem,
    MenuTrigger,
    StakeButton,
    StyledDiv,
} from './Menu.styles';

const items = [
    {
        content: (
            <Link to={'/'} className='button disabled'>
                demo
            </Link>
        ),
    },
    {
        content: (
            <Link to={'/'} className='button disabled'>
                team
            </Link>
        ),
    },
    {
        content: (
            <Link to={'/blueprint'} className='button'>
                blueprint
            </Link>
        ),
    },
    {
        content: (
            <a
                className='button'
                href='https://slum-lordz.gitbook.io/docs/'
                target={'_blank'}
            >
                Docs
            </a>
        ),
    },
    {
        content: (
            <a href='https://twitter.com/Slumlordz_NFT' target={'_blank'}>
                <img alt='' src={twitter} />
            </a>
        ),
    },
    {
        content: (
            <a href='https://discord.gg/rSSwXKFpUK' target={'_blank'}>
                <img alt='' src={discord} />
            </a>
        ),
    },
    {
        content: <StakeButton></StakeButton>,
    },
];

const Menu = (props) => {
    const {isMobile} = props;
    const [toggled, setToggled] = useState(false);
    const toggleClass = toggled ? 'toggled' : '';
    const {pathname} = useLocation();

    useEffect(() => {
        setToggled(false);
    }, [pathname]);

    return (
        <MenuNav isMobile={isMobile}>
            <MenuTrigger
                isMobile={isMobile}
                className={toggleClass}
                onClick={() => setToggled(!toggled)}
            >
                <span></span>
                <span></span>
                <span></span>
            </MenuTrigger>
            <MenuStyled isMobile={isMobile} className={toggleClass}>
                <StyledDiv>
                    <Link to={'/'}>
                        <img className='logo' src={logo} />
                    </Link>
                </StyledDiv>
                <StyledDiv>
                    {items.map((item, index) => {
                        const key = `${item}_${index}`;
                        return <MenuItem key={key}>{item.content}</MenuItem>;
                    })}
                </StyledDiv>
            </MenuStyled>
            <Link to={'/'}>
                <img className='logo-mobile' src={logo} />
            </Link>
        </MenuNav>
    );
};

export default Menu;
