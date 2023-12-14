import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import Play from './Assests/sounds/play.mp3'
import Wrong from './Assests/sounds/wrong.mp3'
import CorrectSound from './Assests/sounds/src_sounds_correct.mp3'
const Trivia = ({data,questionNumber,SetquestionNumber,SetStop}) => {
  const [question,Setquestion] = useState(null)
  const [SelectedAnswer,SetSelectedAnswer] = useState(null)
  const [className,SetClassName] = useState("answer")
  const [letsplay] = useSound(Play);
  const [CorrcetAnswer] = useSound(CorrectSound)
  const [WrongAnswer] = useSound(Wrong)
  useEffect(()=>{
    Setquestion(data[questionNumber-1])
  },[data,questionNumber])
  const delay = (duration,callBack) =>{
    setTimeout(()=>{
      callBack();
    },duration)
  }
  // useEffect(()=>{
  //   letsplay();
  // },[letsplay])
  function handleClick(item){
    SetSelectedAnswer(item)
    SetClassName("answer active")
    delay(3000,()=>{
      SetClassName(item.correct?"answer correct":"answer wrong")
    })
    delay(5000,()=>{
      if(item.correct){
        CorrcetAnswer();
        delay(1000,()=>{
          SetquestionNumber((prev)=>prev+1)
          SetSelectedAnswer(null)
        })
      } else {
        WrongAnswer();
        delay(1000,()=>{
          SetStop(true)
        })
      }
    })
  }
  return (
    <div className='trivia'>
        <div className='Question'>{question?.question}</div>
        <div className="Answer">
          {question?.answers.map((item)=>(
              <div className={(item === SelectedAnswer)?className:"answer"} onClick={()=>handleClick(item)} >{item.text}</div>
          ))}
        </div>
    </div>
  )
}

export default Trivia