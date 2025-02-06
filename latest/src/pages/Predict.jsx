// import React, { useState } from "react";
// import axios from "axios";
// import "./predict.css";

// function Predict() {
//   const [date, setDate] = useState('');
//   const [prediction, setPrediction] = useState(null); // State to store prediction result

//   function handleChange(e) {
//     setDate(e.target.value);
//   }

//   async function predict() {
//     try {
//       const response = await axios.post('http://localhost:5000/flask', { date });
//       setPrediction(response.data); // Set the prediction result
//       console.log(response.data); // Log the prediction result for debugging
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   return (
//     <div className="flexx1">
//       <div className="flexx2">
//         <div>Date</div>
//         <input
//           type="text"
//           value={date}
//           onChange={handleChange}
//           placeholder="yyyy-mm-dd" // Updated placeholder for the correct format
//         />
//         <button onClick={predict}>Predict</button>
//         {prediction && (
//           <div className="prediction-result">
//             <h3>Prediction Result:</h3>
//             <ul>
//               {Object.entries(prediction).map(([key, value]) => (
//                 <li key={key}>
//                   {key}: {value}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Predict; 


import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Predict() {
  const [date, setDate] = useState('');
  const [prediction, setPrediction] = useState(null);

  function handleChange(e) {
    setDate(e.target.value);
  }

  async function predict() {
    try {
      const response = await axios.post('http://localhost:5000/flask', { date });
      setPrediction(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Predict Hospital Resources</h5>
          <div className="form-group mb-3">
            <label htmlFor="dateInput">Date</label>
            <input
              type="text"
              className="form-control"
              id="dateInput"
              value={date}
              onChange={handleChange}
              placeholder="yyyy-mm-dd"
            />
          </div>
          <button className="btn btn-primary w-100" onClick={predict}>Predict</button>

          {prediction && (
            <div className="mt-4">
              <h6>Prediction Result:</h6>
              <ul className="list-group">
                {Object.entries(prediction).map(([key, value]) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={key}>
                    {key} <span className="badge bg-primary rounded-pill">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Predict;
