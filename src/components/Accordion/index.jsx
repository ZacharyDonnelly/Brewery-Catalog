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
      color: isOpen ? '#ED1B2E' : '#000'
    }
  }

  const openAnimation = useSpring({
    from: { opacity: '0', maxHeight: '25px' },
    to: { opacity: '1', maxHeight: isOpen ? '200px' : '25px' },
    config: { duration: '300' }
  })

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: 'rotate(0deg)',
      color: '#000'
    },
    to: {
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      color: isOpen ? '#ED1B2E' : '#000'
    },
    config: { duration: '120' }
  })

  return (
    <animated.div className={styles.item} style={openAnimation}>
      <div className={styles.title} role="button" onClick={toggleAccordion} tabIndex="-2">
        <h4 style={headerStying.accordionTitle}>Accordion</h4>
        <animated.i style={iconAnimation}>
          <CaretLeft
            className={cn(styles.toggle, {
              [styles.open]: isOpen
            })}
            alt="Toggle Accordion"
          />
        </animated.i>
      </div>
      <>{children}</>
    </animated.div>
  )
}
export default Accordion
