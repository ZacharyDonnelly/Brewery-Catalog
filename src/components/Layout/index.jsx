import Footer from '../Footer'

import Content from '../Content'
import Header from '../Header'

const Layout = ({ className = '', children }) => (
  <>
    <Header />
    <Content className={className}>{children}</Content>
    <Footer />
  </>
)

export default Layout
