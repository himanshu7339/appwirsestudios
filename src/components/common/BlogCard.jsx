import Image from "next/image";
import React from "react";
import Link from "next/link";

const BlogCard = ({ title, date, image, metaDescription, id }) => {
  return (
    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`}>
      <div className="max-w-sm bg-white shadow-sm rounded-lg overflow-hidden">
        <Image
          src={image}
          alt="Blog Featured Image"
          class="mb-3"
          width={400}
          height={500}
        />
        <div className="p-2">
        <p className="text-gray-500 text-sm mb-2">
            {new Date(date).toLocaleDateString("en-GB")}
          </p>
          <h3 className="lg:text-xl text- font-semibold text-gray-800">{title}</h3>
          
          <p className="text-gray-700 mt-3 text-sm">{metaDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
