import { getAllPosts } from "@/lib/posts";
import { Link } from "react-router-dom";

const BlogList = () => {
  const posts = getAllPosts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
