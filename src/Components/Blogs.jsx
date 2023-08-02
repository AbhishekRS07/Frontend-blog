import React, { useEffect, useState } from "react";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getblogs = async () => {
    try {
      const response = await fetch("http://localhost:8080/blogs", {
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      console.log(data.blogs)
      setBlogs(data.blogs);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getblogs();
  }, []);

  return (
    <div>
    
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)," ,gap:"20px",padding:"20px"}}>
      {blogs.length === 0 ? (
        <p>Blog is empty create some new blogs</p>
      ) : (
        blogs.map((blog) => (
          <div style={{padding:"20px",backgroundColor:"lightgrey"}} key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>{blog.category}</p>
          </div>
        ))
      )}
    </div>
    </div>
  
  );
};

export default Blogs;
