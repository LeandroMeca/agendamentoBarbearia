import { Component } from '@angular/core';

@Component({
  selector: 'app-schedules-month',
  standalone: true,
  imports: [],
  templateUrl: './schedules-month.component.html',
  styleUrl: './schedules-month.component.scss'
})
export class SchedulesMonthComponent {
monthShedule: any;
clients: any;
onDateChange($event: Event) {
throw new Error('Method not implemented.');
}
onConfirmDelete($event: Event) {
throw new Error('Method not implemented.');
}
onScheduleClient($event: Event) {
throw new Error('Method not implemented.');
}

}
