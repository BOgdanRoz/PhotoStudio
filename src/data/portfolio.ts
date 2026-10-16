// Заглушки замість фотографій: замінити на дозволені для портфоліо знімки.

export type PortfolioSize = 'tall' | 'wide' | 'square'

export interface PortfolioItem {
  id: string
  alt: string
  size: PortfolioSize
}

export const portfolio: PortfolioItem[] = [
  { id: 'p1', alt: 'Заглушка: портрет у світлі', size: 'tall' },
  { id: 'p2', alt: 'Заглушка: натюрморт з листям', size: 'square' },
  { id: 'p3', alt: 'Заглушка: fashion-образ у чорному', size: 'tall' },
  { id: 'p4', alt: 'Заглушка: інтер’єр студії', size: 'square' },
  { id: 'p5', alt: 'Заглушка: крупний план обличчя', size: 'wide' },
  { id: 'p6', alt: 'Заглушка: драпірування тканини', size: 'square' },
]
