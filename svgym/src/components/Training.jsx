import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Training(props) {
  const nav = useNavigate();
  let arr = [];
  let km = (`${props.trainer.years}` * 5) / `${props.trainer.workouts}`;
  let show = () => {
    arr = [];
    for (let i = 1; i <= `${props.trainer.workouts}`; i++) {
      let temp = {
        num: `${i}`,
        km: Math.floor(km)
      }
      km = km * 1.15;
      arr.push(temp);
    }
  }

  const moveToWorkout = (num, km) => {
    let temp = {
      num,
      km
    }
    props.setWorkout(temp);
    nav('/workoutdisplay');
  }

  return (
    <div className="container">
      <h1>Welcome</h1>
      <h1>{`${props.fullName}`}</h1>
      <button onClick={() => moveToWorkout(arr[0].num, arr[0].km)} >Start</button>
      {show()}
      {arr.map((workout) => (
        <button onClick={() => moveToWorkout(workout.num, workout.km)} key={workout.num} className='workoutBTN'>
          <h3>{`Workout No.: ${workout.num}`}</h3>
          <p>{`KM: ${workout.km}`}</p>
        </button>
      ))}
      <br />
    </div>
  )
}
