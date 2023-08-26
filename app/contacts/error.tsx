'use client'

type IErrorContacts = {
  error: Error
}

const ErrorContacts: React.FC<IErrorContacts> = ({ error }) => {
  return <> {error.message} </>
}

export default ErrorContacts
