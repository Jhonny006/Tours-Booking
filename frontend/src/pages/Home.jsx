import { useState } from "react";
import Carousel from "../components/Carousel";
import TourCard from "../components/TourCard";
import TourModal from "../components/TourModal";

const tours = [
    {
        id: 1,
        name: "Aventura en la Montaña",
        description: "Explora los paisajes más impresionantes de la montaña.",
        image: "https://source.unsplash.com/800x600/?mountain,travel",
    },
    {
        id: 2,
        name: "Playa Tropical",
        description: "Relájate en una playa paradisíaca con aguas cristalinas.",
        image: "https://source.unsplash.com/800x600/?beach,travel",
    },
    {
        id: 3,
        name: "Safari Africano",
        description: "Vive la experiencia única de un safari en África.",
        image: "https://source.unsplash.com/800x600/?safari,travel",
    },
];

const Home = () => {
    const [selectedTour, setSelectedTour] = useState(null);

    return (
        <div className="max-w-6xl mx-auto p-5">
            <Carousel tours={tours} />
            <h2 className="text-2xl font-bold mt-6 mb-4">Tours Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} onOpen={setSelectedTour} />
                ))}
            </div>
            <TourModal
                tour={selectedTour}
                isOpen={!!selectedTour}
                onClose={() => setSelectedTour(null)}
            />
        </div>
    );
};

export default Home;
