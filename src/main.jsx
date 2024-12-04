import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { StarRating } from "./star-rating.jsx"

const rootElement = document.querySelector('[data-js="root"]')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <StarRating size={60} color="teal" />
  </StrictMode>,
)
