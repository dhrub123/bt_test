import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { Transaction } from './transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'braintree';
  dataSource = new TransactionDataSource(this.appService);
  displayedColumns = ['payment_instrument_token', 'transaction_type'];
  constructor(public appService: AppService){ }

  ngOnInit() {
  }
}

export class TransactionDataSource extends DataSource<any> {
  constructor(public appService: AppService){
    super();
   }
   connect(): Observable<Transaction>{
      return this.appService.getTransactions();
   } disconnect(){}
}
