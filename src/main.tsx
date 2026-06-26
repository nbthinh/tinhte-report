import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { report } from './utils/action.ts';
import 'bootstrap/dist/css/bootstrap.min.css'

const oauthToken = '327599a676a01fbc757b2ef2c36f662409fe1b46';
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
