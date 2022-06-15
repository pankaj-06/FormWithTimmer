import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetailsForm from './Pages/UserForm';
import { Button, Typography } from '@mui/material';

function App() {
  const [time, setTime] = useState<number>(0)

  useEffect(() => {
    if (time === 0) {
      var timeleft = 300;
      var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
          clearInterval(downloadTimer);
        }
        (document.getElementById("progressBar")! as any).value = 300 - timeleft;
        setTime(300 - timeleft);
        timeleft -= 1;
      }, 1000);
    }

  }, [time])

  return (
    <div className="App">
      <div className='app-header'>
        <Typography variant="h6" gutterBottom style={{ margin: "5px" }}>
          Add User Details
        </Typography>
       
          <progress className='progress' value="0" max="300" id="progressBar" ></progress>
        
      </div>
      {
        time === 300 ? (<div className='time-over-conatiner'>
          <div>TIME IS OVER</div>
          <Button color="primary" onClick={() => {
            setTime(0)
          }}>Reset</Button>
        </div>) : <UserDetailsForm />
      }
    </div>
  );
}

export default App;
