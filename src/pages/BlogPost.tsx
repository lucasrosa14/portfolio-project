import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="section-padding pt-32">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
            <p className="text-muted-foreground mb-8">O artigo que você procura não existe.</p>
            <Link to="/#blog" className="text-primary hover:underline inline-flex items-center gap-2">
              <ArrowLeft size={16} /> Voltar ao blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="section-padding pt-32">
        <article className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/#blog"
              className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 text-sm mb-8"
            >
              <ArrowLeft size={16} /> Voltar ao blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-primary/10 text-primary inline-flex items-center gap-1.5">
                <Tag size={12} /> {post.tag}
              </span>
              <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                <Clock size={12} /> {post.readTime}
              </span>
              <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                <Calendar size={12} /> {new Date(post.date).toLocaleDateString("pt-BR")}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">{post.title}</h1>
            <p className="text-lg text-muted-foreground mb-12 border-l-2 border-primary/50 pl-4">{post.excerpt}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert prose-emerald max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
              prose-pre:bg-card prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-table:border-collapse
              prose-th:border prose-th:border-border/50 prose-th:bg-card prose-th:px-4 prose-th:py-2 prose-th:text-foreground
              prose-td:border prose-td:border-border/50 prose-td:px-4 prose-td:py-2
              prose-blockquote:border-primary/50 prose-blockquote:text-muted-foreground
              prose-hr:border-border/50"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>

          {/* Navigation */}
          <div className="gradient-line mt-16 mb-8" />
          <nav className="flex flex-col sm:flex-row justify-between gap-4">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="glass-card p-4 flex-1 hover:border-primary/30 transition-all group"
              >
                <span className="text-xs text-muted-foreground">← Anterior</span>
                <p className="text-sm font-medium mt-1 group-hover:text-primary transition-colors">{prevPost.title}</p>
              </Link>
            ) : <div className="flex-1" />}
            {nextPost ? (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="glass-card p-4 flex-1 text-right hover:border-primary/30 transition-all group"
              >
                <span className="text-xs text-muted-foreground">Próximo →</span>
                <p className="text-sm font-medium mt-1 group-hover:text-primary transition-colors">{nextPost.title}</p>
              </Link>
            ) : <div className="flex-1" />}
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
