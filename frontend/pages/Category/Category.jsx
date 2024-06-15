import React, { useState, useEffect, useLocation } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Category/Category.css";
import axios from "axios";

const Category = () => {
  const [data, setData] = useState(null);
  console.log(window.location.href);
  const pathname = window.location.href; // '/category/Tourism'

  // Split the pathname by '/'
  const segments = pathname.split("/");

  // Get the last segment
  const lastSegment = segments[segments.length - 1];

  console.log(lastSegment);
  // const [category, setCategory] = useState(null);
  // console.log(match);
  const url = `http://localhost:4000/api/categoriesGet?name=${lastSegment}`;
  useEffect(() => {
    axios.get(url).then(response => {
      setData(...response.data);
      console.log(response.data);
    });
  }, []);
  if (!data) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or any other loading indicator
  }

  return (
    <div className="article">
      <section className="article-header">
        <h1 className="article-title">{data.name}</h1>
        <div className="container">
          <img
            className="article-header-image"
            src={data.url}
            alt="Header Image"
          />
        </div>
        <p id="myid">{data.description}</p>
      </section>
      <section>
        <h2>Success Stories</h2>
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">mr. ABC</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              quis justo eget urna posuere euismod eget ac diam.
            </p>
            <a href="/success" className="card-link">
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Mr. XYZ</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              quis justo eget urna posuere euismod eget ac diam.
            </p>
            <Link to="/success" className="card-link">
              Read more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
