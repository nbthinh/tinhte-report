import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { report } from './utils/action.ts';

const oauthToken = '7bf2a79d59dbf63fd6904b71ed07434745c8d2e9';
let i = 0;
setInterval(async () => {
  let numOfRetry = 0;
  while (numOfRetry < 3) {
    const isReportSuccess = await report(i, oauthToken);
    if (isReportSuccess) {
      numOfRetry = 0;
      break;
    }
    else {
      numOfRetry += 1;
    }
  }
  i = i + 1;
}, 5000);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
