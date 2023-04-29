import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Ready(props) {
    const nav = useNavigate();
    let arr = [];

    const readyBTN = () => {
        let km = (`${props.selectedYearsOption}` * 5) / `${props.selectedWorkoutOption}`;
        for (let i = 1; i <= `${props.selectedWorkoutOption}`; i++) {
            arr.push({
                num: `${i}`,
                km: Math.floor(km)
            })
            km = km * 1.15;
        }
        let temp = {
            id: props.id,
            fullname: props.fullName,
            gender: props.gender,
            workouts: props.selectedWorkoutOption,
            years: props.selectedYearsOption,
            list: arr
        }
        props.setTrainer(temp);
        nav(`/training/:${props.fullName}`);
    }

    return (
        <div className="container">
            <h1>Ready?</h1>
            <button onClick={readyBTN}>Yes</button>
            <br />
            <Link to={'/'}><button>No</button></Link>
        </div>
    )
}
