import { Component, Inject } from '@angular/core';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { IClientService } from '../../services/api-client/clients/iclient.service';
import { SERVICES_TOKEN } from '../../services/service.token';

@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.scss',
  providers: [
    {provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService}
  ]
})
export class EditClientComponent {
  constructor(@Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: IClientService){}
}
