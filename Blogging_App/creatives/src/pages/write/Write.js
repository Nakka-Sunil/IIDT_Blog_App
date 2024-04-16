import { useState } from 'react';
import axios from 'axios';
import "./write.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

export default function Write() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({}); // State for validation errors
  const [successMessage, setSuccessMessage] = useState(null); // State for success message

  const validateForm = () => {
    const newErrors = {};
    if (!title) {
      newErrors.title = 'Title is required';
    }
    if (!content) {
      newErrors.content = 'Content is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Don't proceed if validation fails
    }

    const newBlog = {
      title,
      content,
      image: image ? image : null, // Send the image object itself, not URL
    };

    try {
      const response = await axios.post('http://localhost:5000/api/blogs', newBlog);
      console.log(response.data); // Log response from backend

      // Upon successful post creation:
      setSuccessMessage('Post created successfully!'); // Set success message
      setTitle(''); // Clear form
      setContent('');
      setImage(null);
      // Redirect to Home page after a short delay (optional)
      setTimeout(() => navigate('/'), 3000); // Redirect after 2 seconds

    } catch (error) {
      console.error('Error publishing blog:', error);
      // Handle errors appropriately, e.g., display error message to user
    }
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <div className="error">{errors.title}</div>} {/* Display error message */}
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {errors.content && <div className="error">{errors.content}</div>} {/* Display error message */}
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        {successMessage && <p className="successMessage">{successMessage}</p>} {/* Display success message */}
      </form>
    </div>
  );
}
