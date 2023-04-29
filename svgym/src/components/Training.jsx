import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Training(props) {
  const nav = useNavigate();

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
      <button onClick={() => moveToWorkout(props.trainer.list[0].num, props.trainer.list[0].km)} >Start</button>
      {props.trainer.list.map((workout) => (
        <button onClick={() => moveToWorkout(workout.num, workout.km)} key={workout.num} className='workoutBTN'>
          <h3>{`Workout No.: ${workout.num}`}</h3>
          <p>{`KM: ${workout.km}`}</p>
        </button>
      ))}
      <br />
      <Link to={'/'}><button>Back To The Begining</button></Link>
    </div>
  )
}
