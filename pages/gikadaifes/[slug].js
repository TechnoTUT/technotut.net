import { getSinglePage } from "@lib/contentParser";
import { parseMDX } from "@lib/utils/mdxParser";
import config from "@config/config.json";
import PostSingle from "@layouts/PostSingle";

const { blog_folder } = config.settings;

// interface ArticleProps {
//   article: {frontmatter, slug, content};
//   mdxContent: any;
// }

const GikadaifesArticlePage = (props) => {
  const { article, mdxContent } = props;
  const { frontmatter, content } = article;

  return (
    <PostSingle
      frontmatter={frontmatter}
      content={content}
      mdxContent={mdxContent}
    />
  );
};

export default GikadaifesArticlePage;

export const getStaticPaths = () => {
  const articles = getSinglePage(`content/${blog_folder}`);
  const paths = articles.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const articles = getSinglePage(`content/${blog_folder}`);
  const article = articles.filter((item) => item.slug == slug);
  const mdxContent = await parseMDX(article[0].content);

  return {
    props: {
      article: article[0],
      mdxContent: mdxContent,
    },
  };
};
