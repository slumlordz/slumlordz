import {useState, useEffect} from 'react';
import Home from './components/Home';
import Menu from './components/menu/Menu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Roadmap from './components/Roadmap';

// import {clusterApiUrl} from '@solana/web3.js';
// import {WalletAdapterNetwork} from '@solana/wallet-adapter-base';
// import * as adapters from '@solana/wallet-adapter-wallets';

// import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react';
// import {WalletModalProvider} from '@solana/wallet-adapter-react-ui';

// import {ThemeProvider, createTheme} from '@material-ui/core';

// const {
//     getPhantomWallet,
//     getSlopeWallet,
//     getSolflareWallet,
//     getSolletWallet,
//     getSolletExtensionWallet,
// } = adapters;

// const theme = createTheme({
//     palette: {
//         type: 'dark',
//     },
// });

// const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const App = () => {
    const useDeviceDetect = () => {
        const userAgent =
            typeof window.navigator === 'undefined' ? '' : navigator.userAgent;

        return Boolean(
            /android|blackberry|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/iu.test(
                userAgent
            )
        );
    };
    return (
        <>
            <Router>
                <Menu isMobile={useDeviceDetect()} />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Routes>
                    <Route path='/blueprint' element={<Roadmap />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
