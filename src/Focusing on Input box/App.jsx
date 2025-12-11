import { useRef } from "react";

export default function App(){
    const nameRef = useRef();
    const phRef = useRef();
    function handleSubmit(){
        const nameValue = nameRef.current.value.trim();
        const phValue = phRef.current.value.trim();
        if(nameValue ===""){
            nameRef.current.focus();
        }if(phValue ===""){
            phRef.current.focus();
        }
    }


    return(
        <>
            <input ref={nameRef} type="text" placeholder="Enter Name"/><br />
            <input ref={phRef} type="text" placeholder="Enter Phone Number" /><br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}