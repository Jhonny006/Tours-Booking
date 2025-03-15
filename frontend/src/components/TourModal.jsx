import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const TourModal = ({ tour, isOpen, onClose }) => {
    if (!isOpen || !tour) return null;

    // Imágenes de muestra si el tour no tiene imágenes
    const defaultImages = [
        "/images/sample1.jpg",
        "/images/sample2.jpg",
        "/images/sample3.jpg",
    ];

    const images = tour.images && tour.images.length > 0 ? tour.images : defaultImages;

    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        if (isOpen) setImageIndex(0);
    }, [isOpen]);

    const nextImage = () => {
        setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-5 z-50"
            onClick={onClose} // Cierra el modal al hacer clic afuera
        >
            <div
                className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-auto p-6 relative"
                onClick={(e) => e.stopPropagation()} // Evita que el clic dentro lo cierre
            >
                {/* Botón de cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                >
                    <X size={20} />
                </button>

                {/* Carrusel de imágenes */}
                <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
                    <img
                        src={images[imageIndex]}
                        alt={tour.name}
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-2 bg-black/50 text-white p-2 rounded-full"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-2 bg-black/50 text-white p-2 rounded-full"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Información del tour */}
                <div className="p-4">
                    <h2 className="text-2xl font-bold text-center">{tour.name || "Tour sin nombre"}</h2>
                    <p className="text-gray-700 mt-2 text-justify">{tour.description || "No hay descripción disponible."}</p>
                    <ul className="mt-4 text-gray-600 space-y-2">
                        <li><strong>Duración:</strong> {tour.duration || "No especificado"}</li>
                        <li><strong>Precio:</strong> ${tour.price || "Consultar"}</li>
                        <li><strong>Incluye:</strong> {tour.included || "No especificado"}</li>
                    </ul>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col md:flex-row justify-between mt-6 gap-3">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full md:w-auto hover:bg-green-600 transition">
                        Añadir al carrito
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full md:w-auto hover:bg-blue-600 transition">
                        Hacer reserva
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TourModal;
