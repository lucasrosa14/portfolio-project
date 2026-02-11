import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "Accredited Software Testing Fundamentals Certification",
    org: "AICS®",
    year: "2024",
    highlight: true,
  },
  {
    icon: GraduationCap,
    title: "Pós-Graduação em Administração de Banco de Dados",
    org: "Especialização",
    year: "2023",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Pós-Graduação em Engenharia de Software com Ênfase em Qualidade",
    org: "Especialização",
    year: "2022",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Bacharel em Ciência da Computação",
    org: "Graduação",
    year: "2016",
    highlight: false,
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificacoes" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Formação</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificações e Educação</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`glass-card p-6 flex gap-4 transition-all duration-300 ${
                cert.highlight ? "border-primary/30 glow-border" : "hover:border-primary/20"
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                cert.highlight ? "bg-primary/20" : "bg-secondary"
              }`}>
                <cert.icon size={22} className={cert.highlight ? "text-primary" : "text-muted-foreground"} />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">{cert.title}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{cert.org}</span>
                  <span>·</span>
                  <span className="font-mono">{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
