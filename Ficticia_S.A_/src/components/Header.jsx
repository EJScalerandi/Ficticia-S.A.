import { useState } from "react";
import { validateFields, validatePasswordLength } from "../assets/Validation";
function Header (){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleAccess = () => {
        let errorMsg = validateFields(username, password);
        if (!errorMsg){
            errorMsg = validatePasswordLength(password)
        }
        if (errorMsg){
            setError(errorMsg);
            return;
        }
        setError("");
        alert("Acceso concedido");
    };

    return (
        <>
        <p>Soy El header</p>
        <input 
        type="text"
        placeholder= "Usuario"
        value={username}
        onChange={(e)=> setUserName(e.target.value)}
        />
        <input
        type="password"
        placeholder="contraseña"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={handleAccess}>Accede</button>
        </>
    )
}

export default Header;