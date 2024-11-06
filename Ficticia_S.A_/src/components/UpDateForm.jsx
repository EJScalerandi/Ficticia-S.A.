import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockUser } from "../assets/MoksData"; // Importamos los datos del mock

function UpDateForm({ setUserData }) {
    const [updatedUserData, setUpdatedUserData] = useState(mockUser); // Usamos los datos del mock
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUserData({
            ...updatedUserData,
            [name]: value,
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Formulario enviado", updatedUserData); // Depuración
        setUserData(updatedUserData); // Guardamos los datos actualizados
        alert("Datos actualizados correctamente.");
        navigate("/"); // Redirige a la homePage después de la actualización
    };

    return (
        <div className="update-form">
            <h1>Actualiza tus Datos</h1>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="username"
                            value={updatedUserData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Identificación:
                        <input
                            type="text"
                            name="identification"
                            value={updatedUserData.identification || ""}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Edad:
                        <input
                            type="number"
                            name="age"
                            value={updatedUserData.age || ""}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Género:
                        <select
                            name="gender"
                            value={updatedUserData.gender || ""}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona...</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="otro">Otro</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Estado:
                        <select
                            name="status"
                            value={updatedUserData.status || ""}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona...</option>
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Atributos adicionales:
                        <input
                            type="text"
                            name="additionalAttributes"
                            value={updatedUserData.additionalAttributes || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        ¿Maneja?
                        <select
                            name="drives"
                            value={updatedUserData.drives || ""}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona...</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        ¿Usa lentes?
                        <select
                            name="wearsGlasses"
                            value={updatedUserData.wearsGlasses || ""}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona...</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        ¿Es diabético?
                        <select
                            name="diabetic"
                            value={updatedUserData.diabetic || ""}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona...</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        ¿Padece alguna otra enfermedad? ¿Cuál?
                        <input
                            type="text"
                            name="otherConditions"
                            value={updatedUserData.otherConditions || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    );
}

export default UpDateForm;
