import { useState } from "react";

const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue); 

    const incrementCount = () => {setCount(count + 1);};
    const decrementCount = () => {setCount(count - 1);};
    const resetCount = () => {setCount(initialValue);}; 
    
    return {count, incrementCount, decrementCount, resetCount};
}

export default useCounter;