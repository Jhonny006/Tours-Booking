import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ tours }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === tours.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? tours.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
            {tours.map((tour, index) => (
                <div
                    key={tour.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-5 left-5 bg-black/60 text-white p-3 rounded-lg">
                        <h2 className="text-lg font-semibold">{tour.name}</h2>
                    </div>
                </div>
            ))}
            <button onClick={prevSlide} className="absolute top-1/2 left-4 bg-black/50 text-white p-2 rounded-full">
                <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 bg-black/50 text-white p-2 rounded-full">
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default Carousel;
