'use client'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
type IOneProps = {
  users: UserParallel[]
}

const One: React.FC<IOneProps> = () => {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const url = 'https://dummyjson.com/users'

      try {
        const resp = await fetch(url)
        const data = await resp.json()
        const users = data.users
        setData(users)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {data &&
        data.map((user: UserParallel) => {
          const isActive =
            pathname === `/about/${user.id}` ? 'text-red-400' : ''
          return (
            <Link
              className={`${isActive}`}
              href={`/about/${user.id}`}
              key={user.id}
            >
              <p>{user.firstName}</p>
            </Link>
          )
        })}
    </div>
  )
}

export default One
