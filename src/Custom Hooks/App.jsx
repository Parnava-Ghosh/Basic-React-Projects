import { useState } from "react";

function useMyHook(){
    const[count, setCount] = useState(0);

    function increaseCount(){
        setCount(count => count + 1);
    }
    return{
        count: count,
        increaseCount: increaseCount
    }
}

export default function App(){
    const {count, increaseCount} = useMyHook();

    return(
        <>
            <button onClick={increaseCount}>Increase {count}</button>
        </>
    )
}