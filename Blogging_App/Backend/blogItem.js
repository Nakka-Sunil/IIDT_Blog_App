const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogItemSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String }, 
});

const BlogItem = mongoose.model('BlogItem', blogItemSchema);

module.exports = BlogItem;
