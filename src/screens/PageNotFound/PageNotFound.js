import { Link } from "react-router-dom";
import "./PageNotFound.css"
const PageNotFound = () => {
    return (
        <section className="not-found">
            <p>Page not found, please type a link correctly!</p>
            <Link to="/">Back home page</Link>
        </section>
    );
}

export default PageNotFound;