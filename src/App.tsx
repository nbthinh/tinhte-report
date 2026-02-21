import { useEffect } from 'react'
import './App.css'
import axios, { type AxiosResponse } from "axios";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const oauthToken = '8f21fe989851089b32f8001ed0fd8916984a4047';
  const reportListId = [
    {
      postId: "67058486",
      posterName: "Cô hồn duan388266"
    },
    {
      postId: "67056700",
      posterName: "Cô hồn duan388266"
    },
    {
      postId: "67056411",
      posterName: "Cô hồn duan388266"
    },
    {
      postId: "67058025",
      posterName: "Cô hồn duan388266"
    },
    {
      postId: "67057678",
      posterName: "Cô hồn duan388266"
    },
    {
      postId: "67057692",
      posterName: "Cô hồn duan388266"
    }
];

  async function pushReportPost(postIndex:number=0): Promise<AxiosResponse> {
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
      catch(error) {
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
      catch(error) {
        // console.error("error = ", error);
        toast.error("Có lỗi xảy ra");
      }
    }, 5000);
  }, []);


  return (
    <>
      <div>Từ cái thời điểm thằng nnt nó đòi tiền mình gần 2tr là thấy thằng đó không bình thường rồi</div>
      <button>Report post</button>

      <ToastContainer />
    </>
  )
}

export default App
