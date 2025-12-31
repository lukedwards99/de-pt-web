import Gallery from '../sections/Gallery.jsx'

function PersonCard({ name, role, bullets }) {
  return (
    <div className="col-md-6">
      <div className="card dept-card h-100">
        <div className="card-body">
          <div className="d-flex align-items-start justify-content-between gap-3">
            <div>
              <h2 className="h4 mb-1">{name}</h2>
              <div className="text-muted">{role}</div>
            </div>
            <div className="text-primary fs-3">
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
            </div>
          </div>

          <hr />

          <p className="mb-3">
            <strong>About {name.split(' ')[0]}:</strong> Replace this placeholder with a
            short bio (training background, specialties, qualifications, and your
            coaching style).
          </p>

          <ul className="mb-0">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="dept-hero py-5">
        <div className="container py-3">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h1 className="display-5 fw-semibold">
                Douglas &amp; Edwards Personal Training
              </h1>
              <p className="lead mb-4">
                Strength. Conditioning. Confidence. A simple, no-nonsense coaching
                approach built around your goals.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge text-bg-primary">
                  <i className="fa-solid fa-bolt me-2" aria-hidden="true" />
                  Training Plans
                </span>
                <span className="badge text-bg-secondary">
                  <i className="fa-solid fa-heart-pulse me-2" aria-hidden="true" />
                  Lifestyle Coaching
                </span>
                <span className="badge text-bg-light text-dark">
                  <i className="fa-solid fa-location-dot me-2" aria-hidden="true" />
                  Location: (add yours)
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card dept-card">
                <div className="card-body">
                  <div className="fw-semibold mb-2">Quick info</div>
                  <div className="small text-muted mb-3">
                    Edit this section to add your key points.
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fa-solid fa-check text-primary me-2" aria-hidden="true" />
                      1:1 personal training
                    </li>
                    <li className="mb-2">
                      <i className="fa-solid fa-check text-primary me-2" aria-hidden="true" />
                      Small group sessions
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2" aria-hidden="true" />
                      Nutrition guidance (optional)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="h3 dept-section-title mb-4">Meet your coaches</h2>
          <div className="row g-4">
            <PersonCard
              name="Luke Edwards"
              role="Coach / Personal Trainer"
              bullets={[
                'Specialty: (add) e.g., strength & hypertrophy',
                'Certification: (add)',
                'Coaching style: (add)',
              ]}
            />
            <PersonCard
              name="Kyle Douglas"
              role="Coach / Personal Trainer"
              bullets={[
                'Specialty: (add) e.g., conditioning & athletic performance',
                'Certification: (add)',
                'Coaching style: (add)',
              ]}
            />
          </div>
        </div>
      </section>

      <Gallery />
    </>
  )
}
