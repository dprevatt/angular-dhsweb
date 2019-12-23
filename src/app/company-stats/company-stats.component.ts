import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import * as _ from 'lodash';
import { first, take, map } from 'rxjs/operators';
import 'rxjs/add/operator/map'

interface CompanyStats {
    Company: string;
    SaleCount: number;
    AvgPerCadet: number
}


@Component({
  selector: 'app-company-stats',
  templateUrl: './company-stats.component.html',
  styleUrls: ['./company-stats.component.css']
})
export class CompanyStatsComponent implements OnInit {

companyStats$: Observable<CompanyStats[]>;
//ng2-Chart ====>
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [];
//ng2-Chart ====>
public isLoading: boolean;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.isLoading = true;
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; //Heroku Cors Proxy
    const url = 'https://dpizzleapi.herokuapp.com/CompanyStats';

      this.http.get<CompanyStats[]>(
      proxyurl + url,
      {
        headers:
          new HttpHeaders(
            {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json'
            }
          )
      }
    ).subscribe(x => {
      this.companyStats$ = x;
      this.SetChartData();
      this.isLoading = false;
    });
  }

  SetChartData(){
    console.log('chart data set!');
    let labelArr = [];
    let dataArr = [];
    let pieColor = []
    this.companyStats$.forEach(stat => {
      labelArr.push(stat.Company)
      dataArr.push(stat.AvgPerCadet)

      pieColor.push({
        backgroundColor: this.random_rgba
      })

    })
    this.pieChartLabels = labelArr
    this.pieChartData = dataArr
    this.pieChartColors = pieColor;
  }

  random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }

}