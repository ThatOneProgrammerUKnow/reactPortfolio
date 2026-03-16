import "./buttons.css"


export default function Button({
    text="Button", 
    onClick, 
    type="button", 
    btnColors="btnPrimary",
    btnSizing="fitContent"
}){
    const styles = btnColors + " " + btnSizing;

    return (
    <button onClick={onClick} className={styles} type={type}>{text}</button>
)
}