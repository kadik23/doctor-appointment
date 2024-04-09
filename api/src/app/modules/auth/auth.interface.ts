import { Gender } from "../../../enums";

export type LoginResponse = {
    accessToken?: string | null;
    user?: {};
    error?: string | null ;
}
export type RegisterResponse = {
    fullname?: string;
    email?: string;
    phone?:number;
    gender?: Gender
    biography?:string;
    specializationIds?: string[]
    error?: string | null
}