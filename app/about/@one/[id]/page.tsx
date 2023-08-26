import Button from './Button'

type IUserProps = {
  params: {
    id: number
  }
}

async function getData(id: number) {
  const response = await fetch(`https://dummyjson.com/users/${id}`)

  return response.json()
}

const User: React.FC<IUserProps> = async ({ params }) => {
  const user = await getData(params.id)
  return (
    <div>
      <p>
        <label>
          Name: <span className="uppercase font-bold">{user.firstName}</span>{' '}
        </label>
      </p>
      <p>
        <label>
          Last Name:{' '}
          <span className="uppercase font-bold">{user.lastName}</span>{' '}
        </label>
      </p>
      <p>
        <label>
          Age: <span className="uppercase font-bold">{user.age}</span>{' '}
        </label>
      </p>
      <p>
        <label>
          Gender: <span className="uppercase font-bold">{user.gender}</span>{' '}
        </label>
      </p>
      <p>
        <label>
          Email: <span className="font-bold">{user.email}</span>{' '}
        </label>
      </p>
      <p>
        <label>
          Address: <span className="font-bold">{user.address.address}</span>{' '}
        </label>
      </p>
      <p>
        <label>
          Phone: <span className="font-bold">{user.phone}</span>{' '}
        </label>
      </p>
      <p>
        <Button />
      </p>
    </div>
  )
}

export default User
