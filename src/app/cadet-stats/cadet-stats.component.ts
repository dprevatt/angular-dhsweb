import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import * as _ from 'lodash';
import { first, take, map } from 'rxjs/operators';
import 'rxjs/add/operator/map'

interface CadetStats {
    Cadet: string;
    Company: string;
    SaleCount: number;
}



@Component({
  selector: 'app-cadet-stats',
  templateUrl: './cadet-stats.component.html',
  styleUrls: ['./cadet-stats.component.css']
})
export class CadetStatsComponent implements OnInit {

cadetStats$: Observable<CadetStats[]>;

  constructor(private http:HttpClient) { }

  ngOnInit() {

    const proxyurl = "https://cors-anywhere.herokuapp.com/"; //Heroku Cors Proxy
    const url = 'https://dpizzleapi.herokuapp.com/CadetStats';

      this.http.get<CadetStats[]>(
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
      this.cadetStats$ = x;
    });
  }

}