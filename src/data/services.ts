// Демонстраційні ціни: орієнтовні, уточнити перед публікацією.

export interface Service {
  id: string
  title: string
  description: string
  price: string
  image: string
}

export const services: Service[] = [
  {
    id: 'individual',
    title: 'Індивідуальні фотосесії',
    description: 'Портрети, fashion та editorial-зйомки для ваших унікальних історій.',
    price: 'від 1200 грн/год',
    image: 'Заглушка: індивідуальна фотосесія',
  },
  {
    id: 'family',
    title: 'Сімейні фотосесії',
    description: 'Особливі моменти з вашими близькими в атмосфері студії.',
    price: 'від 2500 грн',
    image: 'Заглушка: сімейна фотосесія',
  },
  {
    id: 'rental',
    title: 'Оренда студії',
    description: 'Простір, світло та обладнання для ваших творчих проєктів.',
    price: 'від 1000 грн/год',
    image: 'Заглушка: оренда студії',
  },
  {
    id: 'commercial',
    title: 'Комерційний контент',
    description: 'Предметна зйомка, lookbook та контент для брендів і соцмереж.',
    price: 'від 4000 грн',
    image: 'Заглушка: комерційна зйомка',
  },
]
