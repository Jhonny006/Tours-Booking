import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import ManageUsers from "./admin/ManageUsers";
import ManageTours from "./admin/ManageTours";
import ManageBookings from "./admin/ManageBookings";

const AdminDashboard = () => {
    return (
        <div className="flex">
            {/* Sidebar de Administración */}
            <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
                <h2 className="text-xl font-bold mb-4">Panel de Admin</h2>
                <nav className="flex flex-col space-y-2">
                    <NavLink to="/admin/tours" className="hover:bg-gray-700 p-2 rounded">Gestionar Tours</NavLink>
                    <NavLink to="/admin/users" className="hover:bg-gray-700 p-2 rounded">Gestionar Usuarios</NavLink>
                    <NavLink to="/admin/bookings" className="hover:bg-gray-700 p-2 rounded">Gestionar Reservas</NavLink>
                </nav>
            </aside>

            {/* Contenido Dinámico (según la ruta) */}
            <main className="flex-1 p-6">
                <Routes>
                    <Route path="tours" element={<ManageTours />} />
                    <Route path="users" element={<ManageUsers />} />
                    <Route path="bookings" element={<ManageBookings />} />
                </Routes>
            </main>
        </div>
    );
};

export default AdminDashboard;
