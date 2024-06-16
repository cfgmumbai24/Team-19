import '../Admin/Admin.css';
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import {NavLink} from "react-router-dom"

const Admin = () => {
  const ageCanvasRef = useRef(null);
  const genderCanvasRef = useRef(null);
  const stateCanvasRef = useRef(null); // Reference to the state distribution chart canvas

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/userPreference/getData');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      // Process data for age, gender, and state charts
      const ageData = {};
      const genderData = {};
      const stateData = {};

      data.forEach(item => {
        // Process age data
        const ageRange = getAgeRange(item.age);
        ageData[ageRange] = (ageData[ageRange] || 0) + 1;

        // Process gender data
        genderData[item.gender] = (genderData[item.gender] || 0) + 1;

        // Process state data
        stateData[item.state] = (stateData[item.state] || 0) + 1;
      });

      const ageLabels = Object.keys(ageData);
      const ageValues = Object.values(ageData);
      const genderLabels = Object.keys(genderData);
      const genderValues = Object.values(genderData);
      const stateLabels = Object.keys(stateData);
      const stateValues = Object.values(stateData);

      createChart(ageCanvasRef, ageLabels, ageValues, 'Age Distribution');
      createChart(genderCanvasRef, genderLabels, genderValues, 'Gender Distribution');
      createChart(stateCanvasRef, stateLabels, stateValues, 'State Distribution');
    }
  }, [data]);

  const getAgeRange = (age) => {
    if (age < 18) return 'Under 18';
    if (age < 25) return '18-24';
    if (age < 35) return '25-34';
    if (age < 45) return '35-44';
    return '45+';
  };

  const createChart = (canvasRef, labels, values, label) => {
    const ctx = canvasRef.current.getContext('2d');
    if (canvasRef.current.chart) {
      canvasRef.current.chart.destroy();
    }
    canvasRef.current.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        responsive: true,
        maintainAspectRatio: true,
      },
    });
  };

  // Clean up function to destroy the chart instances on component unmount
  useEffect(() => {
    return () => {
      if (ageCanvasRef.current?.chart) {
        ageCanvasRef.current.chart.destroy();
      }
      if (genderCanvasRef.current?.chart) {
        genderCanvasRef.current.chart.destroy();
      }
      if (stateCanvasRef.current?.chart) {
        stateCanvasRef.current.chart.destroy();
      }
    };
  }, []);

  return (
    <div className="Admin">
      
      <h1>Analytics Dashboard</h1>
      <div className="chart-container">
        <div className="admin-chart">
          <a href=""><h2>Age Distribution</h2></a>
          <a href="">download age distribution report</a>
          <canvas ref={ageCanvasRef}></canvas>
        </div>
        

        <div className="admin-chart">
          <a href=""><h2>Gender Distribution</h2></a>
          <a href="">download gender distribution report</a>
          <canvas ref={genderCanvasRef}></canvas>
        </div>
        <div className="admin-chart">
          <a href=""><h2>State Distribution</h2></a>
          <a href="">download state distribution report</a>
          <canvas ref={stateCanvasRef}></canvas>
        </div>
      </div>

      <button style={{
        height:"75px",
        width:"150px",

      }}>
        <NavLink to="/admin/mentor-requests">Request mentor stories</NavLink>
      </button>
    </div>
  );
};

export default Admin;
