import { useQuery } from '@apollo/client'
import Accordion from '../../../components/Accordion'
import Layout from '../../../components/Layout'
import LIST_QUERY from '../../../graphql/Query/List'

import styles from './styles.module.scss'

const BreweryList = () => {
  const { data, isFetching, error } = useQuery(LIST_QUERY)

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
      <div className={styles.popoutList}>
        <Accordion className={styles.accordion}>
          {!isFetching &&
            data &&
            data.Brewery.map((b, i) => (
              <div key={i}>
                <span key={i}>{b.name}</span>
                <span>{b.city}</span>
                <span>{b.state}</span>
              </div>
            ))}
        </Accordion>
      </div>
    </Layout>
  )
}

export default BreweryList
