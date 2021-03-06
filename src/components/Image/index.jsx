import { useContext } from "react";
import ImageContext from "../../contexts/imageContext";

export default Image = ({ src, alt='', className='' }) => {
  const {modal, setModal} = useContext(ImageContext);
  const click = () => {
    console.log('clicked')
    setModal(!modal);
  }
  return <img src={src} alt={alt} className={className} onClick={click} />
}