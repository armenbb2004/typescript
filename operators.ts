interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person //'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'


type User = {
    _id: number
    name: string
    email: string
    created_at: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'created_at'> // 'name' | 'email'

type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id' //error is not present
