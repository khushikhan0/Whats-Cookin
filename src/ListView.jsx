import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import App from "./components/App.jsx";
import "./index.css"

function ListView() {
  const [foodCounts, setFoodCounts] = useState({});
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true); // Show popup initially
  const [username, setUsername] = useState(""); 

  // Submit username from the popup
  const handleUsernameSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    if (username) {
      setShowPopup(false); // Close popup when username is submitted
      console.log("Username:", username); // Handle the submitted username here

      // Make the API call to fetch the data using the username as a parameter
      fetchData(username); 
    } else {
      alert("Please enter a username!");
    }
  };

  // Fetch data from FastAPI after the username is submitted
  const fetchData = (user) => {
    fetch(`http://localhost:8000/get-food?username=${user}`)
      .then((response) => response.json())
      .then((json_response) => {
        const counts = {};

        json_response.data.forEach((item) => {
          counts[item["food"]] = item["count"];
        });

        setFoodCounts(counts);
      })
      .catch((error) => console.error("Error:", error));
  };

  // Handle the back navigation (when clicking "x")
  const handleClick = () => {
    navigate("/"); // go back to landing
  };

  return (
    <div>
      {/* Only show the popup if it's visible */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Enter your username</h2>
            <form onSubmit={handleUsernameSubmit} className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Render the main content only if the popup is not visible */}
      {!showPopup && (
        <>
          <App />
          <img src="src/imgs/paper.png" className="paper" alt="paper" />
          <div onClick={handleClick} className="x">
            <img src="src/imgs/x.png" alt="x" />
          </div>
          <div>
            <h3 className="title">{username ? username : "User"}'s Fridge</h3>
            {Object.keys(foodCounts).length > 0 ? (
              <ul>
                {Object.entries(foodCounts).map(([food, count]) => (
                  <li key={food} className="food-list">
                    {food} ({count})
                  </li>
                ))}
              </ul>
            ) : (
              <p style={
                {"font-family": "Just Me Again",
                  "position": "absolute",  
                  "color": "white", 
                  "font-size": "35px",
                  "left": "2%",
                  "top": "-25px"
                }}>Loading...</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ListView;
