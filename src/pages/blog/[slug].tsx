import { useParams } from "react-router-dom";
import { getPostBySlug } from "@/lib/posts";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";

const BlogPost = () => {
  const { slug } = useParams();
  const [postContent, setPostContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const { data, content } = getPostBySlug(slug || "");
    remark()
      .use(html)
      .process(content)
      .then((file) => {
        setPostContent(String(file));
        setTitle(data.title);
      });
  }, [slug]);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: postContent }}
      />
    </div>
  );
};

export default BlogPost;
