import { Link } from "react-router-dom"

const Help = () => {
    return (
        <section>
            <h1>Help Page</h1>
            <br />
            <p>Help</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Help