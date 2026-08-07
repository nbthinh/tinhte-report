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
            <h1>Demo Component</h1>

        </>
    )
}

export default DemoComponent
