import { plainify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

// interface ArticleCardProps {
//   article: {frontmatter, content, mdxContent};
//   url: String
// }

const ArticleCard = (props) => {
  const { article, url } = props;

  return (
    <div className="min-h-0 w-full rounded-lg shadow-lg md:min-h-48">
      <div className="row items-center">
        <div className="col-12 md:col-4">
          <Image
            className="h-auto w-full rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={article.frontmatter.image}
            alt={article.frontmatter.title}
            width={400}
            height={0}
            priority={true}
          />
        </div>
        <div className="col-12 truncate px-6 py-4 md:col-8">
          <h2 className="h3 truncate text-primary">
            <Link href={url}>{article.frontmatter.title}</Link>
          </h2>
          <p className="mt-4 line-clamp-2 text-wrap text-text">
            {plainify(article.content)}
          </p>
          <Link href={url} className="btn btn-primary mt-4">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
