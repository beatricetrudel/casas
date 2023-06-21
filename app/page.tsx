import ClientOnly from "./components/ClientOnly";
import Carousel from "./components/Carousel";
import Container from "./components/Container";
import Footer from "./components/Footer";

export default function Home() {
  return (
   
    <ClientOnly>
       <Container>
        <Carousel />
          <div className="
          pt-24
          grid
          grid-col-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
          ">

          </div>
          </Container>
          <Footer />
        </ClientOnly>
      
  )
}
