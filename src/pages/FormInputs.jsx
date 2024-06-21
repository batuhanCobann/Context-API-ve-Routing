import { useContext } from "react"
import { MyContext } from "../store/context"

export default function FormInputs(){

    const { formData, setFormData, showSummary, setShowSummary } = useContext(MyContext)

    function handleInput(e){
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    function handleForm(e){
        e.preventDefault();
        console.log(formData);
        setShowSummary(true)

    }

    return(
        <div>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="İsim Giriniz" name="name" value={formData.name} onChange={handleInput}/>
                <input type="text" placeholder="Soyisim Giriniz" name="surname" value={formData.surname} onChange={handleInput}/>
                <input type="text" placeholder="Eposta Giriniz" name="email" value={formData.email} onChange={handleInput}/>
                <input type="text" placeholder="Telefon Giriniz" name="phone" value={formData.phone} onChange={handleInput}/>
                <button>Gönder</button>
            </form>
        </div>
    )

    
}