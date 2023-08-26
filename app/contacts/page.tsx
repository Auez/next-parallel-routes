import Link from 'next/link'

type IContactsProps = {}

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

const Contacts: React.FC<IContactsProps> = async () => {
  const users = await getData()
  return (
    <ul className="flex flex-col gap-y-4">
      {users.map(({ id, name, email, address }: User) => (
        <Link className="block " href={`/contacts/${id}`} key={id}>
          <label className="cursor-pointer hover:text-red-400 hover:underline">
            Name: <span className="font-bold mr-2">{name}</span>
          </label>
          <label className="block">
            Email:
            <span className="text-sky-500 underline mr-2">({email})</span>
          </label>
          <label className="block">
            Address: <span>{address.suite}</span>
          </label>
        </Link>
      ))}
    </ul>
  )
}

export default Contacts
