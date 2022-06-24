import cn from 'classnames'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import Accordion from '../../../../components/Accordion'

import styles from './styles.module.scss'

const BreweryList = ({ isFetching }) => {
  const [isOpen, setIsOpen] = useState(false)

  //title animation
  const titleAnimation = useSpring({
    from: {
      transform: 'translateY(-30px)'
    },
    to: [{ transform: 'translateY(15px)' }],
    config: { mass: 3, tension: 500, friction: 25 }
  })
  return (
    <div className={styles.main}>
      <animated.h1 style={titleAnimation}>Brewery List</animated.h1>
      <div
        className={cn(styles.accordion, {
          [styles.open]: isOpen
        })}
      >
        {!isFetching &&
          data &&
          data.Brewery.map((b, i) => <Accordion key={i} name={b.name} city={b.city} state={b.state} />)}
      </div>
    </div>
  )
}

export default BreweryList
