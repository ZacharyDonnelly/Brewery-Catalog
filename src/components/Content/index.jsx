import cn from 'classnames'
import Accordion from '../Accordion'
import styles from './styles.module.scss'

const Content = ({ children, className = '' }) => {
  return (
    <main className={cn(styles.base, className)}>
      <Accordion />
      {children}
    </main>
  )
}

export default Content
