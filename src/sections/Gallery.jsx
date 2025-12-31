const DEFAULT_ITEMS = [
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    alt: 'Workout training',
    caption: 'Replace this caption with your own.',
  },
  {
    src: 'https://images.unsplash.com/photo-1517964603305-11c0f6f66012?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dumbbells in gym',
    caption: 'Program highlight / session vibe.',
  },
  {
    src: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Personal training',
    caption: 'Client transformation story (placeholder).',
  },
  {
    src: 'https://images.unsplash.com/photo-1518611012118-f0c5c03f2f71?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gym equipment',
    caption: 'Add your before/after or training shots.',
  },
]

function GalleryItem({ src, alt, caption }) {
  return (
    <div className="col-sm-6 col-lg-3">
      <figure className="card dept-card h-100 overflow-hidden mb-0">
        <img
          className="w-100"
          src={src}
          alt={alt}
          loading="lazy"
          style={{ aspectRatio: '4 / 3', objectFit: 'cover' }}
        />
        <figcaption className="card-body">
          <div className="small text-muted">
            <i className="fa-regular fa-image me-2" aria-hidden="true" />
            {caption}
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default function Gallery({ items = DEFAULT_ITEMS }) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex flex-wrap align-items-end justify-content-between gap-2 mb-4">
          <div>
            <h2 className="h3 dept-section-title mb-1">Gallery</h2>
            <div className="text-muted">
              Swap these photos for your own and edit the captions.
            </div>
          </div>
          <div className="text-muted small">
            Tip: drop images in <code>src/assets</code> and import them.
          </div>
        </div>

        <div className="row g-4">
          {items.map((item) => (
            <GalleryItem key={item.src} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
