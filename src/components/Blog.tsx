import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "O que é Partição de Equivalência e Valores Limite?",
    excerpt: "Entenda duas das técnicas mais fundamentais do design de testes e como aplicá-las no dia a dia.",
    tag: "Fundamentos",
    readTime: "5 min",
  },
  {
    title: "Por que automação não substitui testes exploratórios?",
    excerpt: "Automação é poderosa, mas não encontra o inesperado. Descubra o valor dos testes exploratórios.",
    tag: "Estratégia",
    readTime: "7 min",
  },
  {
    title: "Como estruturar um plano de testes eficiente?",
    excerpt: "Um bom plano de testes economiza tempo e protege entregas. Veja como criar o seu.",
    tag: "Planejamento",
    readTime: "6 min",
  },
  {
    title: "Boas práticas com Cypress",
    excerpt: "Dicas práticas para escrever testes mais confiáveis, rápidos e fáceis de manter com Cypress.",
    tag: "Automação",
    readTime: "8 min",
  },
  {
    title: "QA além dos testes: qualidade como cultura",
    excerpt: "Qualidade não é responsabilidade de uma pessoa. É uma mentalidade que permeia todo o time.",
    tag: "Cultura",
    readTime: "5 min",
  },
];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold">Conteúdos sobre Qualidade</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card p-6 flex flex-col hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary">
                  {post.tag}
                </span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                <BookOpen size={14} />
                Ler artigo
                <ArrowRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
