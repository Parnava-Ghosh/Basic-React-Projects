import { useState, useEffect } from "react";

function App(){
    const [count, setCount] = useState(0);

    function IncreaseCount(){
        setCount(count => count + 1);
    }

    useEffect(()=>{
        const intervalId = setInterval(IncreaseCount, 1000)
        return () => {
            clearInterval(intervalId);
        }
    }, [])


    return(
        <>
            {count > 99 ? "99+" : count}
        </>
    )
}

export default App;