import { useState } from 'react'
import './initial.css'

function Initial() {
    const [count, setCount] = useState(0)

    return (
        <>
        <h1>Initial</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            <p>
            Edit <code>src/pages/initial/initial.jsx</code> and save to test HMR
            </p>
        </div>
        </>
    )
}

export default Initial