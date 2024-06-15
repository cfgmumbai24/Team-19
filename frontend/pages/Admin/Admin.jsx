import '../Admin/Admin.css';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Admin = () => {
  const ageCanvasRef = useRef(null);
  const genderCanvasRef = useRef(null);
  const locationCanvasRef = useRef(null);
  const educationCanvasRef = useRef(null);

  const mockData = {
    age: {
      labels: ['18-25', '26-35', '36-45', '46+'],
      values: [25, 35, 20, 10],
    },
    gender: {
      labels: ['Male', 'Female'],
      values: [60, 40],
    },
    location: {
      labels: ['City A', 'City B', 'City C'],
      values: [30, 40, 30],
    },
    education: {
      labels: ['High School', 'Bachelor', 'Master', 'PhD'],
      values: [15, 35, 30, 20],
    },
  };

  useEffect(() => {
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
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
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

    createChart(ageCanvasRef, mockData.age.labels, mockData.age.values, 'Age Distribution');
    createChart(genderCanvasRef, mockData.gender.labels, mockData.gender.values, 'Gender Distribution');
    createChart(locationCanvasRef, mockData.location.labels, mockData.location.values, 'Location Distribution');
    createChart(educationCanvasRef, mockData.education.labels, mockData.education.values, 'Education Distribution');

    // Clean up function to destroy the chart instances on component unmount
    return () => {
      if (ageCanvasRef.current.chart) {
        ageCanvasRef.current.chart.destroy();
      }
      if (genderCanvasRef.current.chart) {
        genderCanvasRef.current.chart.destroy();
      }
      if (locationCanvasRef.current.chart) {
        locationCanvasRef.current.chart.destroy();
      }
      if (educationCanvasRef.current.chart) {
        educationCanvasRef.current.chart.destroy();
      }
    };
  }, []);

  return (
    <div className="Admin">
      <h1>Analytics Dashboard</h1>
      <div className="chart-container">
        <div className="admin-chart">
          <h2>Age Distribution</h2>
          <canvas ref={ageCanvasRef}></canvas>
        </div>
        <div className="admin-chart">
          <h2>Gender Distribution</h2>
          <canvas ref={genderCanvasRef}></canvas>
        </div>
        <div className="admin-chart">
          <h2>Location Distribution</h2>
          <canvas ref={locationCanvasRef}></canvas>
        </div>
        <div className="admin-chart">
          <h2>Education Distribution</h2>
          <canvas ref={educationCanvasRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Admin;
