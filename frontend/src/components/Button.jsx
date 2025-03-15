const Button = ({ text, onClick, type = "button", fullWidth = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all ${fullWidth ? "w-full" : ""
                }`}
        >
            {text}
        </button>
    );
};

export default Button;
