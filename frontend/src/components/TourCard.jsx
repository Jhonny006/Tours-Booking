const TourCard = ({ tour, onOpen }) => {
    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => onOpen(tour)}
        >
            <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{tour.name}</h3>
                <p className="text-gray-600 text-sm">{tour.description.slice(0, 80)}...</p>
            </div>
        </div>
    );
};

export default TourCard;
