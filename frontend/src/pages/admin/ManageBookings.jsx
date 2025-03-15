import React from "react";

const ManageBookings = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Gestión de Reservaciones</h2>
            <ul className="list-disc ml-4">
                <li>John Doe - Tour a la playa (15 de abril) <button className="text-red-500 ml-2">Cancelar</button></li>
                <li>Jane Smith - Visita a la montaña (22 de abril) <button className="text-red-500 ml-2">Cancelar</button></li>
            </ul>
        </div>
    );
};

export default ManageBookings;
