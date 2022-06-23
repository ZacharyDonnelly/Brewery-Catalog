import cn from 'classnames'
import styles from './styles.module.scss'

const Content = ({ children, className = '' }) => {
  return <main className={cn(styles.container, className)}>{children}</main>
}

export default Content
