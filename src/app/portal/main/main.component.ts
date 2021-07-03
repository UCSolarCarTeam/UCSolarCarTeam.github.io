import { Component, OnInit } from '@angular/core';
import { SponsorsService } from '../services/sponsors.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private sponsorsService: SponsorsService) {
    this.sponsorsService.getAllSponsors();
  }

  ngOnInit(): void {
  }

}
