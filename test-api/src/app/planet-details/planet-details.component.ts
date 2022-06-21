import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetsService } from '../services/planets.service';


@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  planets: any;
  id:any;

  constructor(private _Activatedroute:ActivatedRoute, private service:PlanetsService) { }



  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id')
    console.log(this.id)

    this.service.getPlanets().subscribe(response => {
      this.planets = response;
      console.log(this.planets.results)
    })
  }
}
