import React from 'react'
import { useState } from 'react'
import '../styles/upload.css'

const Update = () => {
    const [data,setData]=useState({
        

    });
    
  return (
    <>
    <div className="bg">
        <div className="bd">
            <h1>Daily Report</h1>
            <div className="container">
                <label htmlFor="date"> Date: </label>
                <input type="text" placeholder="Date YYYY-MM-DD" />

                <label htmlFor="patients_in"> patients_in: </label>
                <input type="text" placeholder="Number of people incoming" />

                <label htmlFor="bed_occupancy_rate"> bed_occupancy_rate: </label>
                <input type="text" placeholder="bed_occupancy_rate" />

                <label htmlFor="beds_occupied"> beds_occupied: </label>
                <input type="text" placeholder="beds_occupied" />

                <label htmlFor="icu_beds"> icu_beds: </label>
                <input type="text" placeholder="icu_beds" />

                <label htmlFor="ventilators"> ventilators: </label>
                <input type="text" placeholder="ventilators" />

                <label htmlFor="doctors"> doctors: </label>
                <input type="text" placeholder="doctors" />

                <label htmlFor="nurses"> nurses: </label>
                <input type="text" placeholder="nurses" />

                <label htmlFor="staff"> staff: </label>
                <input type="text" placeholder="staff" />

                <button type="submit" className="submit-btn">Submit</button>
            </div>
        </div>
    </div>
    </>
  )
}
export default Update;