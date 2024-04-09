import prisma from "../../../shared/prisma";
import { Request, Response } from "express";
import { ResponseSchedule, newOneScheduleReq, available_slots, weekDays, newSchedulesReq } from "./schedule.interface";

const createOneSchedule = async (req: newOneScheduleReq): Promise<ResponseSchedule> => {
    try{
            if (req.day == 'friday'){
                return {error: 'Friday is not available for work'}
            }
            const { start_time = "08:00", end_time = "16:45", ...rest } = req;
            const newScheduleData = { ...rest, start_time, end_time,available_slots };
            const schedule = await prisma.Schedule.create({
                data: newScheduleData
            })
            console.log(req.day)
            return schedule;
    }catch(err){
        console.log("Error creating schedule:", err)
        return {error : err as string} 
    }
}

const createSchedules = async (req: newSchedulesReq): Promise<ResponseSchedule> => {
    try{
            // if (req.day == 'friday'){
            //     return {error: 'Friday is not available for work'}
            // }
            const { start_time = "08:00", end_time = "16:45", ...rest } = req;
            const getSchedules = await prisma.Schedule.findMany({
                where:{doctor_id : rest.doctor_id}
            })
            const schedulesNumber = getSchedules.length
            const currentDate = new Date();
            // Get the day of the week (0-6, Sunday = 0)
            var dayOfWeek = currentDate.getDay();
            var schedule: any[] = []
            var daysNumber = rest.daysNumber as number
            if(daysNumber>6){ rest.daysNumber = 6}
            if (schedulesNumber == 0) {
                var newDateString = currentDate.toLocaleDateString();
                for(let i = 0;i<=daysNumber;i++ ){
                    const weekdayName = weekDays[dayOfWeek % 7]  ;
                    if(weekdayName !== 'friday'){
                        const newScheduleData = { doctor_id:rest.doctor_id,date: newDateString,day: weekdayName,start_time, end_time,available_slots };
                        schedule.push ( await prisma.Schedule.create({
                            data: newScheduleData
                        }))
                    }
                    currentDate.setDate(currentDate.getDate() + 1);
                    newDateString = currentDate.toLocaleDateString();
                    //Increment and convert dayOfWeek to weekday name
                    dayOfWeek++
                }
                return schedule;
            }
            // return {error: 'something went wrong'}
            else if(schedulesNumber > 5 ){
                return { error: 'Something went wrong'}
            }else{
                const daysLoop = 6 - schedulesNumber
                const LastSchedule= getSchedules[schedulesNumber - 1] 
                // for(let i=1;i<=schedulesNumber+1;i++){
                    currentDate.setDate(currentDate.getDate() + (schedulesNumber -1) );
                // }
                var weekdayName = LastSchedule.day
                var dayOfWeekNumber = weekDays.indexOf(weekdayName)
                for(let i = 0;i<daysLoop;i++ ){
                    currentDate.setDate(currentDate.getDate() + 1);
                    newDateString = currentDate.toLocaleDateString();
                    dayOfWeekNumber++
                    weekdayName = weekDays[dayOfWeekNumber % 7]  ;
                    if(weekdayName !== 'friday'){
                        const newScheduleData = { doctor_id:rest.doctor_id,date: newDateString,day: weekdayName,start_time, end_time,available_slots };
                        schedule.push ( await prisma.Schedule.create({
                            data: newScheduleData
                        }))
                    }
                }
                return schedule;
            }
    }catch(err){
        console.log("Error creating schedule:", err)
        return {error : err as string} 
    }
}

const getSchedules = async (_id: String): Promise<ResponseSchedule> => {
    try{
        const getSchedules = await prisma.Schedule.findMany({
            where:{doctor_id : _id}
        })
        return getSchedules
    }catch(err){
        console.log("Error creating schedule:", err)
        return {error : err as string} 
    }
}

export const scheduleService = {
    createOneSchedule,
    createSchedules,
    getSchedules
}