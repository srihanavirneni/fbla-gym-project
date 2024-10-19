import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import { HashRouter } from 'react-router-dom';

import "@radix-ui/themes/styles.css";
import './index.css';

createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <App />
    </HashRouter>
);
