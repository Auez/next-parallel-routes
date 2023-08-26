import Button from '@/app/about/@one/[id]/Button'

type IContactProps = {
  params: {
    id: number
  }
}

async function getData(id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  return response.json()
}

const Contact: React.FC<IContactProps> = async ({ params }) => {
  const { id } = params
  const user = await getData(id)
  return (
    <div>
      <div>
        Contact: <span className="font-bold">{user.name}</span>
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}

export default Contact
