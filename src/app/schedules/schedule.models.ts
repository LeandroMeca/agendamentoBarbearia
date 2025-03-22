import { ClientScheduleAppointmentMonthResponse } from "../services/api-client/schedules/schedule.models";

export interface ScheduleAppintementMonthModel {
    year: number;
    month: number;
    scheduleAppointments: ClientScheduleAppointmentModel[]   
}

export interface ClientScheduleAppointmentModel {
    id: number;
    day: number;
    startAt: Date;
    endAt: Date;
    clientId: number;
    clientName: string;
}


export interface SaveScheduleModel {
    startAt?: Date;
    endAt?: Date;
    clientId?: number;
}

export interface SelectClientModel {
    id: number;
    name: string;
}