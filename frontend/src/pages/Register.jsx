import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Register = () => {
    const [userData, setUserData] = useState({ username: "", email: "", password: "", confirmPassword: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Cambiando ${name}:`, value); // Depuración
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        // 📌 Aquí se hará la conexión a la API con fetch
        try {
            const response = await fetch("URL de la API", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: userData.username,
                    email: userData.email,
                    password: userData.password,
                }),
            });

            const data = await response.json();
            console.log("Respuesta del servidor:", data);

            if (response.ok) {
                alert("Registro exitoso!");
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Error en el registro:", error);
            alert("Hubo un problema al registrarse.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-400 px-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Registro</h2>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label="Nombre de Usuario"
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                        placeholder="Ingrese su usuario"
                    />
                    <InputField
                        label="Correo Electrónico"
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="Ingrese su correo electrónico"
                    />
                    <InputField
                        label="Contraseña"
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        placeholder="Ingrese su contraseña"
                    />
                    <InputField
                        label="Confirmar Contraseña"
                        type="password"
                        name="confirmPassword"
                        value={userData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Repita la contraseña"
                    />
                    <Button text="Registrarse" type="submit" fullWidth />
                </form>
                <p className="mt-4 text-center text-gray-600">
                    ¿Ya tienes cuenta? <a href="/login" className="text-blue-600 font-semibold">Inicia sesión</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
