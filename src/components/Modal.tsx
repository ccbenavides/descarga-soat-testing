import { createPortal } from 'react-dom';

interface ModalProps {
    mensaje: string;
}

const el = document.getElementById('modal-root');

const Modal: React.FC<ModalProps> = ({ mensaje }) => {
    return el ? createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" role="dialog">
            <div className="bg-white p-6 rounded shadow-md max-w-sm m-auto">
                <h2 className="text-xl font-bold mb-2">Error</h2>
                <p className="text-base">{mensaje}</p>
            </div>
        </div>,
        el
    ) : null;
};

export default Modal;
