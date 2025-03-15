import * as React from "react";
import { Menu, X, User, LogOut, Settings, LogIn, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const defaultProps = {
    logo: "/logo.svg",
    navItems: [
        { href: "/", label: "Inicio" },
        { href: "#paquetes", label: "Paquetes" },
        { href: "#nosotros", label: "Sobre nosotros" },
    ],
    isLoggedIn: false,
    userName: "",
    userAvatar: "",
};

const Navbar = ({
    logo = defaultProps.logo,
    navItems = defaultProps.navItems,
    isLoggedIn = defaultProps.isLoggedIn,
    userName = defaultProps.userName,
    userAvatar = defaultProps.userAvatar,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [userMenuOpen, setUserMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    return (
        <nav className="bg-white shadow-lg fixed w-full z-10 pr-4">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/" className="text-xl font-bold">Travel Agency</a>
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900">
                            {item.label}
                        </a>
                    ))}
                    {isLoggedIn ? (
                        <div className="relative">
                            <button className="flex items-center space-x-2" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                                <User className="h-5 w-5" />
                                <span>{userName || "Usuario"}</span>
                            </button>
                            {userMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
                                    <a href="/perfil" className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
                                        <User className="w-4 h-4 mr-2" /> Perfil
                                    </a>
                                    <a href="/configuracion" className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
                                        <Settings className="w-4 h-4 mr-2" /> Configuración
                                    </a>
                                    <button className=" w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center" onClick={() => { }}>
                                        <LogOut className="w-4 h-4 mr-2" /> Cerrar sesión
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="relative">
                            <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center space-x-2" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                                <LogIn className="h-5 w-5" /> <span>Cuenta</span>
                            </button>
                            {userMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
                                    <button className=" w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center" onClick={() => navigate('/login')}>
                                        <LogIn className="w-4 h-4 mr-2" /> Iniciar sesión
                                    </button>
                                    <button className=" w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center" onClick={() => navigate('/register')}>
                                        <UserPlus className="w-4 h-4 mr-2" /> Registrarse
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                        {isOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col space-y-4 p-4">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 border-b border-gray-200 py-2">
                                {item.label}
                            </a>
                        ))}
                        {isLoggedIn ? (
                            <div className="mt-4">
                                <a href="/perfil" className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
                                    <User className="w-4 h-4 mr-2" /> Perfil
                                </a>
                                <a href="/configuracion" className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
                                    <Settings className="w-4 h-4 mr-2" /> Configuración
                                </a>
                                <button className=" w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center" onClick={() => { }}>
                                    <LogOut className="w-4 h-4 mr-2" /> Cerrar sesión
                                </button>
                            </div>
                        ) : (
                            <div className="mt-4">
                                <button className=" w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center" onClick={() => navigate('/login')}>
                                    <LogIn className="w-4 h-4 mr-2" /> Iniciar sesión
                                </button>
                                <button className=" w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:border flex items-center" onClick={() => navigate('/register')}>
                                    <UserPlus className="w-4 h-4 mr-2" /> Registrarse
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
