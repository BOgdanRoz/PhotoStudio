// Заглушки: уточнити реальні дані студії перед публікацією.

export const site = {
  name: 'Solène Studio',
  description: 'Фотостудія з природним світлом',
  // Поки що лише головна сторінка Instagram; замінити на профіль студії.
  instagramUrl: 'https://www.instagram.com/',
  // Заглушка: адреса ще не погоджена.
  address: 'Адреса уточнюється',
  city: 'Київ, Україна',
} as const

export const navigation = [
  { id: 'portfolio', label: 'Портфоліо' },
  { id: 'services', label: 'Послуги' },
  { id: 'studio', label: 'Студія' },
  { id: 'about', label: 'Про нас' },
  { id: 'contact', label: 'Контакти' },
] as const
