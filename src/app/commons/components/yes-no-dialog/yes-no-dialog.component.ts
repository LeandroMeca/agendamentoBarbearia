import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { MatButton, MatButtonModule } from "@angular/material/button";


@Component({
  selector: 'app-yes-no-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './yes-no-dialog.component.html',
  styleUrl: './yes-no-dialog.component.scss'
})
export class YesNoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) readonly data: any){

  }
}
