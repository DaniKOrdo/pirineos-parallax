import { useState } from "react"
import Header from "./components/Header"
import Parallax from "./components/Parallax"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import images from "./utils/images"

export default function App() {
  const [actualImageSet, setActualImageSet] = useState(0)

  const changeActualImageSet = (set) => {
    setActualImageSet(set)
  }

  return (
    <main className="container flex flex-col justify-center items-center mx-auto my-auto">
      <Header />
      <Parallax images={images[actualImageSet].parallaxImages} placeHolder={images[actualImageSet].placeHolder} />
      <Carousel actualImage={actualImageSet} onCarouselPhotoClick={changeActualImageSet} />
      <Footer />
    </main>
  )
}
