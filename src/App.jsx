import { useState } from "react"
import Parallax from "./components/Parallax"
import Carousel from "./components/Carousel"
import InfoPhoto from "./components/InfoPhoto"
import images from "./utils/images"

function App() {
  const [actualImageSet, setActualImageSet] = useState(0)

  const changeActualImageSet = (set) => {
    setActualImageSet(set)
  }

  return (
    <main className="container flex flex-col justify-center items-center mx-auto my-auto">
      <h1 className="text-5xl md:text-7xl font-bold m-10">Pirineos Parallax</h1>
      <Parallax images={images[actualImageSet].parallaxImages} />
      <Carousel actualImage={actualImageSet} onCarouselPhotoClick={changeActualImageSet} />
      <InfoPhoto actualImage={images[actualImageSet].infoPhoto} />
    </main>
  )
}

export default App
