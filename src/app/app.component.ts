import { Component,OnInit,ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { Transaction } from './transaction.model';
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit{
  title = 'braintree';
  dataSource:MatTableDataSource<Transaction>;
  displayedColumns = ['payment_instrument_token', 'transaction_type', 'funding_source',
  'funding_method',  'transaction_source',  'order_reference',  'business_date',
  'response_code',  'authorization_code',  'processor_response_code'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  /**addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }**/

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  transactions: Transaction[];
  constructor(public appService: AppService){ }
  @ViewChild(MatPaginator, {static:false}) paginator:MatPaginator;
  ngOnInit() {
    this.appService.getTransactions().subscribe(
      transac=>{
        this.transactions=transac.transactions;
        this.dataSource= new MatTableDataSource(this.transactions);
        this.dataSource.paginator=this.paginator;
      }
    );   
  }
}
