import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ScoreData.css";

const ScoreData = () => {
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5015/info")
      .then((response) => {
        setScoreData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Score Data</h2>
      <table>
        <thead>
          <tr>
            <th>Player1 Name</th>
            <th>Player2 Name</th>
            <th>Player1 Result</th>
            <th>Player2 Result</th>
          </tr>
        </thead>
        <tbody>
          {scoreData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.user1name}</td>
                <td>{data.user2name}</td>
                <td>{data.user1result}</td>
                <td>{data.user2result}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreData;
