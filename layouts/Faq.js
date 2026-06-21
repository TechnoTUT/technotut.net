import { markdownify } from "@lib/utils/textConverter";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "h2 mb-8 justyfy-center")}
        <div className="section row  -mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <div className="p-8 md:p-12 bg-black/40 border border-white/10 rounded-2xl shadow-xl backdrop-blur-sm">
                <div className="faq-head relative">
                  {markdownify(faq.title, "h4", "text-white font-bold")}
                </div>
                {markdownify(faq.answer, "p", "faq-body mt-4 text-gray-300")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
