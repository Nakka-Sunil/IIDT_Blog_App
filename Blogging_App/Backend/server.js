const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer'); 
const dotenv = require('dotenv');

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000;

const connectionString = `mongodb+srv://nakkasunilvemucse:creative21@cluster0.zerzgkk.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); 
  },
});

const upload = multer({ storage });

app.post('/api/blogs', upload.single('image'), async (req, res) => {
  try {
    const { title, content } = req.body;
    const image = req.file ? req.file.path : null; 
    if (!title || !content) {
      return res.status(400).json({ message: 'Missing required fields: title and content' });
    }

    const newBlogPost = new BlogPost({ title, content, image });
    await newBlogPost.save();

    res.status(201).json({ message: 'Blog post created successfully', data: newBlogPost });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ message: 'Error: Failed to create blog post' });
  }
});

const BlogPost = require('./pages/Write');

app.listen(port, () => console.log(`Server listening on port ${port}`));
