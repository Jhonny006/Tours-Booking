import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Limpiar errores previos

    //     try {
    //         const response = await fetch("http://localhost:8080/api/login", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             credentials: "include", // Enviar cookies (si usas JWT en cookies seguras)
    //             body: JSON.stringify(credentials),
    //         });

    //         if (!response.ok) {
    //             throw new Error("Credenciales incorrectas o usuario no encontrado");
    //         }

    //         const data = await response.json();
    //         console.log("Login exitoso:", data);

    //         // Guardar solo lo necesario en sessionStorage
    //         sessionStorage.setItem("user", JSON.stringify({ email: credentials.email }));

    //         // Redirigir al dashboard
    //         navigate("/dashboard");

    //     } catch (error) {
    //         console.error("Error en el login:", error);
    //         setError("Usuario o contraseña incorrectos");
    //     }
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-green-400 px-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label="Email"
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        placeholder="Ingrese su correo electrónico"
                    />
                    <InputField
                        label="Contraseña"
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Ingrese su contraseña"
                    />
                    <Button text="Ingresar" type="submit" fullWidth />
                </form>
                <p className="mt-4 text-center text-gray-600">
                    ¿No tienes cuenta? <a href="/register" className="text-blue-600 font-semibold">Regístrate</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
