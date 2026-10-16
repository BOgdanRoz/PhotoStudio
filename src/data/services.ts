// Демонстраційні ціни: орієнтовні, уточнити перед публікацією.

export interface Service {
  id: string
  title: string
  description: string
  price: string
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'individual',
    title: 'Індивідуальні фотосесії',
    description: 'Портрети, fashion та editorial-зйомки для ваших унікальних історій.',
    price: 'від 1200 грн/год',
    image: '/images/service-individual.jpg',
    imageAlt: 'Жінка в шкіряному жакеті сидить на дерев’яному стільці',
  },
  {
    id: 'family',
    title: 'Сімейні фотосесії',
    description: 'Особливі моменти з вашими близькими в атмосфері студії.',
    price: 'від 2500 грн',
    image: '/images/service-family.jpg',
    imageAlt: 'Батьки з маленькою дитиною позують на бежевому фоні',
  },
  {
    id: 'rental',
    title: 'Оренда студії',
    description: 'Простір, світло та обладнання для ваших творчих проєктів.',
    price: 'від 1000 грн/год',
    image: '/images/service-rental.jpg',
    imageAlt: 'Студія з софітами та світлим фоном',
  },
  {
    id: 'commercial',
    title: 'Комерційний контент',
    description: 'Предметна зйомка, lookbook та контент для брендів і соцмереж.',
    price: 'від 4000 грн',
    image: '/images/service-commercial.jpg',
    imageAlt: 'Косметичний тюбик на бежевому м’якому текстилі',
  },
]
