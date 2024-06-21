import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="myDiv">
            <Link to="/">Anasayfa</Link>
            <Link to="/about">Hakkımda</Link>
            <Link to="/contact">İletişim</Link>
        </div>
    )
}