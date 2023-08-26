interface NavLink {
  title: string
  href: string
}

interface User  {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: number | string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

interface UserParallel  {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: number,
    username: string | number,
    password: string | number,
    birthDate: number,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor:string,
    hair: {
      color: string,
      type: string,
    }
    domain:  string,
    ip: number,
    address: {
      address: string | number,
      city: string,
    }
    coordinates: {
      lat: number,
      lng: number,
    }
    postalCode: number,
    state: string,
}
