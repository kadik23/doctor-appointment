import { Gender } from "../../../enums"

export interface patientRes{
    id?:string
    fullname?: string
    gender?: Gender
    age?: number
    phone?: string
    error?:  string
}

