import { useEffect } from "react"
import "./DemoComponent.css"
import axios from "axios"
function DemoComponent() {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
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
            </div>

        </>
    )
}

export default DemoComponent
