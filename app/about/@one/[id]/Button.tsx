'use client'

import { useRouter } from 'next/navigation'

type IButtonProps = {}

const Button: React.FC<IButtonProps> = () => {
  const router = useRouter()
  return (
    <button
      className="mt-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={() => router.back()}
    >
      Back
    </button>
  )
}

export default Button
