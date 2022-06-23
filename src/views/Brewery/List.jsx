import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

const BreweryList = () => {
  return (
    <Layout>
      <main>
        <h1>Brewery Catalog</h1>
        <form>
          <input type="text" name="search" placeholder="Find a brewery" />
          <button type="submit">Search</button>
          <button type="reset">Reset</button>
        </form>
        <ul>
          <li>
            <Link to="/breweries">Brewery 1</Link> - Brewtown, OR
          </li>
        </ul>
      </main>
    </Layout>
  )
}

export default BreweryList
