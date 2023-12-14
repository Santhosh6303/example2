import React, { useRef } from 'react'
import useSound from 'use-sound';
const User = ({SetUserName}) => {
    const inputRef = useRef();
    function HandleClick(){
        inputRef.current.value &&
        SetUserName(inputRef.current.value);
    }
  return (
    <div className='Start'>
        <input type='text' placeholder='Enter Your Name' ref={inputRef}  />
        <button className='Start-btn' onClick={HandleClick} >Start</button>
    </div>
  )
}

export default User