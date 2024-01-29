import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {TitleCasePipe} from "@angular/common";
import {DefaultImagePipe} from "./pipes/default-image.pipe";

interface Personne {
  nom?: string;
  prenom: string;
  age?: number;
  genre: string;
  adresse: string;
  telephone: string;
  email: string;
  photo?: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TitleCasePipe, DefaultImagePipe]
})
export class ProfileComponent {
  person: Personne = {
    nom: 'Doe',
    prenom: 'John',
    age: 25,
    genre: 'Homme',
    adresse: 'Paris',
    telephone: '0123456789',
    email: 'john.doe@gmail.com'
  }
  constructor() { }


}
