import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="myDiv">
            <div className="header-right">
                <h2>Batuhan Çoban</h2>
            </div>
            <div className="header-left">
                <Link style={{backgroundColor:"azure", padding:"0px 5px", borderRadius:"5px"}} to="/">Anasayfa</Link>
                <Link style={{backgroundColor:"azure", padding:"0px 5px", borderRadius:"5px"}} to="/GirisBilgileri">Giriş Bilgileri</Link>
                <Link style={{backgroundColor:"azure", padding:"0px 5px", borderRadius:"5px"}} to="/Kullanicilar">Kullanıcılar</Link>
            </div>

        </div>
    )
}