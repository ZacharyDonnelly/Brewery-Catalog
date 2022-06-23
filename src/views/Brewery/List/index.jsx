import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import Content from '../../../components/Content'
import Layout from '../../../components/Layout'
import LIST_QUERY from '../../../graphql/Query/List'

import styles from './styles.module.scss'

const BreweryList = () => {
  const { data, isFetching, error } = useQuery(LIST_QUERY)

  if (isFetching) return 'Loading...'
  if (error) return <pre>{error.message}</pre>

  // TODO: Remove once finished

  // eslint-disable-next-line
  console.log(data)

  return (
    <Layout>
      <Content className={styles.container}>
        <header>
          <h1>Brewery Catalog</h1>
        </header>
        <form>
          <input type="text" name="search" placeholder="Find a brewery" />
          <button type="button">Search</button>
          <button type="reset">Reset</button>
        </form>
        <ul>
          <li>
            <Link to="/breweries">Brewery 1</Link> - Brewtown, OR
          </li>
        </ul>
      </Content>
    </Layout>
  )
}

export default BreweryList
