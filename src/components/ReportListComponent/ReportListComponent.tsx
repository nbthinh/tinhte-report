import { useEffect } from "react"
import "./ReportListComponent.css"
import axios from "axios"
import { reportListId } from "../../utils/report-data"
import { generateHash } from "../../utils/action"
function ReportListComponent() {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
    }, [])




    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Danh sách các Report</h3>
                        <div className="table-responsive">

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">ID Report</th>
                                        {/* <th scope="col">Nội dung report</th> */}
                                        <th className="text-nowrap" scope="col">Lý do report report</th>
                                        <th className="text-nowrap" scope="col">Link bài viết</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reportListId.length > 0 &&
                                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                        reportListId.map((_item, _index) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{_index + 1}</th>
                                                    <td>{generateHash(_item.postId)}</td>
                                                    {/* <td>{ _item.posterName }</td> */}
                                                    <td className="text-nowrap">{_item.reportReason}</td>
                                                    <td><a href={_item.url} target="_blank">Link</a></td>
                                                </tr>
                                            )
                                        })
                                    }


                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default ReportListComponent
