import { ThemeProvider } from "@mui/material"
import Banner from "./components/Banner/Banner.js"
import Header from "./components/Header/Header.js"
import theme from './styles'
import MasonryImageList from './components/ContentComponent.js'
import FooterEx from './components/FooterComponent.js' 
import ActionIcons from './components/ActionIconsComponent.js'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
        <ActionIcons />
        <MasonryImageList />
        <FooterEx />
      </ThemeProvider>
    </>
  )
}

export default App;
