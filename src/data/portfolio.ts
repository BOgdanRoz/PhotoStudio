// Фото з Pexels (ліцензія Pexels, безкоштовне використання). Список джерел: docs/photo-credits.md

export type PortfolioSize = 'tall' | 'wide' | 'square'

export interface PortfolioItem {
  id: string
  src: string
  alt: string
  size: PortfolioSize
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'p1',
    src: '/images/portfolio-01.jpg',
    alt: 'Жінка торкається прозорої тканини біля вікна в теплому світлі',
    size: 'tall',
  },
  {
    id: 'p2',
    src: '/images/portfolio-02.jpg',
    alt: 'Портрет із тіньовим візерунком мережива на обличчі',
    size: 'square',
  },
  {
    id: 'p3',
    src: '/images/portfolio-03.jpg',
    alt: 'Жінка в чорній сукні на темному тлі',
    size: 'tall',
  },
  {
    id: 'p4',
    src: '/images/portfolio-04.jpg',
    alt: 'Студійний простір із арочним вікном і плетеним табуретом',
    size: 'square',
  },
  {
    id: 'p5',
    src: '/images/portfolio-05.jpg',
    alt: 'Жінка з поглядом крізь напівпрозору тканину',
    size: 'wide',
  },
]
