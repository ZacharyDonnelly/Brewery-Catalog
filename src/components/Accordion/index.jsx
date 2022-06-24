import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring'

import styles from './styles.module.scss'

const Accordion = ({ name, city, state }) => {
  const [open, setOpen] = useState(false)
  //toggle accordion function
  const toggleHandler = () => {
    //switch state
    setOpen(!open)
  }

  //conditional styling
  const titleStyles = {
    //if open is true, change color of title
    accordionTitle: {
      color: open ? '#ED1B2E' : '#000'
    }
  }
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: '0', maxHeight: '25px' },
    to: { opacity: '1', maxHeight: open ? '200px' : '25px' },
    config: { duration: '300' }
  })

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: 'rotate(0deg)',
      color: '#fff'
    },
    to: {
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      color: open ? '#ED1B2E' : '#000'
    },
    config: { duration: '120' }
  })

  return (
    <animated.div className={styles.item} style={openAnimation}>
      <div className={styles.title} role="button" tabbable="0" onClick={toggleHandler}>
        <h4 style={titleStyles.accordionTitle}>{name}</h4>
        <animated.i style={iconAnimation}>
          <ExpandMoreIcon />
        </animated.i>
      </div>
      <p className={styles.content}>{city}</p>
      <p className={styles.content}>{state}</p>
    </animated.div>
  )
}
export default Accordion
