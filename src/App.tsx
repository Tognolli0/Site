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
      "API voltada a auditoria centralizada, rastreabilidade de eventos e leitura operacional entre diferentes sistemas.",
    stack: ["C#", ".NET", "Logs", "SQL"],
    impact: [
      "Centraliza eventos com contexto de negocio",
      "Fortalece a rastreabilidade entre fluxos criticos",
      "Reforca seu posicionamento em back-end",
    ],
    href: "https://github.com/Tognolli0/AuditService.API",
  },
  {
    title: "FormularioSetec",
    tag: "Caso real",
    description:
      "Sistema para logistica de viagens com API em ASP.NET Core, persistencia estruturada e interface conectada ao processo.",
    stack: ["ASP.NET Core", "React", "PostgreSQL"],
    impact: [
      "Apresenta um cenario de uso concreto",
      "Conecta API, dados e interface com clareza",
      "Passa imagem de entrega completa e consistente",
    ],
    href: "https://github.com/Tognolli0/FormularioSetec",
  },
  {
    title: "Dashboard Gestao Casal React",
    tag: "Produto",
    description:
      "Aplicacao com dashboard, OCR e arquitetura full stack pensada para demonstrar visao de produto e evolucao tecnica.",
    stack: ["React", "ASP.NET Core", "OCR"],
    impact: [
      "Une produto e engenharia em uma mesma entrega",
      "Adiciona OCR como diferencial tecnico",
      "Amplia o apelo visual e funcional do portfolio",
    ],
    href: "https://github.com/Tognolli0/Dashboard_Gestao_Casal_React",
  },
  {
    title: "Dashboard Interativo",
    tag: "Visualizacao",
    description:
      "Dashboard em Blazor Server com indicadores, leitura visual clara e base para integracao em contexto corporativo.",
    stack: ["Blazor", ".NET", "Dashboards"],
    impact: [
      "Mostra variedade sem perder o foco principal",
      "Evidencia capacidade de leitura de indicadores",
      "Torna o portfolio mais completo e estrategico",
    ],
    href: "https://github.com/Tognolli0/Dashboard_Interativo",
  },
];

const certificateTracks: CertificateTrack[] = [
  {
    title: "Back-end e APIs",
    issuer: "Bradesco + Bootcamp CI&T",
    summary:
      "Formacao em C#, Java, Swagger, tratamento de excecoes, orientacao a objetos e fundamentos para servicos e APIs.",
    focus: ["C#", "Java", "Swagger", "OOP"],
  },
  {
    title: "Dados e persistencia",
    issuer: "IFRS + Bradesco + AWS",
    summary:
      "Base em banco de dados, administracao, armazenamento, SQL e estruturacao de persistencia aplicada.",
    focus: ["SQL", "Persistencia", "Administracao", "Armazenamento"],
  },
  {
    title: "Cloud e infraestrutura",
    issuer: "AWS + SENAI",
    summary:
      "Fundamentos de nuvem, redes, seguranca, monitoramento e infraestrutura para software moderno.",
    focus: ["Cloud", "Redes", "Seguranca", "Monitoramento"],
  },
  {
    title: "Formacao complementar",
    issuer: "FIAP + SENAI + Udemy",
    summary:
      "Trilhas em JavaScript, Python, blockchain, LGPD e outras frentes que ampliam repertorio tecnico e visao de mercado.",
    focus: ["JavaScript", "Python", "Blockchain", "LGPD"],
  },
];

const services: Service[] = [
  {
    icon: ServerCog,
    title: "Desenho de APIs e regras de negocio",
    description:
      "Transformo necessidades reais em contratos claros, persistencia confiavel e estruturas prontas para manutencao e evolucao.",
  },
  {
    icon: ShieldCheck,
    title: "Observabilidade e rastreabilidade",
    description:
      "Penso em logs, auditoria e leitura operacional desde o inicio para aumentar previsibilidade e confianca no sistema.",
  },
  {
    icon: Workflow,
    title: "Integracao entre camadas e produto",
    description:
      "Mesmo com foco em back-end, estruturo a solucao para conversar bem com interface, processo e objetivos de negocio.",
  },
];

const stackGroups = [
  {
    icon: BrainCircuit,
    title: "Nucleo back-end",
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
    body: "Desenvolvedor back-end com foco em APIs, SQL, integracoes e consistencia tecnica.",
  },
  {
    title: "Entrega",
    body: "Projetos curados para demonstrar aplicacao pratica, organizacao e qualidade de construcao.",
  },
  {
    title: "Formacao",
    body: "Evolucao continua em cloud, dados, C#, Java, web e fundamentos solidos de software.",
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
          <a href="#certificacoes">Certificacoes</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="section-kicker">Portfolio profissional</span>
            <p className="hero-intro">desenvolvedor back-end · c# · .net · sql · integracoes</p>
            <h1>
              Desenvolvimento back-end com{" "}
              <span>foco em solidez tecnica</span> e entrega real.
            </h1>
            <p className="hero-text">
              Este portfolio foi estruturado para apresentar, com clareza, minha
              capacidade de projetar APIs, integrar sistemas, trabalhar com dados
              e construir software com base tecnica consistente.
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
                <strong>Back-end, APIs, integracoes e persistencia</strong>
              </article>
              <article>
                <span className="mini-heading">Direcao</span>
                <strong>Leitura profissional para recrutadores e clientes</strong>
              </article>
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

            <div className="hero-proof-grid">
              <article className="hero-proof-card">
                <span className="mini-heading">Arquitetura</span>
                <h3>Estrutura pensada para manutencao</h3>
                <p>
                  APIs, persistencia e integracao organizadas com foco em clareza,
                  evolucao e leitura tecnica consistente.
                </p>
              </article>

              <article className="hero-proof-card">
                <span className="mini-heading">Dados</span>
                <h3>Base solida em SQL e rastreabilidade</h3>
                <p>
                  Trabalho com modelagem, persistencia, auditoria e visao
                  operacional para solucoes mais confiaveis.
                </p>
              </article>

              <article className="hero-proof-card">
                <span className="mini-heading">Entrega</span>
                <h3>Projetos com contexto real</h3>
                <p>
                  O portfolio foi organizado para mostrar aplicacao pratica,
                  consistencia e potencial de crescimento profissional.
                </p>
              </article>
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
                  Desenvolvedor back-end com foco em APIs, SQL, integracoes e software
                  orientado a manutencao, clareza e evolucao continua.
                </p>
                <div className="profile-quick-notes">
                  <span>APIs REST</span>
                  <span>SQL</span>
                  <span>Integracoes</span>
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
          </div>
        </section>

        <section className="content-grid" id="sobre">
          <div className="section-heading">
            <span className="section-kicker">Leitura inicial</span>
            <h2>Presenca visual forte, posicionamento tecnico claro e mensagem objetiva.</h2>
          </div>

          <div className="signal-layout">
            <article className="about-spotlight">
              <span className="card-label">Posicionamento</span>
              <h3>Back-end com foco em engenharia, contexto de negocio e manutencao.</h3>
              <p>
                O portfolio foi organizado para comunicar maturidade tecnica,
                capacidade de integracao, leitura de processo e construcao de
                solucoes com estrutura, em vez de parecer apenas mais um site pessoal.
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
                <p>Projetos e formacao organizados para transmitir confianca logo no inicio.</p>
              </article>
              <article className="feature-card">
                <BriefcaseBusiness size={22} />
                <h3>Perfil profissional</h3>
                <p>Comunicacao mais alinhada a recrutadores, clientes e oportunidades reais.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-grid" id="servicos">
          <div className="section-heading">
            <span className="section-kicker">Como eu ajudo</span>
            <h2>Uma apresentacao mais objetiva do que entrego e de como penso software.</h2>
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
            <h2>Casos selecionados para demonstrar capacidade tecnica e aplicacao pratica.</h2>
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
            <h2>Tecnologias apresentadas como mapa de atuacao e profundidade tecnica.</h2>
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
            <h2>Certificacoes organizadas em trilhas para destacar evolucao e consistencia.</h2>
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
            <h2>Em poucos segundos, o visitante precisa entender tres pontos centrais.</h2>
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
            <h2>Se a proposta for construir software confiavel, esta e a porta de entrada.</h2>
            <p>
              O portfolio foi pensado para apresentar valor com clareza. O proximo
              passo e transformar essa leitura em conversa e oportunidade.
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
              <span>Repositorios</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
