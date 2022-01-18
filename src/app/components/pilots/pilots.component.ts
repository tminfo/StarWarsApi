import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pilot } from 'src/app/models/pilot';
import { StarshipsService } from 'src/app/starships.service';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {

  pilot?:Pilot;
  pilotId:number;
  constructor(
    private starshipService:StarshipsService,
    private route: ActivatedRoute
  )
  { 
    this.pilotId = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.showPilotDetails(this.pilotId);
  }

  
  showPilotDetails(id:number){
    this.starshipService.getPilot(id)
      .subscribe((data:any) =>
      {
        this.pilot = data;
      });
  }
}
