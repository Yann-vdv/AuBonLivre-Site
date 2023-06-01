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