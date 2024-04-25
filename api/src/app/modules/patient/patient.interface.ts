import { Gender } from "../../../enums"

export interface patientRes{
    id?:string
    fullname?: string
    gender?: Gender
    age?: string
    phone?: string
    error?:  string
}

