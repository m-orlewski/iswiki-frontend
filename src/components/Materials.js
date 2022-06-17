import { Link } from "react-router-dom"

const Materials = () => {
    return (
        <section>
            <h1>Materials Page</h1>
            <br />
            <p>Materials</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Materials