import { Gender } from "../../../enums"

export interface patientReq {
    fullname?: string
    gender?: Gender
    age?: number
    phone?: string
    doctor_id?: string
    date?: string
    time?: string
}

export interface appointmentRes {
    id?: string
    patient_id?: string
    doctor_id?: string
    date?: string
    time?: string
    number?: string
    status?: statusEnum
    error?:  string
}

export enum statusEnum  {
    'UNDONEStatus',
    'DONEStatus'
}

