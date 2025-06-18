import Header from "./Header";
import MainInfo from "./MainInfo";
import ConnectionInfo from './ConnectionInfo';
import SaveIn from './SaveIn';
import Actions from "./Actions";

const CrmModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white space-y-4  p-6 rounded-xl shadow-md w-[90%] max-w-2xl">
        <Header onClose={onClose} />
        <MainInfo />
        <ConnectionInfo />
        <SaveIn />
        <Actions />
      </div>
    </div>
  );
};

export default CrmModal;
