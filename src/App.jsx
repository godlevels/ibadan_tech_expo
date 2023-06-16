// import Hero from './components/Hero'
import About from './components/About'
import Ticket from './componentsByAdeboye/Ticket'
import Sponsors from './componentsByAdeboye/Sponsors'
import Prices from './componentsByAdeboye/Prices'
import Partners from './componentsByAdeboye/Partners'
import MediaPartners from './componentsByAdeboye/MediaPartners'
import Footer from './components/Footer'
import Prizes from './componentsByAdeboye/Prizes'



function App() {

  return (
    <div className='max-w-[1440px] mx-auto bg-background overflow-hidden relative'>
        {/* <Hero /> */}
        <About />
        <Ticket />
        <Prices />
        <Prizes />
        <Sponsors />
        <Partners />
        <MediaPartners />
        <Footer />
    </div>
  )
}

export default App
