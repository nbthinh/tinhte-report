import { useEffect } from "react"
import "./DemoComponent.css"
import axios from "axios"

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'


function DemoComponent() {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        console.log('Căm thù con đỗ lê nguyệt thanh')
        demoFetchData()
    }, [])

    const demoFetchData = async () => {
        const abc = await axios.get("http://127.0.0.1:8000/api/abc")
        console.log('abc = ', abc)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Demo Component</h1>
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore ut illum velit iure inventore eos natus similique itaque repudiandae eaque voluptate dolores amet totam quisquam iusto alias, atque harum eligendi!</div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <h3>Thêm tài khoản và chủ đề</h3>
                    </div>
                    <div className="col-12">

                        <Tabs
                            defaultActiveKey="account"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="account" title="Tài khoản">
                                <div className="tab-title-form">Thiết lập tài khoản</div>
                                <div className="add-account-form">
                                    <div className="form-group form-group-left-align mt-2">
                                        <label>Mã tài khoản</label>
                                        <input type="text" className="form-control" placeholder="Thêm tài khoản kết nối" />
                                    </div>
                                    <div className="form-group form-group-left-align mt-2">
                                        <label>Tên tài khoản</label>
                                        <input type="text" className="form-control" placeholder="Tên tài khoản" />
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="subject" title="Chủ đề">
                                <div className="tab-title-form">Thêm tài khoản</div>
                            </Tab>
                            {/* <Tab eventKey="contact" title="Contact" disabled>
                                Tab content for Contact
                            </Tab> */}
                        </Tabs>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DemoComponent
