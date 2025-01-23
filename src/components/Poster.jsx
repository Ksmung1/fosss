import React, { useState } from 'react';
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Poster = () => {
  const [title, setTitle] = useState('Current Affairs - FOCUS');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  });
  const [message, setMessage] = useState('');


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post("https://focus-backend-xxar.onrender.com/focus/articles", {
        title,
        content,
        publishedAt: date,
      });

      if (response.status === 201) {
        setMessage('Post submitted successfully');
        setTitle('');
        setContent('');
      }
    } catch (error) {
      setMessage('Failed to submit post. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className='poster'>
      <h2>Create a new post</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Content:</label>
          <ReactQuill 
            value={content}
            onChange={setContent}
            modules={Poster.modules}
            formats={Poster.formats}
          />
        </div>
        <div>
          <label>Date:</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </div>
       
        <button type='submit'>Post</button>
      </form>
    </div>
  );
};

Poster.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ align: [] }],
    ['link', 'image'],
    ['clean'],
  ],
};

Poster.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'indent',
  'link', 'image', 'align'
];

export default Poster;
