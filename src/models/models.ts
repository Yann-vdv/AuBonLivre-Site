export type contextUser = {
    logged:boolean
    id:number|null
    token:string|null
}
export type contextAuth = {
    user: contextUser
    login: (data: contextUser) => void
    logout: () => void
}
export type user = {
    id: number
    firstName: string
    lastName: string
    email: string
}

export type book = {
    id: number
    title: string
    author: string
    image: string
    description ? : string
    category ? : string
    condition ? : string
    startingPrice: number
    bid ? : bid
}

export type bid = {
    id: number
    amount: number
    bidderId: number
    bookId: number
    createdAt ? : Date
    endAt: Date
}