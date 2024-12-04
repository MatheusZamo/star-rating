import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./star-rating.jsx"

const rootElement = document.querySelector('[data-js="root"]')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
