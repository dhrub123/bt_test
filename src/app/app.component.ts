import { Component } from '@angular/core';
import { AppService } from './app.service';

export interface Transactions {
    payment_instrument_token: string;
    transaction_type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'braintree';
  data: any=[]
  transactions = {
    payment_instrument_token : '',
    transaction_type : ''
  }

  constructor(public appService: AppService){ }

  ngOnInit() {
    this.TransactionsPage();
  }

  TransactionsPage(){
    try {
      this.appService.getTransactions()
          .subscribe(
            resp =>{
              console.log(resp, "res");
              this.data = resp
            },
            error => {
              console.log(error, "error");
            }
          )
    } catch (error) {
       console.log(error);
    }
  }
}
