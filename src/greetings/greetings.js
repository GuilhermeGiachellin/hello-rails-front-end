import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreetings, selectAllGreetings } from '../redux/slice/greetingsSlice';

const Greetings = () => {
    const dispatch = useDispatch()
    const { entities } = useSelector((state) => state.greetings);
    
  useEffect(() => {
    dispatch(fetchGreetings())
  }, [dispatch]);
  console.log(entities);
  return (
    <div>    
        <p>Random message: </p>  
        {useSelector((state) => selectAllGreetings(state)).map((greet) => (
          <p key={greet.id}> {greet.message} </p>         
        ))}
    </div>
  )
}

export default Greetings
