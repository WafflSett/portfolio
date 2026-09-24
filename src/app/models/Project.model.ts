export default interface Project {
    title:string,
    status: string,
    link:string,
    description: string,
    date:string,
    thumbnail: string,
    languages: Lang[]
}

interface Lang {
    title:string,
    color:string,
    link:string
}