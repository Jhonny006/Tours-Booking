import React from "react";

const ManageUsers = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Gestión de Usuarios</h2>
            <ul className="list-disc ml-4">
                <li>John Doe - johndoe@example.com <button className="text-red-500 ml-2">Eliminar</button></li>
                <li>Jane Smith - janesmith@example.com <button className="text-red-500 ml-2">Eliminar</button></li>
            </ul>
        </div>
    );
};

export default ManageUsers;
