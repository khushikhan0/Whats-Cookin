import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import App from "./components/App.jsx";

function ListView() {
  const [foodCounts, setFoodCounts] = useState({});

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // go back to landing
  };

  useEffect(() => {
    // Fetch data from FastAPI backend, rn we testing with user 1
    fetch("http://localhost:8000/get-food?id_=1")
      .then((response) => response.json())
      .then((json_response) => {
        const counts = {};

        json_response.data.forEach((item) => {
          counts[item["food"]] = item["count"];
        });

        setFoodCounts(counts);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <App />
      <img src="src/imgs/paper.png" className="paper" />
      <div onClick={handleClick} className="x">
        <img src="src/imgs/x.png"  />
      </div>
      <div>
        {Object.keys(foodCounts).length > 0 ? (
          <ul>
            {Object.entries(foodCounts).map(([food, count]) => (
              <li key={food} className="food-list">
                {food} ({count})
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ListView;
