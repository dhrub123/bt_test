import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }
  getTransactions(){
    return this.http.get("https://localhost:8443/payment/v1/transactions?" 
                          + "fromDate=20181116&toDate=20181116&status=REFUND,AUTH_CAP,VOID"
                          + "&paymentProcessor=BRAINTREE&fundingSource=braintree"
                          + "&startIndex=1&limit=1000&currency=AUD");
  }
}
