import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Layers, Zap, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Target, title: "Visão Analítica", desc: "Identificação precisa de riscos e gaps em cada fase do desenvolvimento." },
  { icon: Layers, title: "Atuação End-to-End", desc: "Do planejamento à automação, cobrindo todo o ciclo de qualidade." },
  { icon: Zap, title: "Automação Estratégica", desc: "Frameworks robustos com Cypress, Selenium e Playwright." },
  { icon: TrendingUp, title: "Melhoria Contínua", desc: "Processos que evoluem e escalam com o time e o produto." },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Sobre Mim</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Lucas Souza da Rosa</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Especialista em Quality Assurance com mais de 9 anos de experiência em testes manuais e automatizados,
            migração de dados e suporte técnico nível 3. Atuei em domínios como sistemas B2B, lawtech,
            força de vendas e sistemas para farmácias, sempre com foco em reduzir retrabalho, aumentar
            a confiabilidade das entregas e construir uma cultura de qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Career timeline summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: "9+", label: "Anos de experiência" },
            { value: "2", label: "Pós-graduações" },
            { value: "5+", label: "Domínios de negócio" },
            { value: "1", label: "Certificação AICS®" },
          ].map((stat) => (
            <div key={stat.label} className="min-w-[140px]">
              <p className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
