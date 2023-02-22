export interface signUp{
    name:string,
    email:string,
    password:string
}

export interface login{
    email:string,
    password:string
}

export interface item{
    name:string,
    price:number,
    origin:string,
    description:string,
    url:string,
    category:string,
    id:number
}