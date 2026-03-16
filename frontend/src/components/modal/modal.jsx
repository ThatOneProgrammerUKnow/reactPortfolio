import "./modal.css";
import "../../App.css";



export default function Modal({children, isOpen, onClose}){

    return (
        <div onClick={onClose} className={"modalOverlay " + (isOpen ? "visible" : "hidden")}>
            <div className={"modal " + (isOpen ? "visible" : "hidden")} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
} 

