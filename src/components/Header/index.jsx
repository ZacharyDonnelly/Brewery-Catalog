import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <header>
        <ul>
          <li>
            <Link to="/">Link</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
