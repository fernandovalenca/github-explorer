import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { GlobalStyle } from './styles/Global';

const App: React.FunctionComponent = () => (
    < >
    <GlobalStyle />
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    </>
);

export default App;
