import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Starship } from 'src/app/models/starship';
import { StarshipsService } from 'src/app/starships.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {
  starship?:Starship;
  starshipId:number;
  constructor(
    private starshipService:StarshipsService,
    private route: ActivatedRoute
    ) { 
      this.starshipId = route.snapshot.params.id;
    }

  ngOnInit(): void {
    this.showStarshipDetails(this.starshipId);
  }

  
  showStarshipDetails(id:number){
    this.starshipService.getStarship(id)
      .subscribe((data:any) =>
      {
        this.starship = data;
      });
  }

}
