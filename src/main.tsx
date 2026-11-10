import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { report } from './utils/action.ts';
import 'bootstrap/dist/css/bootstrap.min.css'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import HomeComponent from './components/home/HomeComponent.tsx';
import DemoComponent from './components/DemoComponent/DemoComponent.tsx';

const oauthToken = 'ac09247cf5bb1902b6f947ec9b2b9667d7f30586';
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

// const router = createBrowserRouter([
//   {
//     path: "/tinhte-report",
//     Component: App,
//     children: [
//       { index: true, Component: HomeComponent },
//       { path: "demo", Component: DemoComponent },
//     ],
//   },
// ]);


const router = createBrowserRouter(
  [
      {
          path: "/",
          Component: App,
          children: [
              { index: true, Component: HomeComponent },
              { path: "demo", Component: DemoComponent },
          ],
      },
  ],
  {
      basename: "/tinhte-report",
  }
);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
