import { IKImage } from 'imagekitio-react'

export default function Image({src, className, w, h, alt}) {
    const ikiURL = import.meta.env.VITE_IK_URL_ENDPOINT
  return (
    <IKImage urlEndpoint={ikiURL} path={src} alt={alt} className={className} loading='lazy' lqip={{active: true, quality: 20}} width={w} height={h} />
  )
}
