import React from "react";

const UserProfile = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700">Nombre</label>
                    <input type="text" className="w-full p-2 border rounded" value="John Doe" readOnly />
                </div>
                <div>
                    <label className="block text-gray-700">Correo Electrónico</label>
                    <input type="email" className="w-full p-2 border rounded" value="johndoe@example.com" readOnly />
                </div>
                <div>
                    <label className="block text-gray-700">Reservaciones</label>
                    <ul className="list-disc ml-4">
                        <li>Tour a la playa - 15 de abril</li>
                        <li>Visita a la montaña - 22 de abril</li>
                    </ul>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Editar Perfil</button>
            </div>
        </div>
    );
};

export default UserProfile;
