import React,{useEffect,useState} from "react";
import "../styles/dash.css";
import picPredict from '../assets/pic_predict.jpg';
import upPic from '../assets/upload.jpg';
import re from '../assets/analysis.jpg';
function Dash(){
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA');

    return(<div className="clus"><div className="Content">
        <div className="Head"><div style={{fontSize:"50px"}}>Dashboard</div><div style={{fontSize:"25px",paddingRight:"20px"}}>{formattedDate.replace(/-/g, '/')}</div></div>
        <div className="Cards">
            <div className="Card1"><div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={picPredict} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Prediction</h5>
    <p className="card-text">Predicted Data</p>
    <a href="/dashboard/predict" className="btn btn-primary">View prediction</a>
  </div>
</div></div>
            <div className="Card2"><div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={upPic} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Upload Data</h5>
    <p className="card-text">Portal to upload data to the database</p>
    <a href="/dashboard/update" className="btn btn-primary">Enter data</a>
  </div>
</div>
</div>
            <div className="Card3"><div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={re} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Current Day Report</h5>
    <p className="card-text">Portal to access todays data</p>
    <a href="/dashboard/current_report" className="btn btn-primary">View report</a>
  </div>
</div></div>
        </div>
        </div></div>)
}
export default Dash;