import { useContext } from "react"
import ImageContext from "../../../contexts/imageContext"
import "./style.css"

const ModalThumbnail = () => {
  const { images, currentIndex, setCurrentIndex } = useContext(ImageContext)

  return (
    <div className={"modal_thumb_container"}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.thumb && image.thumb !== "" ? image.thumb : image.src}
          alt={image.alt}
          className={`modal_thumb ${
            index === currentIndex ? "highlight" : ""
          }`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  )
}
export default ModalThumbnail
