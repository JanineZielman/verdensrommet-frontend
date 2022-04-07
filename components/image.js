// import { getStrapiMedia } from "../lib/media"
// import NextImage from "next/image"

// const Image = ({ image, style }) => {
//   const { url, alternativeText, width, height } = image

//   const loader = () => {
//     return getStrapiMedia(image)
//   }

//   return (
//     <NextImage
//       loader={loader}
//       layout="responsive"
//       width={width}
//       height={height}
//       objectFit="contain"
//       src={getStrapiMedia(image)}
//       alt={alternativeText || ""}
//     />
//   )
// }

// export default Image

import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, layout, objectFit  }) => {
  const { url, alternativeText, width, height } = image


  const loader = () => {
    return getStrapiMedia(image)
  }

  return (
    <NextImage
      loader={loader}
      layout={layout}
      width={width}
      height={height}
      objectFit={objectFit}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
      className="img"
      unoptimized={true}
    />
  )
}

export default Image

