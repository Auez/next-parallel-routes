'use client'

type IPhotoError = {
  error: Error
}

const PhotoError: React.FC<IPhotoError> = ({ error }) => {
  return <div> {error.message} </div>
}

export default PhotoError
