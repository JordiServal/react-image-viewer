import { useEffect, useState } from "react"

const useImageList = () => {
  const [images, setImages] = useState([])
  const [modal, setModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentImage, setCurrentImage] = useState(null)
  const [viewImages, setViewImages] = useState(0)
  const [containerClass, setContainerClass] = useState("")
  const [imageClass, setImageClass] = useState("")
  const [thumbClass, setThumbClass] = useState("")
  const [thumbImageClass, setThumbImageClass] = useState("")
  const [showCarrusel, setShowCarrusel] = useState(true)

  /**
   * @param {boolean} direction false for previous, true for next
   */
  const changeCurrent = (direction) => {
    const index = (currentIndex + (direction ? 1 : -1)) % images.length
    setCurrentIndex(index >= 0 ? index : images.length - 1)
  }

  useEffect(() => {
    if (images[currentIndex]) setCurrentImage(images[currentIndex])
  }, [currentIndex])

  useEffect(() => {
    if (images.length > 0) setCurrentImage(images[currentIndex])
  }, [images])

  return {
    images,
    setImages,
    modal,
    setModal,
    changeCurrent,
    currentImage,
    currentIndex,
    setCurrentIndex,
    viewImages,
    setViewImages,
    containerClass,
    setContainerClass,
    imageClass,
    setImageClass,
    thumbClass,
    setThumbClass,
    thumbImageClass,
    setThumbImageClass,
    showCarrusel,
    setShowCarrusel,
  }
}

export { useImageList }
