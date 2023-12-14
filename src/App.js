import { Stack } from "@mui/material";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import { useEffect, useMemo, useState } from "react";
import User from "./components/User";
function App() {
  const [questionNumber,SetquestionNumber] = useState(1)
  const [ernaed,SetEarned] = useState(0)
  const [Stop,SetStop] = useState(false)
  const [userName,SetUserName] = useState(null)
  const price = useMemo(() => [
      100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000
    ], []);
    console.log(price.reverse())
  useEffect(() => {
    questionNumber >> 1 && SetEarned(price[15-questionNumber+1])
  }, [questionNumber, price])
  return (
    <div className="App">
      {(userName) ? (
        <>
          <Stack display={'flex'} direction={'row'}>
            <div className="Main">
              <Main questionNumber={questionNumber} SetquestionNumber={SetquestionNumber} Stop={Stop} SetStop={SetStop} ernaed={ernaed} />
            </div>
            <div>
              <SideBar count={questionNumber} price={price} />
            </div>
          </Stack>
        </>
      ) : (
        <User SetUserName={SetUserName} />
      )}
    </div>
  );
}

export default App;
