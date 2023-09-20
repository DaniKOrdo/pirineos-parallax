import { useState } from "react"
import Parallax from "./components/Parallax"
import Carousel from "./components/Carousel"
import images from "./utils/images"

function App() {
  const [actualImageSet, setActualImageSet] = useState(0)

  const changeActualImageSet = (set) => {
    setActualImageSet(set)
  }

  return (
    <main className="container flex flex-col mx-auto">
      <Parallax images={images[actualImageSet].parallaxImages} />
      <Carousel onCarouselPhotoClick={changeActualImageSet} />
    </main>
  )
}

export default App
