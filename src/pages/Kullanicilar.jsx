import { useContext } from "react"
import { MyContext } from "../store/context"

export default function Kullanicilar (){
    const {formData} = useContext(MyContext)
    return(
        <>
        {formData ?         
        <div style={{
            border:"1px solid black", 
            padding:"20px", 
            backgroundColor:"#8FD8D", 
            display:"inline-block", 
            marginTop:"40px",
            }}>
            <img style={{width:"70px"}} src="profil.jpg" alt="" />
            <h3>İsim : {formData.name}</h3>
            <h3>Soyisim : {formData.surname}</h3>
            <h3>E-posta : {formData.email}</h3>
            <h3>Telefon : {formData.phone}</h3>
        </div>
        : "Kullanıcı BULUNAMADI"}
        </>

        
    )
}