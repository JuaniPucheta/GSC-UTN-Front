import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from './subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private subscriptionUrl = 'url_api'; //* posiblemente api/subscriptions

  constructor(private http: HttpClient) { }

  crearSuscripcion(subscription: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(this.subscriptionUrl, subscription);
  }

  buscarSuscripcionPorId(id: number): Observable<Subscription> {
    return this.http.get<Subscription>(`${this.subscriptionUrl}/${id}`);
  }

  buscarSuscripciones(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.subscriptionUrl);
  }

  borrarUnaSuscripcion(id: number): Observable<Subscription> {
    return this.http.delete<Subscription>(`${this.subscriptionUrl}/${id}`);
  }
}
