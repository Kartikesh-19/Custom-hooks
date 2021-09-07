import React from 'react'
import Card from './Card'
import useCounter from '../hooks/use-counter';


const ForwardCounter = () => {
    const counter=useCounter();
    // const [counter, setCounter] = useState(0)
    // debugger;
    // useEffect(() => {
    //  const interval=setInterval(() => {
    //      setCounter(prev=>prev+1)
    //  }, 1000);
    //     return () =>  clearInterval(interval)
      
    // }, [])
    return <Card>{counter}</Card>
}

export default ForwardCounter
