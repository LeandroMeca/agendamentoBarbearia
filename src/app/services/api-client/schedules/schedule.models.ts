 
 
 export interface ScheduleAppointmentMonthResponse {
    year: number;
    month:number;
    scheduledAppointmants: ClientScheduleAppointmentMonthResponse[]
 }

 export interface ClientScheduleAppointmentMonthResponse {
    id: number;
    day: number;
    startAt: Date;
    endAt: Date;
    clientId: number;
    clientName: string;
 }


 export interface SaveScheduleResponse {
    id: number;
    startAt: Date;
    endAt: Date;
    clientId: number;
 }

 export interface SaveScheduleRequest{
    endAt: Date;
    clientId: number;
 }

