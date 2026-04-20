import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BrainCircuit,
  BriefcaseBusiness,
  Database,
  FolderGit2,
  LineChart,
  Mail,
  Radar,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";

type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  impact: string[];
  href: string;
};

type CertificateTrack = {
  title: string;
  issuer: string;
  summary: string;
  focus: string[];
};

type Service = {
  icon: typeof ServerCog;
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "AuditService.API",
    tag: "Observabilidade",
    description:
      "API orientada a auditoria centralizada, rastreabilidade e leitura operacional de eventos entre sistemas.",
    stack: ["C#", ".NET", "Logs", "SQL"],
    impact: [
      "Centraliza eventos com contexto",
      "Fortalece rastreabilidade entre fluxos",
      "Reforca seu posicionamento back-end",
    ],
    href: "https://github.com/Tognolli0/AuditService.API",
  },
  {
    title: "FormularioSetec",
    tag: "Fluxo real",
    description:
      "Sistema para logistica de viagens com API em ASP.NET Core, persistencia e interface conectada ao processo.",
    stack: ["ASP.NET Core", "React", "PostgreSQL"],
    impact: [
      "Mostra caso de uso real",
      "Conecta API, dados e interface",
      "Passa imagem de entrega completa",
    ],
    href: "https://github.com/Tognolli0/FormularioSetec",
  },
  {
    title: "Dashboard Gestao Casal React",
    tag: "Produto",
    description:
      "Aplicacao com dashboard, OCR e arquitetura full stack usada para mostrar criterio de produto e estrutura evolutiva.",
    stack: ["React", "ASP.NET Core", "OCR"],
    impact: [
      "Mistura produto e engenharia",
      "Adiciona OCR ao repertorio",
      "Prende pela leitura visual",
    ],
    href: "https://github.com/Tognolli0/Dashboard_Gestao_Casal_React",
  },
  {
    title: "Dashboard Interativo",
    tag: "Visualizacao",
    description:
      "Dashboard em Blazor Server com indicadores, leitura visual e base para integracao corporativa.",
    stack: ["Blazor", ".NET", "Dashboards"],
    impact: [
      "Mostra variedade sem perder foco",
      "Reforca leitura de indicadores",
      "Aumenta o apelo visual do portfolio",
    ],
    href: "https://github.com/Tognolli0/Dashboard_Interativo",
  },
];

const certificateTracks: CertificateTrack[] = [
  {
    title: "Back-end e APIs",
    issuer: "Bradesco + Bootcamp CI&T",
    summary:
      "C#, Java, Swagger, excecoes, orientacao a objetos e fundamentos para servicos e APIs.",
    focus: ["C#", "Java", "Swagger", "OOP"],
  },
  {
    title: "Dados e persistencia",
    issuer: "IFRS + Bradesco + AWS",
    summary:
      "Banco de dados, administracao, armazenamento, SQL e estrutura de persistencia aplicada.",
    focus: ["SQL", "Persistencia", "Administracao", "Armazenamento"],
  },
  {
    title: "Cloud e infraestrutura",
    issuer: "AWS + SENAI",
    summary:
      "Fundamentos de nuvem, redes, seguranca, monitoramento e base de infraestrutura para software moderno.",
    focus: ["Cloud", "Redes", "Seguranca", "Monitoramento"],
  },
  {
    title: "Amplitude complementar",
    issuer: "FIAP + SENAI + Udemy",
    summary:
      "HTML, JavaScript, Python, blockchain, LGPD, data science e outras trilhas como repertorio tecnico.",
    focus: ["JavaScript", "Python", "Blockchain", "LGPD"],
  },
];

const services: Service[] = [
  {
    icon: ServerCog,
    title: "Desenho de APIs e regras de negocio",
    description:
      "Traduzo fluxo real em contrato claro, persistencia confiavel e estrutura que aguenta manutencao.",
  },
  {
    icon: ShieldCheck,
    title: "Observabilidade e rastreabilidade",
    description:
      "Penso em logs, auditoria, leitura operacional e confianca do sistema desde o inicio.",
  },
  {
    icon: Workflow,
    title: "Integração entre camadas e produto",
    description:
      "Mesmo com foco em back-end, organizo a solucao para conversar bem com interface e processo.",
  },
];

const stackGroups = [
  {
    icon: BrainCircuit,
    title: "Core back-end",
    items: ["C#", ".NET", "ASP.NET Core", "Dapper", "Entity Framework"],
  },
  {
    icon: Database,
    title: "Dados e persistencia",
    items: ["SQL Server", "PostgreSQL", "SQLite", "Modelagem", "Auditoria"],
  },
  {
    icon: Blocks,
    title: "Camada de produto",
    items: ["React", "Blazor", "Vite", "OCR", "Dashboards"],
  },
];

const timeline = [
  {
    title: "Posicionamento",
    body: "Backend engineer com foco em APIs, SQL, integracoes e consistencia tecnica.",
  },
  {
    title: "Entrega",
    body: "Repositorios curados, projetos com contexto real e leitura bem mais profissional.",
  },
  {
    title: "Formacao",
    body: "Base continua em cloud, dados, C#, Java, web e fundamentos de software.",
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [selectedTrack, setSelectedTrack] = useState(certificateTracks[0]);

  const currentProjectIndex = useMemo(
    () => projects.findIndex((item) => item.title === selectedProject.title) + 1,
    [selectedProject.title]
  );

  return (
    <div className="app-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <div className="grid-overlay" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-badge">DT</span>
          <div>
            <strong>Diogo Tognolli</strong>
            <span>Backend Engineer</span>
          </div>
        </div>

        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Como ajudo</a>
          <a href="#projetos">Projetos</a>
          <a href="#stack">Stack</a>
          <a href="#certificacoes">Certificacoes</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="section-kicker">Portfolio profissional</span>
            <p className="hero-intro">backend engineer · c# · .net · sql · integracoes</p>
            <h1>
              Software com leitura forte, arquitetura clara e
              <span> presenca visual de verdade.</span>
            </h1>
            <p className="hero-text">
              Aqui o objetivo nao e parecer apenas bonito. O site foi
              reconstruido para comunicar valor tecnico mais cedo, prender mais
              o leitor e deixar muito claro onde voce gera impacto como
              desenvolvedor back-end.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Explorar projetos
              </a>
              <a className="button button-secondary" href="#contato">
                Entrar em contato
              </a>
            </div>

            <div className="hero-marquee">
              <div className="hero-marquee-track">
                <span>APIs REST</span>
                <span>ASP.NET Core</span>
                <span>SQL e persistencia</span>
                <span>Auditoria</span>
                <span>Integracoes</span>
                <span>Back-end</span>
                <span>Observabilidade</span>
                <span>Dashboards</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <article className="code-card">
              <div className="code-card-top">
                <span className="status-dot" />
                <span>engineering.signal.ts</span>
              </div>
              <pre>
                <code>{`const backendProfile = {
  focus: ["APIs", "SQL", "integracoes"],
  style: "arquitetura pragmatica",
  priority: "clareza + manutencao",
  portfolio: "prova visual + prova tecnica"
};`}</code>
              </pre>
            </article>

            <div className="hero-metrics">
              <article>
                <strong>5</strong>
                <span>repositorios principais curados</span>
              </article>
              <article>
                <strong>70+</strong>
                <span>certificados mapeados</span>
              </article>
              <article>
                <strong>21</strong>
                <span>modulos no bootcamp Java + AWS</span>
              </article>
            </div>
          </div>
        </section>

        <section className="content-grid" id="sobre">
          <div className="section-heading">
            <span className="section-kicker">Leitura inicial</span>
            <h2>Primeiro prende pelo visual. Depois segura pela estrutura.</h2>
          </div>

          <div className="signal-layout">
            <article className="about-spotlight">
              <span className="card-label">Posicionamento</span>
              <h3>Back-end com foco em engenharia, contexto e manutencao.</h3>
              <p>
                O portfolio foi organizado para te vender como alguem que pensa
                em APIs, dados, rastreabilidade, integracao e criterio de
                produto, em vez de parecer so mais um site pessoal genérico.
              </p>
            </article>

            <div className="signal-cards">
              <article className="feature-card">
                <Radar size={22} />
                <h3>Visao de sistema</h3>
                <p>Leitura de regra, operacao e manutencao desde o desenho da solucao.</p>
              </article>
              <article className="feature-card">
                <LineChart size={22} />
                <h3>Prova de valor</h3>
                <p>Projetos e formacao organizados para passar mais confianca cedo.</p>
              </article>
              <article className="feature-card">
                <BriefcaseBusiness size={22} />
                <h3>Perfil profissional</h3>
                <p>Mais orientado a recrutador, cliente e leitura de mercado do que antes.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-grid" id="servicos">
          <div className="section-heading">
            <span className="section-kicker">Como eu ajudo</span>
            <h2>Inspirado nos melhores portfolios: menos vitrine passiva, mais clareza de oferta.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.title} className="service-card">
                  <div className="service-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="content-grid" id="projetos">
          <div className="section-heading">
            <span className="section-kicker">Projeto em destaque</span>
            <h2>Um explorador interativo para o leitor navegar pelos melhores projetos.</h2>
          </div>

          <div className="project-lab">
            <div className="project-switcher">
              {projects.map((project) => (
                <button
                  key={project.title}
                  type="button"
                  className={
                    project.title === selectedProject.title
                      ? "project-tab active"
                      : "project-tab"
                  }
                  onClick={() => setSelectedProject(project)}
                >
                  <span>{project.tag}</span>
                  <strong>{project.title}</strong>
                </button>
              ))}
            </div>

            <article className="project-preview">
              <div className="project-top">
                <div className="project-top-left">
                  <span className="project-tag">{selectedProject.tag}</span>
                  <strong>Projeto 0{currentProjectIndex}</strong>
                </div>
                <a href={selectedProject.href} target="_blank" rel="noreferrer">
                  Abrir no GitHub <ArrowRight size={16} />
                </a>
              </div>

              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>

              <div className="preview-grid">
                <div>
                  <span className="mini-heading">Stack</span>
                  <ul className="stack-list">
                    {selectedProject.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="mini-heading">Por que ele prende</span>
                  <ul className="impact-list">
                    {selectedProject.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="content-grid" id="stack">
          <div className="section-heading">
            <span className="section-kicker">Stack</span>
            <h2>As linguagens e tecnologias entram como parte da identidade visual.</h2>
          </div>

          <div className="stack-matrix">
            {stackGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article key={group.title} className="stack-card">
                  <div className="stack-card-top">
                    <div className="service-icon compact">
                      <Icon size={20} />
                    </div>
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="content-grid" id="certificacoes">
          <div className="section-heading">
            <span className="section-kicker">Formacao tecnica</span>
            <h2>Certificados organizados em trilhas com navegação mais viva.</h2>
          </div>

          <div className="education-panel">
            <div className="education-tabs">
              {certificateTracks.map((track) => (
                <button
                  key={track.title}
                  type="button"
                  className={
                    track.title === selectedTrack.title
                      ? "education-tab active"
                      : "education-tab"
                  }
                  onClick={() => setSelectedTrack(track)}
                >
                  <span>{track.issuer}</span>
                  <strong>{track.title}</strong>
                </button>
              ))}
            </div>

            <article className="education-preview">
              <div className="education-preview-top">
                <span className="card-label">{selectedTrack.issuer}</span>
                <BadgeCheck size={20} />
              </div>
              <h3>{selectedTrack.title}</h3>
              <p>{selectedTrack.summary}</p>
              <ul className="focus-list">
                {selectedTrack.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="content-grid timeline-section">
          <div className="section-heading">
            <span className="section-kicker">Leitura rapida</span>
            <h2>Em menos de um minuto o visitante precisa entender tres coisas.</h2>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <article key={item.title} className="timeline-item">
                <span className="timeline-step">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contato">
          <div>
            <span className="section-kicker">Contato</span>
            <h2>Se a ideia e construir software confiavel, aqui esta a porta de entrada.</h2>
            <p>
              O portfolio agora faz melhor o papel de atrair. O proximo passo e
              facilitar a conversa.
            </p>
          </div>

          <div className="contact-links">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/diogotognolli"
              target="_blank"
              rel="noreferrer"
            >
              <BriefcaseBusiness size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              className="contact-link"
              href="https://github.com/Tognolli0"
              target="_blank"
              rel="noreferrer"
            >
              <FolderGit2 size={18} />
              <span>GitHub</span>
            </a>
            <a className="contact-link" href="mailto:diogotognolli@gmail.com">
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a
              className="contact-link"
              href="https://github.com/Tognolli0"
              target="_blank"
              rel="noreferrer"
            >
              <FolderGit2 size={18} />
              <span>Repositorios</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
