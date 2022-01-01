import React, { useEffect } from "react"

export const ThemeContext = React.createContext()
export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined)
  useEffect(() => {
    rawSetColorMode(window.localStorage.getItem("theme"))
  }, [])
  const contextValue = React.useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement
      // Persist it on update
      window.localStorage.setItem("theme", newValue)

      if (newValue === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }

      rawSetColorMode(newValue)
    }

    return {
      colorMode,
      setColorMode,
    }
  }, [colorMode, rawSetColorMode])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
