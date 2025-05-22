import { useNavigate } from "react-router-dom";
import backArrow from "../assets/Back.png"; // Adjust path if necessary

const BackButton = ({ onClick, className }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onClick) {
      onClick(); // Use custom function if provided
    } else {
      navigate(-1); // Default behavior: navigate back
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center justify-center rounded-full hover:bg-gray-100 transition ${className}`}
    >
      <img src={backArrow} alt="Back" className="w-8 h-8" />
    </button>
  );
};

export default BackButton;
