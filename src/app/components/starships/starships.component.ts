import { Component, OnInit } from '@angular/core';
import { StarshipsService } from 'src/app/starships.service';
import { pipe } from 'rxjs';
import { map} from 'rxjs/operators';
import { Starship } from 'src/app/models/starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starshipUrl?:number;
  starships: Starship[] = [];
  constructor(
    private starshipService:StarshipsService
  ) { }

  ngOnInit(): void {
    this.showAllStarships();
  }

  showAllStarships(){
    this.starshipService.getAllStarships()
      .subscribe((data:any) =>
      {
        this.starships = data;console.log(data)
      });
  }
  sendStarshipUrl(url:any):number{
    return parseInt(url.substring(url, url.length - 1), 11);
  }
}
