import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})

export class PlanetsComponent implements OnInit {
  planets: any;

  constructor(private service:PlanetsService) { }

  ngOnInit(): void {
    this.service.getPlanets().subscribe(response => {
      this.planets = response;
      console.log(this.planets.results)
    })

  }

}
