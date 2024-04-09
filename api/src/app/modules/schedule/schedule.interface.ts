import { ErrorResponse } from "../../../interfaces/error";

export const weekDays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

export interface newOneScheduleReq  {
    doctor_id: String,
    date:  String,
    day: String
    start_time:  "08:00",
    end_time:  "16:45",
    available_slots: AvailableSlot[]
}

export interface newSchedulesReq {
    doctor_id: String,
    daysNumber: Number,
    start_time:  "08:00",
    end_time:  "16:45",
    available_slots: AvailableSlot[]
  
}

export interface AvailableSlot {
    start_at: string;
    end_at: string;
}

interface ScheduleDoc {
    _id?: String,
    doctor_id?: String,
    date?: String,
    day?: WeakKey,
    start_time?: String,
    end_time?: String,
    available_slots?: AvailableSlot[]
}
export type ResponseSchedule = ScheduleDoc | ScheduleDoc[] | ErrorResponse


export const available_slots:AvailableSlot[] = [
    { start_at:"8:00"  ,end_at: "8:45" },
    { start_at:"8:45"  ,end_at: "9:30" },
    { start_at:"9:30"  ,end_at: "10:15" },
    { start_at:"10:15" ,end_at: "11:00" },
    { start_at:"11:00" ,end_at: "11:45" },
    { start_at:"13:00" ,end_at: "13:45" },
    { start_at:"13:45" ,end_at: "14:30" },
    { start_at:"14:30" ,end_at: "15:15" },
    { start_at:"15:15" ,end_at: "16:00" },
    { start_at:"16:00" ,end_at: "16:45" },
]