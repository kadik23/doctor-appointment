export type DoctorDoc = {
    id?: string;
    email?: string;
    fullname?: string;
    password?: string;
    phone?: string;
    gender?: string;
    biography?: string;
    rating?: string;
    image_profile?: string;
    specializationIDs?: Specialization[];
}

type Specialization = {
    name: string;
    description: string;
}

type error = {error:string}

export type DoctorsRes = DoctorDoc | error
export type DoctorRes = DoctorDoc[] | error

export type DoctorFiltersData = {'fullname':string} | {'specialization':string} | {'rating':string} | null
export type DoctorOptions = ['sortBy', 'sortOrder']

export const DoctorSearchableFields = ['fullname', 'specialization','rating']