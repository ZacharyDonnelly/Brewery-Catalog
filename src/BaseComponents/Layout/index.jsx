import Content from "../Content"
import Header from "../Header"

const Layout = ({ className = "", children }) => (
	<>
		<Header />
		<Content className={className}>{children}</Content>
	</>
)

export default Layout
