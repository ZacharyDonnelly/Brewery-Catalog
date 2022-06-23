import cn from 'classnames'
import { useCallback, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { CaretLeft } from '../../static/design/vars/icons'

import styles from './styles.module.scss'

const Accordion = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const headerStying = {
    accordionTitle: {
      color: open ? '#ED1B2E' : '#000'
    }
  }

  const openAnimation = useSpring({
    from: { opacity: '0', maxHeight: '25px' },
    to: { opacity: '1', maxHeight: open ? '200px' : '25px' },
    config: { duration: '300' }
  })

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: 'rotate(0deg)',
      color: '#000'
    },
    to: {
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      color: open ? '#ED1B2E' : '#000'
    },
    config: { duration: '120' }
  })

  return (
    <animated.div className={styles.item} style={openAnimation}>
      <div className={styles.title}>
        <button type="button" className={styles.btn} onClick={toggleAccordion}>
          <h4 style={styles.accordionTitle}>Accordion</h4>
          <animated.i style={iconAnimation}>
            <CaretLeft className={styles.toggle} aria-expanded={isOpen} alt="Toggle Accordion" />
          </animated.i>
        </button>
      </div>
      <div
        className={cn(styles.content, {
          [styles.open]: isOpen
        })}
      >
        {children}
      </div>
    </animated.div>
  )
}
export default Accordion
