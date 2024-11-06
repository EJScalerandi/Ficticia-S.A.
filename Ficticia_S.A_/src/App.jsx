import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RegisterForm from "./components/RegisterForm";
import UpDateForm from "./components/UpDateForm"; // Componente para actualizar los datos

function App() {
    const isLoggedIn = false; // Cambiar por la lógica real de inicio de sesión
    const [userData, setUserData] = useState({ username: "usuarioEjemplo" }); // Usamos useState para manejar los datos

    return (
        <Router>
            <Header isLoggedIn={isLoggedIn} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="register" element={<RegisterForm />} />
                <Route 
                    path="update-form" 
                    element={<UpDateForm setUserData={setUserData} />} // Pasamos setUserData como prop
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
