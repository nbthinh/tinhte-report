import { useEffect } from 'react'
import './App.css'
// import axios, { type AxiosResponse } from "axios";
import { ToastContainer } from 'react-toastify';
import { report } from './utils/action';
import HandmadeReportCompoent from './components/handle-make-report/HandmadeReportComponent';

function App() {
  const oauthToken = '3d7f8b6a85f5ed45af4ab05d51d60f8d1f8f7d85';


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
        <div className="row" style={{textAlign: 'left'}}>
          <div className="col-12" >
            <h5>
              1. Hành vi của họ đang là gì?
            </h5>
            <ul>
              <li>
                Từ những gì bạn đưa ra, họ có các hành vi sau:
              </li>
              <li>
                Gọi công khai họ tên đầy đủ của bạn trên diễn đàn (dù bạn không đồng ý)
              </li>
              <li>
                Body shaming (chê ngoại hình, béo ú, mỉa mai giảm cân)
              </li>
              <li>
                Bôi nhọ, chế giễu kéo dài, lặp đi lặp lại
              </li>
              <li>
                Gợi ý – ám chỉ hành vi sai trái (bom hàng, nợ nần, tinh thần không bình thường…)
              </li>
              <li>
                Hù dọa công an / tư pháp / mời làm việc
              </li>
              <li>
                Có dấu hiệu dùng số điện thoại lạ giả danh giao hàng – tư pháp
              </li>
              <li>
                👉 Đây không còn là cãi nhau đơn thuần, mà là quấy rối + xúc phạm danh dự + đe dọa tinh thần.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
