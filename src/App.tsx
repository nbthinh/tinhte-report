import { useEffect } from 'react'
import './App.css'
// import axios, { type AxiosResponse } from "axios";
import { ToastContainer } from 'react-toastify';
import { report } from './utils/action';
import HandmadeReportCompoent from './components/handle-make-report/HandmadeReportComponent';
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  const oauthToken = 'efdc58ae5ef8c846c806a17cce782eb6bce7e797';


  useEffect(() => {
    // https://tinhte.vn/thread/gio-moi-ranh.4100718/
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
  }, []);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <HandmadeReportCompoent />
          </div>
        </div>
        
      </div>
      <Link to="">Home</Link>
      <br/>
      <Link to="demo">Dashboard</Link>
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default App
