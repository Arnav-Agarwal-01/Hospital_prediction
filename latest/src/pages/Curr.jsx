import React,{useEffect,useState} from "react";
import axios from "axios";
import "../styles/curr.css";
const currentdate="2024-11-10"
const data={
    "_id": {
      "$oid": "672fef441f8683a57d305cab"
    },
    "date": {
      "$date": "2022-01-01T00:00:00.000Z"
    },
    "patients_in": 12,
    "bed_occupancy_rate": 84.67,
    "beds_occupied": 84,
    "icu_beds": 8,
    "ventilators": 4,
    "doctors": 12,
    "nurses": 21,
    "staff": 24
  }
function Curr(){
    return(<div className="curflex" >
        <div className="curform" >
            <div className="curhead" style={{color:"white",backgroundColor:"black"}}>Current Day Report</div>
            <div className="curdata">
                <div className="infl">
                    <div className="l">Date</div>
                    <div className="r">{currentdate}</div>
                </div>
                <div className="infl"><div className="l">Patient Count</div><div  className="r">{data.patients_in}</div></div>
                <div className="infl"><div  className="l">Beds Occupied</div><div className="r">{data.bed_occupancy_rate}</div></div>
                <div className="infl"><div  className="l">Occupancy Rate</div><div className="r">{data.beds_occupied}</div></div>
                <div className="infl"><div  className="l">ICU Beds</div><div className="r">{data.icu_beds}</div></div>
                <div className="infl"><div  className="l">Active Equipment Count</div><div className="r">{data.ventilators}</div></div>
                <div className="infl"><div  className="l">Active Doctors Count</div><div className="r">{data.doctors}</div></div>
                <div className="infl"><div  className="l">Active Nurses Count</div><div className="r">{data.nurses}</div></div>
                <div className="infl"><div  className="l">Active Work Staff</div><div className="r">{data.staff}</div></div>
            </div>
            </div>
            </div>)
}
export default Curr;