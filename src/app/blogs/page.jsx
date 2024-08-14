import React from "react";
import BlogCard from "@/components/common/BlogCard";
import { databases, storage, } from "../appwrite";

const Blogs = async () => {
  // get post details using id
  const {documents:blogs} = await databases.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, // databaseId
    process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID, // collectionId
    [] // queries (optional)
  );
  

  //   // get blog image
  //   const image = await storage.getFileView(
  //     '66b99399001591216885', // bucketId
  //     '66b993c6001a46d0a6ad' // fileId
  // );
  // console.log(image.href)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="lg:text-4xl font-semibold mt-6 lg:mt-0 text-gray-800 mb-8">
        Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            date={blog.$createdAt}
            image={blog.image}
            metaDescription={blog.metaDescription}
            id={blog.$id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

export default Blogs