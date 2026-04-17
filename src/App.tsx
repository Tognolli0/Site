type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  href: string;
};

type CertificateTrack = {
  title: string;
  issuer: string;
  summary: string;
};

const projects: Project[] = [
  {
    title: "AuditService.API",
    tag: "Observabilidade",
    description:
      "API para auditoria centralizada, rastreabilidade e leitura operacional de eventos entre sistemas.",
    stack: ["C#", ".NET", "Logs", "SQL"],
    href: "https://github.com/Tognolli0/AuditService.API",
  },
  {
    title: "FormularioSetec",
    tag: "Fluxo real",
    description:
      "Sistema para logistica de viagens com API em ASP.NET Core, persistencia e interface conectada ao processo.",
    stack: ["ASP.NET Core", "React", "PostgreSQL"],
    href: "https://github.com/Tognolli0/FormularioSetec",
  },
  {
    title: "Dashboard Gestao Casal React",
    tag: "Produto",
    description:
      "Aplicacao com dashboard, OCR e arquitetura full stack usada para mostrar criterio de produto e estrutura evolutiva.",
    stack: ["React", "ASP.NET Core", "OCR"],
    href: "https://github.com/Tognolli0/Dashboard_Gestao_Casal_React",
  },
  {
    title: "Dashboard Interativo",
    tag: "Visualizacao",
    description:
      "Dashboard em Blazor Server com indicadores, leitura visual e base para integracao corporativa.",
    stack: ["Blazor", ".NET", "Dashboards"],
    href: "https://github.com/Tognolli0/Dashboard_Interativo",
  },
];

const certificateTracks: CertificateTrack[] = [
  {
    title: "Back-end e APIs",
    issuer: "Bradesco + Bootcamp CI&T",
    summary:
      "C#, Java, Swagger, excecoes, orientacao a objetos e fundamentos de implementacao para servicos e APIs.",
  },
  {
    title: "Dados e persistencia",
    issuer: "IFRS + Bradesco + AWS",
    summary:
      "Banco de dados, administracao, armazenamento, SQL e estrutura de persistencia aplicada a sistemas.",
  },
  {
    title: "Cloud e infraestrutura",
    issuer: "AWS + SENAI",
    summary:
      "Fundamentos de nuvem, redes, seguranca, monitoramento e base de infraestrutura para software moderno.",
  },
  {
    title: "Amplitude complementar",
    issuer: "FIAP + SENAI + Udemy",
    summary:
      "HTML, JavaScript, Python, blockchain, LGPD, data science e outras trilhas como repertorio tecnico.",
  },
];

const principles = [
  "Escrever software que continua legivel depois da entrega",
  "Transformar regra de negocio em contratos claros e APIs previsiveis",
  "Pensar em logs, rastreabilidade e manutencao desde o inicio",
];

const highlights = [
  { value: "5", label: "repositorios principais curados" },
  { value: "70+", label: "certificados e comprovacoes mapeados" },
  { value: "21", label: "modulos no bootcamp Java + AWS" },
];

function App() {
  return (
    <div className="app-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

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
          <a href="#certificacoes">Certificacoes</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="section-kicker">Portfolio profissional</span>
            <h1>
              Back-end com cara de engenharia,
              <span> nao de vitrine improvisada.</span>
            </h1>
            <p className="hero-text">
              Sou Diogo Tognolli e meu foco esta em C#, .NET, SQL, APIs,
              observabilidade e integracoes. Este portfolio foi montado para
              mostrar profundidade, organizacao e capacidade de entrega em
              cenarios reais.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Ver projetos
              </a>
              <a className="button button-secondary" href="#contato">
                Falar comigo
              </a>
            </div>

            <ul className="tag-row" aria-label="Especialidades">
              <li>APIs REST</li>
              <li>ASP.NET Core</li>
              <li>SQL e persistencia</li>
              <li>Auditoria e logs</li>
              <li>Integracoes</li>
            </ul>
          </div>

          <div className="hero-panel">
            <div className="status-card">
              <span className="status-title">Modo de trabalho</span>
              <div className="terminal">
                <p>
                  <span>&gt;</span> input.business()
                </p>
                <p className="terminal-answer">
                  "regra, processo, integracao e persistencia"
                </p>
                <p>
                  <span>&gt;</span> output.engineering()
                </p>
                <p className="terminal-answer">
                  "API clara, sistema rastreavel e manutencao viavel"
                </p>
              </div>
            </div>

            <div className="signal-grid">
              {highlights.map((item) => (
                <article key={item.label} className="signal-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-grid" id="sobre">
          <div className="section-heading">
            <span className="section-kicker">Posicionamento</span>
            <h2>O que eu quero que fique claro para quem visita meu perfil.</h2>
          </div>

          <div className="insight-grid">
            <article className="feature-card feature-card-large">
              <span className="card-label">Como penso</span>
              <h3>Software precisa continuar bom depois da entrega.</h3>
              <p>
                Eu valorizo organizacao, previsibilidade e leitura tecnica. Meu
                interesse principal esta em back-end e engenharia de sistemas,
                especialmente onde a regra de negocio precisa virar software bem
                estruturado.
              </p>
            </article>

            {principles.map((item, index) => (
              <article key={item} className="feature-card">
                <span className="card-index">0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-grid" id="projetos">
          <div className="section-heading">
            <span className="section-kicker">Projetos</span>
            <h2>Projetos escolhidos para mostrar repertorio tecnico com contexto.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`project-card ${index === 0 ? "project-card-wide" : ""}`}
              >
                <div className="project-top">
                  <span className="project-tag">{project.tag}</span>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="stack-list">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-grid section-split" id="certificacoes">
          <div className="section-heading">
            <span className="section-kicker">Formacao tecnica</span>
            <h2>Base de estudo forte, apresentada do jeito certo.</h2>
          </div>

          <div className="education-panel">
            <article className="education-hero">
              <span className="card-label">Curadoria</span>
              <h3>Seus certificados reforcam constancia e amplitude.</h3>
              <p>
                Em vez de despejar uma lista enorme, o portfolio agora organiza
                sua formacao por trilhas tecnicas relevantes para o seu
                posicionamento como desenvolvedor back-end.
              </p>
            </article>

            <div className="education-list">
              {certificateTracks.map((item) => (
                <article key={item.title} className="education-card">
                  <span>{item.issuer}</span>
                  <h4>{item.title}</h4>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-grid timeline-section">
          <div className="section-heading">
            <span className="section-kicker">Leitura rapida</span>
            <h2>Uma narrativa curta para segurar a atencao de recrutador e cliente.</h2>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-step">01</span>
              <div>
                <h3>Posicionamento claro</h3>
                <p>Backend engineer com foco em APIs, SQL, integracoes e consistencia tecnica.</p>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-step">02</span>
              <div>
                <h3>Prova de entrega</h3>
                <p>Repositorios principais limpos, organizados e apresentados com mais criterio.</p>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-step">03</span>
              <div>
                <h3>Base de estudo</h3>
                <p>Certificacoes em dados, cloud, C#, Java, web e fundamentos de software.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="cta-section" id="contato">
          <div>
            <span className="section-kicker">Contato</span>
            <h2>Se voce procura alguem para construir software confiavel, eu quero conversar.</h2>
            <p>
              O melhor proximo passo e uma conversa objetiva pelo LinkedIn ou
              uma leitura dos meus projetos no GitHub.
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
