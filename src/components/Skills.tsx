import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Testes e Automação",
    skills: [
      { name: "Cypress", level: 95 },
      { name: "Selenium", level: 90 },
      { name: "Playwright", level: 80 },
      { name: "Testes E2E", level: 95 },
      { name: "Testes de Regressão", level: 95 },
      { name: "Testes Exploratórios", level: 90 },
    ],
  },
  {
    title: "Linguagens",
    skills: [
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "SQL", level: 90 },
      { name: "Python", level: 60 },
    ],
  },
  {
    title: "Bancos de Dados",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Oracle", level: 80 },
      { name: "SQL Server", level: 80 },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git", level: 90 },
      { name: "Jenkins", level: 85 },
      { name: "Postman", level: 90 },
      { name: "JUnit", level: 85 },
      { name: "Cucumber / BDD", level: 85 },
    ],
  },
  {
    title: "Metodologias",
    skills: [
      { name: "Scrum / Agile", level: 90 },
      { name: "BDD", level: 85 },
      { name: "CI/CD", level: 85 },
      { name: "Migração de Dados", level: 90 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Habilidades</p>
          <h2 className="text-3xl md:text-4xl font-bold">Competências Técnicas</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * ci }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold text-lg mb-5 text-primary">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: "linear-gradient(90deg, hsl(162 95% 45%), hsl(190 90% 50%))",
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + 0.05 * ci }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
