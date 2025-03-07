import React from "react";
import BlogsSection from "../components/blogs/BlogSection";
import BlogSubscription from "../components/BlogSubscription";
import Footer from "../components/Footer";
const blogPostsData = [
  {
    title: "Title",
    content:
      "Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here.",
    image: "/images/blog-image.jpg", // Replace with your actual image path
  },
  {
    title: "Title",
    content:
      "Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here.",
    image: "/images/blog-image.jpg", // Replace with your actual image path
  },
  {
    title: "Title",
    content:
      "Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here. Enter the content here.",
    image: "/images/blog-image.jpg", // Replace with your actual image path
  },
];
function Blogs() {
  return (
    <div>
      <BlogSubscription />
      <BlogsSection blogPosts={blogPostsData} />
      <Footer />
    </div>
  );
}

export default Blogs;
