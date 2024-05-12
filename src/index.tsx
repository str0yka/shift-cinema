import { createRoot } from 'react-dom/client';

import { App } from './App';

import './static/styles/global.css';
import './static/styles/reset.css';
import './static/styles/colors.css';

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);
