import { Observable } from "rxjs";
import { DetailClientResponse, ListClientResponse, SaveClientRequest, updateClientRequest, updateClientResponse } from "./client.models";

export interface IClientService {

    save(request: SaveClientRequest): Observable<updateClientResponse>

    update(id: number, request: updateClientRequest): Observable<updateClientResponse>

    delete(id: number): Observable<void>

    list(): Observable<ListClientResponse[]>

    findById(id: number): Observable<DetailClientResponse>
    
}