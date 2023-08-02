import React, { useState } from "react";


const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/blogs/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ title, content, category }),
      });

      if (!response.ok) {
        throw new Error("Failed to create the blog");
      }

      // Assuming the response from the server contains the new blog object
      const newBlog = await response.json();
      console.log("New Blog:", newBlog);

      // Clear the form fields after successful submission
      setTitle("");
      setContent("");
      setCategory("");
      
    } catch (error) {
      console.error("Error creating the blog:", error);
    }
  };

  return (
    <div>
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            
          />
        </div>
        <button  type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
