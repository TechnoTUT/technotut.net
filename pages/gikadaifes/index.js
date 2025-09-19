import Base from "@layouts/Baseof";
import { getSinglePage } from "@lib/contentParser";
import config from "@config/config.json";
import ArticleCard from "components/sections/gikadaifes/ArticleCard";

const { blog_folder } = config.settings;

// interface KigadaifesListPageProps {
//   articles: List<{frontmatter, slug, content}>;
// }

const GikadaifesArticleListPage = (props) => {
  const { articles } = props;
  const title = "技科大祭特設ページ一覧";

  return (
    <Base title={title}>
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-normal">技科大祭特設ページ一覧</h1>
          </div>
          <div className="my-4 space-y-8">
            {articles.map((article, i) => (
              <div className="" key={i}>
                <ArticleCard
                  article={article}
                  url={`/${blog_folder}/${article.slug}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Base>
  );
};

export default GikadaifesArticleListPage;

export const getStaticProps = () => {
  const articles = getSinglePage(`content/${blog_folder}`).sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );

  return {
    props: {
      articles: articles,
    },
  };
};
