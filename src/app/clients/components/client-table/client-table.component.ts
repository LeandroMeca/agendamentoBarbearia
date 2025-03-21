import { AfterViewInit, Component, EventEmitter, Inject, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild, output } from '@angular/core';
import { ClientModelTable } from "../../client.models";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatIcon } from "@angular/material/icon";
import { MatPaginator } from "@angular/material/paginator";
import { Subscription } from 'rxjs';
import { SERVICES_TOKEN } from '../../../services/service.token';
import { DialogManagerService } from '../../../services/dialog-manager.service';
import { IDialogManagerService } from '../../../services/idialog-manager.service';

@Component({
  selector: 'app-client-table',
  standalone: true,
  imports: [MatTableModule, MatIcon, MatPaginator],
  templateUrl: './client-table.component.html',
  styleUrl: './client-table.component.scss',
  providers:[{provide: SERVICES_TOKEN.DIALOG, useClass: DialogManagerService}]
})
export class ClientTableComponent implements AfterViewInit, OnChanges, OnDestroy{


  formatPhone(phone: string) {
    return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)} - ${phone.substring(7)}`
  }
  onRequestUpdate(_t44: any) {
    
  }
  delete(_t44: any) {
    
  }

  @Input() clients: ClientModelTable[] = []

  dataSource!: MatTableDataSource<ClientModelTable>

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];

  private dialogManagerServiceSubscriptions?: Subscription;

  @Output() confirmDelete = new EventEmitter<ClientModelTable>();
  @Output() requestUpdate = new EventEmitter<ClientModelTable>();

  constructor(@Inject(SERVICES_TOKEN.DIALOG) private readonly dialogManagerService:IDialogManagerService) {
    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['clients'] && this.clients){
      this.dataSource = new MatTableDataSource<ClientModelTable>(this.clients);
      if(this.paginator){
        this.dataSource.paginator = this.paginator;
      }
    }
  }
  
  ngOnDestroy(): void {
    if(this.dialogManagerServiceSubscriptions){
      this.dialogManagerServiceSubscriptions.unsubscribe();
    }
  }
 
  

}
