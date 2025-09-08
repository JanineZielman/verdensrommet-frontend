import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, fill = false, objectFit = "cover", className = "" }) => {
  const { url, alternativeText, width, height } = image

  const loader = () => getStrapiMedia(image)

  return (
    <NextImage
      loader={loader}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      style={{ objectFit }}
      className={`img ${className}`}
      unoptimized
    />
  )
}

export default Image
