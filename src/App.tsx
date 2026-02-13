import { useEffect } from 'react'
import './App.css'
import axios, { type AxiosResponse } from "axios";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const oauthToken = 'af0ac9c0034ab720563e8e99c03ec703d6acf46c';
  const reportListId = [
    {
      postId: "67055354",
      posterName: "Cô hồn duan388266"
    },
    {
      postId: "67051275",
      posterName: "Cô hồn duan388266"
    },
    {
      postId: "67051323",
      posterName: "Thằng họ dương tên sơn ví mình là chó"
    },
    {
      postId: "67054051",
      posterName: "Cô hồn duan388266"
    },
    {
      postId: "66981621",
      posterName: "Cô hồn duan388266"
    },
    {
      postId: "67044361",
      posterName: "Cô hồn duan388266"
    },
    {
      postId: "66981740",
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
      <button>Report post</button>

      <ToastContainer />
    </>
  )
}

export default App
