import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
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
      <main className={styles.listSection}>
        <ul>
          {!isFetching &&
            data &&
            data.Brewery.map((b, i) => (
              <div key={i}>
                <li>
                  <Link to="/breweries">{b.name}</Link>
                </li>
                <li>
                  <Link to="/breweries">{b.city}</Link>
                </li>
                <li>
                  <Link to="/breweries">{b.state}</Link>
                </li>
              </div>
            ))}
        </ul>
      </main>
    </Layout>
  )
}

export default BreweryList
