import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Trier Sistemas",
    role: "Analista de Testes / QA",
    period: "2025 – Atual",
    current: true,
    highlights: [
      "Definição e execução de estratégias de teste end-to-end",
      "Automação de testes com Cypress e TypeScript",
      "Implementação de pipelines CI/CD com Jenkins",
    ],
  },
  {
    company: "WMW Systems",
    role: "Analista de QA",
    period: "2021 – 2025",
    current: false,
    highlights: [
      "Redução de 40% no tempo de regressão com automação",
      "Automação com Selenium e JUnit em sistemas B2B",
      "Testes de usabilidade e performance em aplicações lawtech",
      "Melhoria contínua de processos de qualidade",
    ],
  },
  {
    company: "Suporte Nível 3",
    role: "Analista de Suporte Técnico",
    period: "Experiência consolidada",
    current: false,
    highlights: [
      "Análise e resolução de problemas complexos em produção",
      "Investigação de bugs com acesso direto a bancos de dados",
      "Atendimento a demandas críticas com SLA rigoroso",
    ],
  },
  {
    company: "Migração de Dados",
    role: "Especialista em Migração",
    period: "Experiência consolidada",
    current: false,
    highlights: [
      "Migração de dados entre sistemas legados e modernos",
      "Validação automatizada de integridade de dados",
      "Uso de SQL avançado em PostgreSQL, MySQL e Oracle",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Experiência</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trajetória Profissional</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="relative pl-12 md:pl-20"
              >
                {/* Dot */}
                <div className={`absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full border-2 ${
                  exp.current ? "bg-primary border-primary glow-border" : "bg-secondary border-border"
                }`} />

                <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-primary" />
                      <h3 className="font-semibold text-lg">{exp.company}</h3>
                    </div>
                    {exp.current && (
                      <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded-full w-fit">
                        Atual
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{exp.role}</p>
                  <p className="text-muted-foreground text-xs font-mono mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
