import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">

      <div className="container hero__grid">

        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="hero__copy">

          <p className="hero__status">
            <span className="hero__dot" />
            Open to full-time MERN roles
          </p>

          <h1>
            Rudrapratapsinh Chavda
          </h1>

          <p className="hero__lede">
            MERN stack developer who builds fast, reliable web applications —
            from React interfaces to Node and Express APIs backed by MongoDB.
          </p>

          <div className="hero__actions">

            <a href="#projects" className="btn btn-primary">
              View projects
            </a>

            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>

          </div>

          <p className="hero__edu">
            B.E., Computer Engineering — C K Pithawala College of Engineering &amp; Technology
          </p>

        </div>


        {/* =========================
            DEVELOPER.JS
        ========================= */}

        <div className="hero__panel">

          <div className="hero__panel-bar">
            <span>developer.js</span>
          </div>

          <pre className="hero__code">

<span className="c-muted">01</span>{'  '}
<span className="c-key">const</span>{' '}
<span className="c-var">developer</span>{' '}
<span className="c-op">=</span>{' '}
<span className="c-op">{'{'}</span>
{'\n'}

<span className="c-muted">02</span>{'  '}
<span className="c-prop">name</span>
<span className="c-op">:</span>{' '}
<span className="c-str">'Rudrapratapsinh Chavda'</span>
<span className="c-op">,</span>
{'\n'}

<span className="c-muted">03</span>{'  '}
<span className="c-prop">role</span>
<span className="c-op">:</span>{' '}
<span className="c-str">'MERN Stack Developer'</span>
<span className="c-op">,</span>
{'\n'}

<span className="c-muted">04</span>{'  '}
<span className="c-prop">stack</span>
<span className="c-op">:</span>{' '}
<span className="c-op">[</span>
{'\n'}

<span className="c-muted">05</span>{'    '}
<span className="c-str">'MongoDB'</span>
<span className="c-op">,</span>
{'\n'}

<span className="c-muted">06</span>{'    '}
<span className="c-str">'Express'</span>
<span className="c-op">,</span>
{'\n'}

<span className="c-muted">07</span>{'    '}
<span className="c-str">'React'</span>
<span className="c-op">,</span>
{'\n'}

<span className="c-muted">08</span>{'    '}
<span className="c-str">'Node.js'</span>
{'\n'}

<span className="c-muted">09</span>{'  '}
<span className="c-op">]</span>
<span className="c-op">,</span>
{'\n'}

<span className="c-muted">10</span>{'  '}
<span className="c-prop">status</span>
<span className="c-op">:</span>{' '}
<span className="c-str">'shipping'</span>
{'\n'}

<span className="c-muted">11</span>{'  '}
<span className="c-op">{'}'}</span>
<span className="c-op">;</span>

          </pre>

        </div>

      </div>

    </section>
  )
}