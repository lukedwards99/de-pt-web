import { useMemo, useState } from 'react'

const DEFAULT_INBOX = 'hello@example.com'

function buildMailto({ to, name, email, message }) {
  const subject = `New training enquiry from ${name || 'website'}`
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

  const params = new URLSearchParams({ subject, body })
  return `mailto:${to}?${params.toString()}`
}

export default function ContactPage() {
  const inboxEmail = DEFAULT_INBOX

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const mailtoHref = useMemo(
    () => buildMailto({ to: inboxEmail, ...form }),
    [inboxEmail, form]
  )

  function onChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function onSubmit(e) {
    e.preventDefault()

    // GitHub Pages is static hosting. Without a backend, we can't send email directly.
    // This uses a mailto: link as the default, reliable fallback.
    window.location.href = mailtoHref
    setSubmitted(true)
  }

  return (
    <section className="py-5">
      <div className="container" style={{ maxWidth: 900 }}>
        <h1 className="h2 mb-2">Contact</h1>
        <p className="text-muted mb-4">
          Send us a message and well get back to you. (For now, this opens your
          email client.)
        </p>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card dept-card">
              <div className="card-body">
                <form onSubmit={onSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="form-control"
                        value={form.name}
                        onChange={onChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-control"
                        value={form.email}
                        onChange={onChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        value={form.message}
                        onChange={onChange}
                        placeholder="Tell us your goals, availability, and any injuries/limitations..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="col-12 d-flex flex-wrap gap-2 align-items-center">
                      <button type="submit" className="btn btn-primary">
                        <i className="fa-solid fa-paper-plane me-2" aria-hidden="true" />
                        Send
                      </button>
                      <a className="btn btn-outline-secondary" href={mailtoHref}>
                        <i className="fa-solid fa-envelope me-2" aria-hidden="true" />
                        Open email
                      </a>
                      {submitted ? (
                        <span className="text-muted small">
                          If nothing happened, your browser may be blocking mailto.
                        </span>
                      ) : null}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card dept-card h-100">
              <div className="card-body">
                <h2 className="h5">Shared inbox</h2>
                <p className="text-muted">
                  Update this address later in <code>src/pages/ContactPage.jsx</code>.
                </p>
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-inbox text-primary" aria-hidden="true" />
                  <a className="text-decoration-none" href={`mailto:${inboxEmail}`}>
                    {inboxEmail}
                  </a>
                </div>

                <hr />

                <h3 className="h6">Prefer a real form?</h3>
                <p className="text-muted mb-0">
                  GitHub Pages cant run server code. If you want submissions to send
                  automatically, we can hook this up to Formspree, Resend (via a
                  serverless function), or another provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
