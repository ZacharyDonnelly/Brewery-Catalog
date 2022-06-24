import { useQuery } from '@apollo/client'
import cn from 'classnames'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import Accordion from '../../../components/Accordion'
import Layout from '../../../components/Layout'
import LIST_QUERY from '../../../graphql/Query/List'
import styles from './styles.module.scss'

const BreweryList = () => {
  const { data, isFetching, error } = useQuery(LIST_QUERY)
  const [isOpen, setIsOpen] = useState(false)

  //title animation
  const titleAnimation = useSpring({
    from: {
      transform: 'translateY(-30px)'
    },
    to: [{ transform: 'translateY(15px)' }],
    config: { mass: 3, tension: 500, friction: 25 }
  })

  if (isFetching) return 'Loading...'
  if (error) return <pre>{error.message}</pre>
  console.log(data)

  return (
    <Layout className={styles.container}>
      <header>
        <h1>Brewery Catalog</h1>
      </header>
      <div className={styles.formWrapper}>
        <form>
          <input type="text" name="search" placeholder="Find a brewery" />
          <button type="button">Search</button>
          <button type="reset">Reset</button>
        </form>
      </div>
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
    </Layout>
  )
}

export default BreweryList
