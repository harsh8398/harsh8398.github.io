import React from "react"

// ref: https://www.joshwcomeau.com/react/dark-mode/#updating-html-in-gatsby
const MagicScriptTag = () => {
  const codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem("theme")
    const hasPersistedPreference = typeof persistedColorPreference === "string"
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference
    }
    return "dark"
  }

  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  if (colorMode === "dark") {
    root.classList.add("dark")
  } else {
    root.classList.remove("dark")
  }
  window.localStorage.setItem("theme", colorMode)
})()
  `
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag key="magicscripttag" />)
}
