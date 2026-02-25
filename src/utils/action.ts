import axios, { type AxiosResponse } from "axios";
import { reportListId } from "./report-data";
import { toast } from "react-toastify";

async function pushReportPost(postIndex: number = 0, oauthToken: string): Promise<AxiosResponse> {
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

export const report = async (i: number, oauthToken: string) => {
    try {
        let reportResponse = await pushReportPost(i % reportListId.length, oauthToken);
        console.log("reportResponse = ", reportResponse);
        if (reportResponse && reportResponse?.status === 200) {
            toast.success(`Báo xấu bài viết ${reportListId[i % reportListId.length].postId} thành công`);
            i = i + 1;
            return true;
        }
    }
    catch (error) {
        // console.error("error = ", error);
        // toast.error(`Có lỗi xảy ra khi báo cáo ${reportListId[i % reportListId.length].postId}`);
        // i = i + 1; // Mới thêm vào
        return false;
    }
}