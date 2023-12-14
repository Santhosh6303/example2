import { Box } from '@mui/material'
import Trivia from './Trivia'
import Timer from './Timer'
const Main = ({questionNumber,SetquestionNumber,ernaed,Stop,SetStop}) => {
  
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  if(Stop) return (<h1 className='Fail' >You Earned $ {ernaed}</h1>)
  return (
        <Box display={'flex'} sx={{
          position:'absolute',
          flexDirection:'column'
        }}>
          <div className='top'>
          <div className='timer'><Timer SetStop={SetStop} questionNumber={questionNumber} /></div>
          </div>
          <div className='bottom'>
              <Trivia data={data} SetStop={SetStop} questionNumber ={questionNumber} SetquestionNumber={SetquestionNumber} />
          </div>
        </Box>
  )
}

export default Main