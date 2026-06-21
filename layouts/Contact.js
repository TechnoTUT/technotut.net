import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "h2 mb-8 justyfy-center")}
        <div className="justify-center">
          <div>
            {markdownify(info.title, "h4", "text-white font-bold")}
            {markdownify(info.description, "p", "mt-4 text-gray-300")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index} className="text-gray-300">
                  {markdownify(contact, "strong", "text-white")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
