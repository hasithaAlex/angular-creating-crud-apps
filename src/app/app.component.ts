import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  /**
   *
   */
  constructor(private http:HttpClient) {
    
  }
  
  ngOnInit(): void {
    //this.of_from();
    //this.map_tap();
    this.share();
  }
  

  //of_from==========================================
  of_from(){
    //===========================================
    console.log("How to make this code in to observable");
    //===========================================
    const person: Person = {
      name: 'hasitha'
    }   
        
    const personObs: Observable<Person> = of(person) 
    personObs.subscribe(data=>console.log(data));
    


    //===========================================
    console.log("How to make string observable");
    //===========================================

    const personObs_02: Observable<string> = of("oppps..") 
    personObs_02.subscribe(data=>console.log(data));



    //===========================================
    console.log("How to make promise into observable");
    //===========================================

    const person_03: Person = {
      name: "Alex"
    }
    const personPromis_03: Promise<Person> = Promise.resolve(person_03); 
    const personObs_03: Observable<Person> = from(personPromis_03)
    personObs_03.subscribe(data=>console.log(data));

  }
  
  

  //map_tap==========================================
  map_tap(){
    const source = of('David');

    //===========================================
    console.log("===== map => ===================");
    //===========================================
    source.pipe(
      map(name=>name.toUpperCase())
    ).subscribe(name=>console.log(name));


    

    //===========================================
    console.log("===== tap => ===================");
    //===========================================
    source.pipe(
      tap(name=>name.toUpperCase())
    ).subscribe(name=>console.log(name));

    
  }



  //share==========================================
  is_loading: boolean = false;
  share(){
    const request = this.getPosts();
    this.loadingSpinner(request);

    request.subscribe(data=>{
      console.log(data);
    });
  }

  private loadingSpinner(observable: Observable<any>) {
    this.is_loading = true;
    observable.subscribe(()=>{
      this.is_loading=false;
      console.log(`{$is_loading} `,this.is_loading);
    });
  }
  
  private getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(share())
  }



  //==========================================

}


interface Person{
  name: string
}

interface Post{
  posts: number,
  id: number,
  title: string,
  body: string
}