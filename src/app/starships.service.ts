import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Starship } from './models/starship';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pilot } from './models/pilot';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  @Input()index: number=0;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  getAllStarships():Observable<Starship[]>{
    let host = environment.host;
    return this.http.get<Starship[]>(host)
      .pipe(map((data: any) => {
        return data['results'];
      })
    );
  }

  getStarship(id : number):Observable<Starship>{
    let host = environment.host;
    return this.http.get<Starship>(host + "/" + id)
      .pipe(map((data:any) =>{
        return data;
      }));
  }

  getPilot(id : number):Observable<Pilot>{
    let host = environment.URI_pilot;
    return this.http.get<Pilot>(host + "/" + id)
      .pipe(map((data:any) =>{
        return data;
      }));
  }
}
