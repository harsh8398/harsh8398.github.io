import * as React from "react"
import { Link } from "gatsby"

import ThemeSwitch from "./themeswitch"
import { ThemeProvider } from "../context/themecontext"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="text-3xl font-black dark:text-primary-night text-primary-day">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link
        className="text-xl font-black dark:text-primary-night text-primary-day"
        to="/"
      >
        {title}
      </Link>
    )
  }

  return (
    <ThemeProvider>
      <div className="max-w-screen-sm mx-auto px-4">
        <header className="my-8">
          <div className="flex justify-between">
            {header}
            <ThemeSwitch />
          </div>
        </header>
        <main>{children}</main>
        {isRootPath && (
          <footer className="my-8 dark:text-primary-night text-primary-day font-semibold">
            <a
              href="https://github.com/harsh8398"
              className="hover:underline decoration-underline-day dark:decoration-underline-night"
            >
              github
            </a>
            &nbsp;&middot;&nbsp;
            <a
              href="https://linkedin.com/in/harsh8398"
              className="hover:underline decoration-underline-day dark:decoration-underline-night"
            >
              linkedin
            </a>
            &nbsp;&middot;&nbsp;
            <a
              href="mailto:pharsh58@gmail.com"
              className="hover:underline decoration-underline-day dark:decoration-underline-night"
            >
              mail
            </a>
          </footer>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Layout
