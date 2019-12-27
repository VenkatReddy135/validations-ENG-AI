import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ListData;
  RawData: any;
  constructor(private DataDetails: DetailsService) { }
  //Fetching the data from Api and timer for 10Seconds
  getDetails() {
    interval(10000).pipe(startWith(0),
      switchMap(() => this.DataDetails.Details()))
      .subscribe(Response => {
      this.ListData = Response['hits']
        console.log(Response)
      })
     }
  //On selecting Each row displaying the raw json data
  Select(selectRow) {
    this.RawData = JSON.stringify(selectRow)
  }
  ngOnInit() {
    this.getDetails();
  }
}
