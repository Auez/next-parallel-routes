'use client'

type ITwoErrorProps = {
  error: Error
}

const TwoError: React.FC<ITwoErrorProps> = ({ error }) => {
  return <div> {error.message} </div>
}

export default TwoError
