import { useEffect } from 'react'
import './App.css'
import axios, { type AxiosResponse } from "axios";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const oauthToken = '44ed4cdfcaa1f6887fc8c02355d5fc5d13c0bdfa';
  const reportListId = [
    {
      postId: "67058966",
      posterName: "nguyễn ngọc thắng"
    },
    {
      postId: "67058984",
      posterName: "nguyễn ngọc thắng"
    },
    {
      postId: "67058995",
      posterName: "nguyễn ngọc thắng"
    },
    {
      postId: "67059003",
      posterName: "nguyễn ngọc thắng"
    },
    {
      postId: "67059008",
      posterName: "nguyễn ngọc thắng"
    },
    {
      postId: "67059014",
      posterName: "nguyễn ngọc thắng"
    },
    {
      postId: "67059021",
      posterName: "nguyễn ngọc thắng"
    },
    {
      postId: "67059105",
      posterName: "nguyễn ngọc thắng"
    },
    {
      postId: "67059217",
      posterName: "nguyễn ngọc thắng"
    },
    {
      postId: "67058957",
      posterName: "nguyễn ngọc thắng"
    },
    {
      postId: "67059040",
      posterName: "nguyễn ngọc thắng"
    },
    {
      postId: "67059226",
      posterName: "nguyễn ngọc thắng"
    },
    {
      postId: "67059239",
      posterName: "nguyễn ngọc thắng"
    }
  ];

  async function pushReportPost(postIndex: number = 0): Promise<AxiosResponse> {
    console.log("postIndex = ", postIndex);
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const currReportPost = reportListId[postIndex];
        const res = await axios.post(`https://tinhte.vn/appforo/index.php?posts/${currReportPost.postId}/report&message=Kh%C3%A1c&oauth_token=${oauthToken}`, {
          // "posts/67054209/report": '',
          message: 'Khác',
          oauth_token: oauthToken
        });
        resolve(res);
      }
      catch (error) {
        reject(error);
      }
    })
  }

  useEffect(() => {
    let i = 0;
    setInterval(async () => {
      try {
        let reportResponse = await pushReportPost(i % reportListId.length);
        console.log("reportResponse = ", reportResponse);
        if (reportResponse && reportResponse?.status === 200) {
          toast.success(`Báo xấu bài viết ${reportListId[i % reportListId.length].postId} thành công`);
          i = i + 1;
        }
      }
      catch (error) {
        // console.error("error = ", error);
        toast.error("Có lỗi xảy ra");
      }
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
