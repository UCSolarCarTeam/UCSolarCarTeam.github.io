import { Component, OnInit } from '@angular/core';
import { SponsorsService } from '../services/sponsors.service';
import { Sponsor } from 'src/app/model/sponsor.model';

@Component({
  selector: 'app-edit-sponsors',
  templateUrl: './edit-sponsors.component.html',
  styleUrls: ['./edit-sponsors.component.css']
})
export class EditSponsorsComponent implements OnInit {

  sponsors: Sponsor[];
  constructor(private sponsorsService: SponsorsService) { }

  ngOnInit(): void {
    this.sponsorsService.getAllSponsors().subscribe(data => {
      this.sponsors = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Sponsor
        };
      })
    })
  }

  addSponsor(sponsor: Sponsor) {
    this.sponsorsService.addSponsor(sponsor);
  }

  updateSponsor(sponsor: Sponsor) {
    this.sponsorsService.updateSponsor(sponsor);
  }

  deleteSponsor(id: string) {
    this.sponsorsService.deleteSponsor(id);
  }
}
