import { useEffect } from 'react'
import './App.css'
// import axios, { type AxiosResponse } from "axios";
import { ToastContainer } from 'react-toastify';
import { report } from './utils/action';

function App() {
  const oauthToken = '2ebefd1a0a27490082f82d7405fb97af2b6bb896';


  useEffect(() => {
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
