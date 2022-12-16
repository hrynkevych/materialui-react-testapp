import { ThemeProvider } from "@mui/material"
import Header from "./components/Header/Header.js"
import theme from './styles'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  )
}

export default App
