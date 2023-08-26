'use client'

type IOneError = {
  error: Error
}

const OneError: React.FC<IOneError> = ({ error }) => {
  return <div> {error.message} </div>
}

export default OneError
