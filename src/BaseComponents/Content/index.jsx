import cn from "classnames"

import styles from "./styles.module.scss"

const Content = ({ children, className = "" }) => <main className={cn(styles.base, className)}>{children}</main>

export default Content
