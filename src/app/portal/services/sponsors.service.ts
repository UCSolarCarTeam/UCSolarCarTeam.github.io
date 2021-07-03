import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { Sponsor } from 'src/app/model/sponsor.model';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  public addSponsorForm: FormGroup
  
  constructor(private firestore: AngularFirestore) {
    this.addSponsorForm = new FormGroup({
      sponsorName: new FormControl(''),
      sponsorLink: new FormControl(''),
      sponsorLogo: new FormControl(''),
      sponsorTier: new FormControl('')
    })
  }

  addSponsor(sponsor: Sponsor) {
    return this.firestore.collection('sponsors').add(sponsor);
  }

  updateSponsor(sponsor: Sponsor) {
    delete sponsor.id;
    this.firestore.doc('sponsors/' + sponsor.id).update(sponsor);
  }

  deleteSponsor(sponsorId: string) {
    this.firestore.doc('sponsors/' + sponsorId).delete();
  }

  getAllSponsors() {
    return this.firestore.collection('sponsors').snapshotChanges();
  }
}
