import React, { useEffect, useState } from "react";
import "../Categories/Categories.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [data, setData] = useState(null);
  // const cards = [
  //   {
  //     id: 1,
  //     title: "Embroidery",
  //     imageUrl:
  //       "https://c02.purpledshub.com/uploads/sites/51/2022/02/baby-bonnet-daisy-embroidery-step6-e0b00d6.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Pottery",
  //     imageUrl:
  //       "https://media.licdn.com/dms/image/D5612AQHbW-hqHrW6Bg/article-cover_image-shrink_720_1280/0/1683280605300?e=2147483647&v=beta&t=vYHKJgTWSrIiTduyUvm5ALbjvlkJSfqpp6aZQtFnqP4",
  //   },
  //   {
  //     id: 3,
  //     title: "Stonecraft",
  //     imageUrl:
  //       "https://www.uttarakhandexplorer.in/wp-content/uploads/2023/10/my-website-images-for-blogs.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Tourism",
  //     imageUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAjH7QK7eVtNDfjbcz8Ru8NlQi-9JjMWr6g&s",
  //   },
  //   {
  //     id: 5,
  //     title: "Artisan",
  //     imageUrl:
  //       "https://cdn.pixabay.com/photo/2022/06/08/15/23/ceramics-7250708_1280.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "TrekKing",
  //     imageUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmz42fCuDOB_6qi0UfrlU8w3bZm9yoEKFyUQ&s",
  //   },
  //   {
  //     id: 6,
  //     title: "Agriculture",
  //     imageUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZJVb9-Sfv1tWP0caOz2cjuniCcGajVrdfw&s",
  //   },
  //   {
  //     id: 6,
  //     title: "Handcraft",
  //     imageUrl:
  //       "https://authindia-com-assets-offload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/01/01001353/HANDMADE1.jpeg",
  //   },
  // ];
  useEffect(() => {
    axios.get("http://localhost:4000/api/allCategories").then(response => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div className="card-grid">
        {data &&
          data.map(val => (
            <Link to={`/category/${val.name}`}>
              <div key={val.id} className="card">
                <img src={val.url} alt={val.name} className="responsive" />
                <h3>{val.name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Categories;
