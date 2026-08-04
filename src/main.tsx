import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { report } from './utils/action.ts';
import 'bootstrap/dist/css/bootstrap.min.css'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import HomeComponent from './components/home/HomeComponent.tsx';

const oauthToken = '846caeef659831a6e7d475a1eb74028a4305fe17';
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

const router = createBrowserRouter([
  {
    path: "/tinhte-report",
    Component: App,
    children: [
      { index: true, Component: HomeComponent },
      // { path: "settings", Component: Settings },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
