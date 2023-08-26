import Image from 'next/image'

type IPhotoProps = {
  params: {
    id: number
  }
}

async function getData(id: number) {
  const response = await fetch(`https://dummyjson.com/users/${id}`)

  return response.json()
}

const Photo: React.FC<IPhotoProps> = async ({ params }) => {
  const user = await getData(params.id)
  return (
    <div>
      <Image
        src={user.image}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  )
}

export default Photo
