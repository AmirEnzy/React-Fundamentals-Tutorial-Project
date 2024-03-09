// you can also destruct props like this
//export default function TabButton({children})
export default function TabButton(props) {

    return (
    
    <>
        <li><button className={props.isActive? "active" : ""} onClick={props.onSelect}>{props.children}</button></li>
    </>) 



}