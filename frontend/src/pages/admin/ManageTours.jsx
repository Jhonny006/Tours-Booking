import React from "react";

const ManageTours = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Gestión de Tours</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Añadir Nuevo Tour</button>
            <ul className="list-disc ml-4">
                <li>Tour a la playa <button className="text-red-500 ml-2">Eliminar</button></li>
                <li>Visita a la montaña <button className="text-red-500 ml-2">Eliminar</button></li>
            </ul>
        </div>
    );
};

export default ManageTours;
