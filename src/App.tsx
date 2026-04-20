import { useState } from "react";

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

const projects: Project[] = [
  {
    title: "AuditService.API",
    tag: "Observabilidade",
    description:
      "API desenhada para auditoria centralizada, rastreabilidade e leitura operacional de eventos entre sistemas.",
    stack: ["C#", ".NET", "Logs", "SQL"],
    impact: [
      "Centraliza eventos e contexto",
      "Facilita rastreabilidade entre fluxos",
      "Posiciona bem seu perfil back-end",
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
      "Reforca capacidade de entrega full cycle",
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
      "Ajuda a prender o leitor visualmente",
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
      "Ajuda no apelo visual do portfolio",
    ],
    href: "https://github.com/Tognolli0/Dashboard_Interativo",
  },
];

const certificateTracks: CertificateTrack[] = [
  {
    title: "Back-end e APIs",
    issuer: "Bradesco + Bootcamp CI&T",
    summary:
      "C#, Java, Swagger, excecoes, orientacao a objetos e fundamentos de implementacao para servicos e APIs.",
    focus: ["C#", "Java", "Swagger", "Orientacao a objetos"],
  },
  {
    title: "Dados e persistencia",
    issuer: "IFRS + Bradesco + AWS",
    summary:
      "Banco de dados, administracao, armazenamento, SQL e estrutura de persistencia aplicada a sistemas.",
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

const stackGroups = [
  {
    title: "Core back-end",
    accent: "amber",
    items: ["C#", ".NET", "ASP.NET Core", "Dapper", "Entity Framework"],
  },
  {
    title: "Dados e observabilidade",
    accent: "pink",
    items: ["SQL Server", "PostgreSQL", "SQLite", "Logs", "Auditoria"],
  },
  {
    title: "Camada de produto",
    accent: "cyan",
    items: ["React", "Blazor", "Vite", "OCR", "Dashboards"],
  },
];

const workSignals = [
  {
    title: "Arquitetura que aguenta manutencao",
    body: "Nao basta funcionar. Eu penso em estrutura, legibilidade e futuro do sistema.",
  },
  {
    title: "APIs com contexto de negocio",
    body: "Meu foco e transformar regra real em contratos claros e fluxos previsiveis.",
  },
  {
    title: "Entrega com leitura operacional",
    body: "Logs, rastreabilidade e persistencia entram cedo no desenho da solucao.",
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [selectedTrack, setSelectedTrack] = useState(certificateTracks[0]);

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
            <p className="hero-intro">
              back-end engineer · c# · .net · sql · integracoes
            </p>
            <h1>
              Portifolio com mais energia visual,
              <span> mais prova tecnica</span> e leitura mais forte.
            </h1>
            <p className="hero-text">
              Eu construo software para cenarios em que API, dados, processo,
              rastreabilidade e manutencao importam de verdade. Em vez de um
              site genérico, aqui a experiencia foi pensada para vender melhor
              sua profundidade tecnica.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Explorar projetos
              </a>
              <a className="button button-secondary" href="#certificacoes">
                Ver formacao tecnica
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
            <h2>O site precisa prender pelo visual e segurar pela estrutura.</h2>
          </div>

          <div className="signal-layout">
            <article className="about-spotlight">
              <span className="card-label">Posicionamento</span>
              <h3>Back-end com foco em engenharia, nao so em efeito visual.</h3>
              <p>
                Seu portfolio agora aponta para uma imagem mais madura: sistemas,
                APIs, dados, logs, contexto de negocio e criterio tecnico.
              </p>
            </article>

            <div className="signal-cards">
              {workSignals.map((signal) => (
                <article key={signal.title} className="feature-card">
                  <h3>{signal.title}</h3>
                  <p>{signal.body}</p>
                </article>
              ))}
            </div>
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
                <span className="project-tag">{selectedProject.tag}</span>
                <a href={selectedProject.href} target="_blank" rel="noreferrer">
                  Abrir no GitHub
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
            <h2>As linguagens e tecnologias entram como parte do design da pagina.</h2>
          </div>

          <div className="stack-matrix">
            {stackGroups.map((group) => (
              <article key={group.title} className={`stack-card ${group.accent}`}>
                <span className="card-label">{group.title}</span>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-grid" id="certificacoes">
          <div className="section-heading">
            <span className="section-kicker">Formacao tecnica</span>
            <h2>Certificados organizados em trilhas, com mais leitura e menos poluicao.</h2>
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
              <span className="card-label">{selectedTrack.issuer}</span>
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
            <article className="timeline-item">
              <span className="timeline-step">01</span>
              <div>
                <h3>Quem voce e</h3>
                <p>Um desenvolvedor com foco em back-end, APIs, SQL e integracoes.</p>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-step">02</span>
              <div>
                <h3>O que voce entrega</h3>
                <p>Projetos com contexto real, estrutura e sinais claros de manutencao.</p>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-step">03</span>
              <div>
                <h3>Por que confiar</h3>
                <p>Base tecnica consistente, repositorios organizados e portfolio bem posicionado.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="cta-section" id="contato">
          <div>
            <span className="section-kicker">Contato</span>
            <h2>Se a ideia e construir software confiavel, vamos conversar.</h2>
            <p>
              O melhor proximo passo e abrir uma conversa no LinkedIn ou seguir
              para o GitHub e ver os repositorios principais.
            </p>
          </div>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://www.linkedin.com/in/diogotognolli"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/Tognolli0"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
