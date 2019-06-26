import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';
import { User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  msg:string = '';
  
  constructor(private heroservice:HeroService) {
    // this.items = any[];
  }

}
