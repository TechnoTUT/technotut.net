import { markdownify } from "@lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "./shortcodes/all";

const Default = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "h2 mb-8 justyfy-center")}
        <div className="content justify-center">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>
      </div>
    </section>
  );
};

export default Default;
