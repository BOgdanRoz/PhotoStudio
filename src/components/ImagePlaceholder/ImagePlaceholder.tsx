import styles from './ImagePlaceholder.module.css'

interface ImagePlaceholderProps {
  label: string
  ratio?: string
  className?: string
}

// Заглушка для фотографії: замінити на <img> з реальним зображенням і alt.
function ImagePlaceholder({ label, ratio = '4 / 5', className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`${styles.placeholder} ${className ?? ''}`}
      style={{ aspectRatio: ratio }}
    >
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default ImagePlaceholder
