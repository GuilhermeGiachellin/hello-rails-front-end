import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreetings, selectAllGreetings } from '../redux/slice/greetingsSlice';

const Greetings = () => {
    const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchGreetings())
  }, [dispatch]);

  return (
    <div>    
        <p>Random message: </p>       
        <p>{useSelector((state) => selectAllGreetings(state))}</p>
    </div>
  )
}

export default Greetings
