import ReactDOM from 'react-dom';

interface ModalProps {
    mensaje: string;
}

const Modal: React.FC<ModalProps> = ({ mensaje }) => {
    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md max-w-sm m-auto">
                <h2 className="text-xl font-bold mb-2">Error</h2>
                <p className="text-base">{mensaje}</p>
            </div>
        </div>,
        document.getElementById('modal-root')!
    );
};

export default Modal;
