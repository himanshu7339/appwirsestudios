import { databases, storage } from "@/app/appwrite";
import BlogCard from "@/components/common/BlogCard";
import { Query } from "appwrite";
import Image from "next/image";


export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const {id} = params
 
  // fetch data
  // get post details using id
  const result = await databases.getDocument(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, // databaseId
    process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID, // collectionId
    id, // documentId
    //[] queries (optional)
  );
 
 
  return {
    title: result.title,
    description:result.metaDescription
  }
}

const Blog = async ({ params }) => {
  const { id } = params;

  // get post details using id
  const result = await databases.getDocument(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, // databaseId
    process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID, // collectionId
    id, // documentId
    //[] queries (optional)
  );

  // Recent 5 blogs posts

  const {documents:RecentFiveBlogs} = await databases.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,         // Your Database ID
    process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID,        // Your Collection ID
    [
      Query.orderDesc('$createdAt'),
  ]
);

  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 mt-6">
          <p className="text-black-600 mb-3 text-sm lg:text-xl">
            Published on{" "}
            {new Date(result.$createdAt).toLocaleDateString("en-GB")}
          </p>
          <h1 className="lg:text-4xl max-w-screen-lg font-bold text-gray-800 mb-2">
            {result.title}
          </h1>
        </div>
      </div>
      <div className="bg-white pb-8 lg:py-8">
        <div className="container mx-auto px-1 flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 px-4">
            <Image
              src={result.image}
              alt="Blog Featured Image"
              className="mb-8"
              width={1090}
              height={500}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: result.content,
              }}
              className="prose max-w-none space-y-3"
            ></div>
          </div>
          <div className="w-full md:w-1/4 px-4 ">
            <div className="sticky top-0">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h2>
              <div className="list-none">

              {RecentFiveBlogs.map((blog, index) => (
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
            <div className="bg-gray-100 p-4 mt-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Category 1
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Category 2
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Category 3
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Category 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
