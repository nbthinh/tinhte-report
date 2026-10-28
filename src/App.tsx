import { useEffect } from 'react'
import './App.css'
// import axios, { type AxiosResponse } from "axios";
import { ToastContainer } from 'react-toastify';
import { report } from './utils/action';
import HandmadeReportCompoent from './components/handle-make-report/HandmadeReportComponent';
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  const oauthToken = 'f4e7ca35645ae3b22cf6c7a2256e33c640cbdcad';


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
        {/* <div className="row" style={{textAlign: 'left'}}>
          <div className="col-12">
            <div className="form-group">
              <label style={{fontWeight: 'bold'}}>Kết nối tài khoản</label>
              <input type="text" className="form-control mt-2" placeholder="Mời bạn nhập token" />
            </div>
            <div className="mt-2" style={{display: 'flex', gap: '5px'}}>
              <button type="submit" className="btn btn-primary ">Kết nối tài khoản</button>
              <button type="submit" className="btn btn-danger">Reset tài khoản</button>
              <button type="submit" className="btn btn-success">Chạy report</button>
            
            </div> 
          </div>
        </div> */}
        
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link to="">Home</Link>
            <br/>
            <Link to="demo">Dashboard</Link>

          </div>
        </div>
      </div>
      
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default App
