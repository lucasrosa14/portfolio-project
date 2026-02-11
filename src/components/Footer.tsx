import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lucas Souza da Rosa. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          Feito com <Heart size={12} className="text-primary" /> e dedicação à qualidade
        </p>
      </div>
    </footer>
  );
};

export default Footer;
