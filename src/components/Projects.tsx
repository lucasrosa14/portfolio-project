import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Framework de Automação com Cypress + TS",
    description: "Framework end-to-end para automação de testes em aplicações web complexas.",
    tech: ["Cypress", "TypeScript", "Page Objects", "CI/CD"],
    problem: "Testes manuais lentos e inconsistentes em cada sprint.",
    result: "Redução de 60% no tempo de regressão e maior confiabilidade nas entregas.",
  },
  {
    title: "Automação com Selenium + JUnit",
    description: "Suite de testes automatizados para sistemas B2B com fluxos complexos de negócio.",
    tech: ["Selenium", "Java", "JUnit", "Maven"],
    problem: "Retrabalho constante por falta de cobertura automatizada.",
    result: "Aumento de 80% na cobertura de testes e redução significativa de bugs em produção.",
  },
  {
    title: "Pipeline CI/CD com Jenkins",
    description: "Integração contínua com execução automatizada de testes a cada commit.",
    tech: ["Jenkins", "Git", "Docker", "Shell Script"],
    problem: "Ausência de validação automatizada no pipeline de deploy.",
    result: "Feedback imediato de qualidade no fluxo de desenvolvimento.",
  },
  {
    title: "Migração de Dados com Validação Automatizada",
    description: "Processo de migração de dados entre sistemas legados com validação automatizada de integridade.",
    tech: ["PostgreSQL", "Python", "SQL", "Shell Script"],
    problem: "Risco de perda e inconsistência de dados durante migração.",
    result: "100% de integridade garantida com validação automatizada pós-migração.",
  },
  {
    title: "Estrutura BDD com Cucumber",
    description: "Implementação de BDD para alinhar cenários de negócio com testes automatizados.",
    tech: ["Cucumber", "Gherkin", "Java", "Selenium"],
    problem: "Desalinhamento entre regras de negócio e cobertura de testes.",
    result: "Cenários claros e rastreáveis, reduzindo ambiguidades e melhorando comunicação.",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Projetos</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projetos em Destaque</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card p-6 flex flex-col hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto space-y-3 pt-4 border-t border-border/50">
                <div className="flex items-start gap-2">
                  <ExternalLink size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                  <p className="text-xs text-muted-foreground"><strong>Problema:</strong> {project.problem}</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-xs text-muted-foreground"><strong className="text-primary">Resultado:</strong> {project.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
