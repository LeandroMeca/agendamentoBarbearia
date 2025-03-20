import { Component, Inject } from '@angular/core';
import { IClientService } from '../../services/api-client/clients/iclient.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { SERVICES_TOKEN } from '../../services/service.token';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.scss',
  providers: [
    {provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService}
  ]
})
export class ListClientsComponent {
  constructor(@Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: IClientService){}
}
