import { ThemeProvider } from "@mui/material"
import Banner from "./components/Banner/Banner.js"
import Header from "./components/Header/Header.js"
import theme from './styles'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
      </ThemeProvider>
    </>
  )
}

export default App
