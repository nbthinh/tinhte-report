import axios from "axios";
import "./HandmadeReportComponent.css"
import { useEffect, useState } from "react";
function HandmadeReportCompoent() {

    const [oauthToken, setOauthToken] = useState("7ba70a2539ae2a2ad7600c87c1c5cb073ef03610");
    const [postId, setPostId] = useState("67120018");
    const [reportReason, setReportReason] = useState("Khác");
    useEffect(() => {

    }, []);

    async function handmadeReport () {
        console.log("oauthToken = ", oauthToken);
        console.log("postId = ", postId);
        console.log("reportReason = ", reportReason);
        setInterval(async () => {
            const res = await axios.post(`https://tinhte.vn/appforo/index.php?posts/${postId}/report&message=${reportReason}&oauth_token=${oauthToken}`, {
                // "posts/67054209/report": '',
                message: reportReason,
                oauth_token: oauthToken
            });
            console.log("res = ", res);
        }, 5000);
        
        
    }

    function handleChangeValue(event:  React.ChangeEvent<HTMLInputElement>, field: string) {
        console.log("event = ", event.target.value);
        console.log("field = ", field);
        if (field === 'oauthToken') {
            setOauthToken(event.target.value);
        }
        else if (field === postId) {
            setPostId(event.target.value);
        }
        else {
            setReportReason(event.target.value);
        }
    }

    return (
        <>
            <div className="handmade-report-container" style={{textAlign: 'left'}}>
                <div className="form-group">
                    <label >Oauth Token</label>
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Enter oauth token. Example: 7ba70a2539ae2a2ad7600c87c1c5cb073ef03610"
                        value={oauthToken}
                        onChange={(evt) => handleChangeValue(evt, 'oauthToken')}
                    />
                </div>

                <div className="form-group">
                    <label >Report Post ID</label>
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Enter post id you want to report. Example: 67120018"
                        value={postId}
                        onChange={(evt) => handleChangeValue(evt, 'postId')}
                    />
                </div>

                <div className="form-group">
                    <label >Report Reason</label>
                    <input 
                        type="text"
                        className="form-control mt-2"
                        placeholder="Enter report reason"
                        value={reportReason}
                        onChange={(evt) => handleChangeValue(evt, 'reportReason')}
                    />
                </div>

                <button className="btn btn-primary mt-3" onClick={() =>handmadeReport()}>Send Report</button>
            </div>
            <hr/>
        </>
    )
}

export default HandmadeReportCompoent
