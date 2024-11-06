import { useState } from "react";
import { validateFields, validatePasswordLength } from "../assets/Validation";
import { Link } from "react-router-dom";
import "./Header.css";  // Importar el archivo CSS de manera convencional

function Header({ isLoggedIn }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleAccess = () => {
        let errorMsg = validateFields(username, password);
        if (!errorMsg) {
            errorMsg = validatePasswordLength(password);
        }
        if (errorMsg) {
            setError(errorMsg);
            return;
        }
        setError("");
        alert("Acceso concedido");
    };

    return (
        <div className="container">
            <p className="headerText">Soy El header</p>

            {/* Si está logeado, mostrar opción para actualizar datos */}
            {isLoggedIn ? (
                <div className="loggedInContainer">
                    <p className="welcomeText">Bienvenido, {username}</p>
                    <p className="updateText">Actualiza tus datos:</p>
                    <Link to="/update-form">
                        <button className="button">Actualizar Datos</button>
                    </Link>
                </div>
            ) : (
                <div className="formContainer">
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        className="input"  // Aplicar estilo
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"  // Aplicar estilo
                    />
                    {error && <p className="error">{error}</p>}
                    <button onClick={handleAccess} className="button">Accede</button>
                    <p>Si no tienes cuenta aún, registrate en el siguiente botón</p>
                    <Link to="/register">
                        <button className="button">Registrate</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;
