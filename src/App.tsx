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
import profileImage from "./assets/diogo-profile.jfif";

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
      "API voltada à auditoria centralizada, rastreabilidade de eventos e leitura operacional entre diferentes sistemas.",
    stack: ["C#", ".NET", "Logs", "SQL"],
    impact: [
      "Centraliza eventos com contexto de negócio",
      "Fortalece a rastreabilidade entre fluxos críticos",
      "Reforça seu posicionamento em back-end",
    ],
    href: "https://github.com/Tognolli0/AuditService.API",
  },
  {
    title: "FormularioSetec",
    tag: "Caso real",
    description:
      "Sistema para logística de viagens com API em ASP.NET Core, persistência estruturada e interface conectada ao processo.",
    stack: ["ASP.NET Core", "React", "PostgreSQL"],
    impact: [
      "Apresenta um cenário de uso concreto",
      "Conecta API, dados e interface com clareza",
      "Passa imagem de entrega completa e consistente",
    ],
    href: "https://github.com/Tognolli0/FormularioSetec",
  },
  {
    title: "Dashboard Gestão Casal React",
    tag: "Produto",
    description:
      "Aplicação com dashboard, OCR e arquitetura full stack pensada para demonstrar visão de produto e evolução técnica.",
    stack: ["React", "ASP.NET Core", "OCR"],
    impact: [
      "Une produto e engenharia em uma mesma entrega",
      "Adiciona OCR como diferencial técnico",
      "Amplia o apelo visual e funcional do portfólio",
    ],
    href: "https://github.com/Tognolli0/Dashboard_Gestao_Casal_React",
  },
  {
    title: "Dashboard Interativo",
    tag: "Visualização",
    description:
      "Dashboard em Blazor Server com indicadores, leitura visual clara e base para integração em contexto corporativo.",
    stack: ["Blazor", ".NET", "Dashboards"],
    impact: [
      "Mostra variedade sem perder o foco principal",
      "Evidencia capacidade de leitura de indicadores",
      "Torna o portfólio mais completo e estratégico",
    ],
    href: "https://github.com/Tognolli0/Dashboard_Interativo",
  },
];

const certificateTracks: CertificateTrack[] = [
  {
    title: "Back-end e APIs",
    issuer: "Bradesco + Bootcamp CI&T",
    summary:
      "Formação em C#, Java, Swagger, tratamento de exceções, orientação a objetos e fundamentos para serviços e APIs.",
    focus: ["C#", "Java", "Swagger", "OOP"],
  },
  {
    title: "Dados e persistência",
    issuer: "IFRS + Bradesco + AWS",
    summary:
      "Base em banco de dados, administração, armazenamento, SQL e estruturação de persistência aplicada.",
    focus: ["SQL", "Persistência", "Administração", "Armazenamento"],
  },
  {
    title: "Cloud e infraestrutura",
    issuer: "AWS + SENAI",
    summary:
      "Fundamentos de nuvem, redes, segurança, monitoramento e infraestrutura para software moderno.",
    focus: ["Cloud", "Redes", "Segurança", "Monitoramento"],
  },
  {
    title: "Formação complementar",
    issuer: "FIAP + SENAI + Udemy",
    summary:
      "Trilhas em JavaScript, Python, blockchain, LGPD e outras frentes que ampliam repertório técnico e visão de mercado.",
    focus: ["JavaScript", "Python", "Blockchain", "LGPD"],
  },
];

const services: Service[] = [
  {
    icon: ServerCog,
    title: "Desenho de APIs e regras de negócio",
    description:
      "Transformo necessidades reais em contratos claros, persistência confiável e estruturas prontas para manutenção e evolução.",
  },
  {
    icon: ShieldCheck,
    title: "Observabilidade e rastreabilidade",
    description:
      "Penso em logs, auditoria e leitura operacional desde o início para aumentar previsibilidade e confiança no sistema.",
  },
  {
    icon: Workflow,
    title: "Integração entre camadas e produto",
    description:
      "Mesmo com foco em back-end, estruturo a solução para conversar bem com interface, processo e objetivos de negócio.",
  },
];

const stackGroups = [
  {
    icon: BrainCircuit,
    title: "Núcleo back-end",
    items: ["C#", ".NET", "ASP.NET Core", "Dapper", "Entity Framework"],
  },
  {
    icon: Database,
    title: "Dados e persistência",
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
    body: "Desenvolvedor back-end com foco em APIs, SQL, integrações e consistência técnica.",
  },
  {
    title: "Entrega",
    body: "Projetos curados para demonstrar aplicação prática, organização e qualidade de construção.",
  },
  {
    title: "Formação",
    body: "Evolução contínua em cloud, dados, C#, Java, web e fundamentos sólidos de software.",
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
          <img
            className="brand-avatar"
            src={profileImage}
            alt="Foto de Diogo Tognolli"
          />
          <div>
            <strong>Diogo Tognolli</strong>
            <span>Desenvolvedor Back-end</span>
          </div>
        </div>

        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Como ajudo</a>
          <a href="#projetos">Projetos</a>
          <a href="#stack">Stack</a>
          <a href="#certificacoes">Certificações</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="section-kicker">Portfólio profissional</span>
            <p className="hero-intro">desenvolvedor back-end · c# · .net · sql · integrações</p>
            <h1>
              Engenharia back-end com{" "}
              <span>foco em solidez técnica</span> e entrega real.
            </h1>
            <p className="hero-text">
              Este portfólio foi estruturado para apresentar, com clareza, minha
              capacidade de projetar APIs, integrar sistemas, trabalhar com dados
              e construir software com base técnica consistente.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Explorar projetos
              </a>
              <a className="button button-secondary" href="#contato">
                Entrar em contato
              </a>
            </div>

            <div className="hero-points">
              <article>
                <span className="mini-heading">Foco</span>
                <strong>Back-end, APIs, integrações e persistência</strong>
              </article>
              <article>
                <span className="mini-heading">Direção</span>
                <strong>Leitura profissional para recrutadores e clientes</strong>
              </article>
            </div>

            <div className="hero-marquee">
              <div className="hero-marquee-track">
                <span>APIs REST</span>
                <span>ASP.NET Core</span>
                <span>SQL e persistência</span>
                <span>Auditoria</span>
                <span>Integrações</span>
                <span>Back-end</span>
                <span>Observabilidade</span>
                <span>Dashboards</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <article className="profile-card">
              <div className="profile-frame">
                <img
                  className="profile-photo"
                  src={profileImage}
                  alt="Foto de Diogo Tognolli"
                />
                <div className="profile-ring profile-ring-one" />
                <div className="profile-ring profile-ring-two" />
              </div>

              <div className="profile-card-copy">
                <span className="card-label">Perfil</span>
                <h3>Diogo Tognolli</h3>
                <p>
                  Desenvolvedor back-end com foco em APIs, SQL, integrações e software
                  orientado à manutenção, clareza e evolução contínua.
                </p>
                <div className="profile-quick-notes">
                  <span>APIs REST</span>
                  <span>SQL</span>
                  <span>Integrações</span>
                </div>
              </div>

              <div className="profile-signal-grid">
                <span>C#</span>
                <span>.NET</span>
                <span>SQL</span>
                <span>APIs</span>
              </div>
            </article>

            <div className="hero-side-column">
              <article className="code-card">
                <div className="code-card-top">
                  <span className="status-dot" />
                  <span>backend.signal.ts</span>
                </div>
                <pre>
                  <code>{`const backendProfile = {
  focus: ["APIs", "SQL", "integrações"],
  style: "arquitetura pragmática",
  priority: "clareza + manutenção",
  portfolio: "prova visual + prova técnica"
};`}</code>
                </pre>
              </article>

              <div className="hero-metrics">
                <article>
                  <strong>5</strong>
                  <span>repositórios principais curados</span>
                </article>
                <article>
                  <strong>70+</strong>
                  <span>certificados mapeados</span>
                </article>
                <article>
                  <strong>21</strong>
                  <span>módulos no bootcamp Java + AWS</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="content-grid" id="sobre">
          <div className="section-heading">
            <span className="section-kicker">Leitura inicial</span>
            <h2>Presença visual forte, posicionamento técnico claro e mensagem objetiva.</h2>
          </div>

          <div className="signal-layout">
            <article className="about-spotlight">
              <span className="card-label">Posicionamento</span>
              <h3>Back-end com foco em engenharia, contexto de negócio e manutenção.</h3>
              <p>
                O portfólio foi organizado para comunicar maturidade técnica,
                capacidade de integração, leitura de processo e construção de
                soluções com estrutura, em vez de parecer apenas mais um site pessoal.
              </p>
            </article>

            <div className="signal-cards">
              <article className="feature-card">
                <Radar size={22} />
                <h3>Visão de sistema</h3>
                <p>Leitura de regra, operação e manutenção desde o desenho da solução.</p>
              </article>
              <article className="feature-card">
                <LineChart size={22} />
                <h3>Prova de valor</h3>
                <p>Projetos e formação organizados para transmitir confiança logo no início.</p>
              </article>
              <article className="feature-card">
                <BriefcaseBusiness size={22} />
                <h3>Perfil profissional</h3>
                <p>Comunicação mais alinhada a recrutadores, clientes e oportunidades reais.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-grid" id="servicos">
          <div className="section-heading">
            <span className="section-kicker">Como eu ajudo</span>
            <h2>Uma apresentação mais objetiva do que entrego e como penso software.</h2>
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
            <span className="section-kicker">Projetos em destaque</span>
            <h2>Casos selecionados para demonstrar capacidade técnica e aplicação prática.</h2>
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
                  <span className="mini-heading">Destaques</span>
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
            <h2>Tecnologias apresentadas como mapa de atuação e profundidade técnica.</h2>
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
            <span className="section-kicker">Formação técnica</span>
            <h2>Certificações organizadas em trilhas para destacar evolução e consistência.</h2>
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
            <span className="section-kicker">Leitura rápida</span>
            <h2>Em poucos segundos, o visitante precisa entender três pontos centrais.</h2>
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
            <h2>Se a proposta for construir software confiável, esta é a porta de entrada.</h2>
            <p>
              O portfólio foi pensado para apresentar valor com clareza. O próximo
              passo é transformar essa leitura em conversa e oportunidade.
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
              <span>E-mail</span>
            </a>
            <a
              className="contact-link"
              href="https://github.com/Tognolli0"
              target="_blank"
              rel="noreferrer"
            >
              <FolderGit2 size={18} />
              <span>Repositórios</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
