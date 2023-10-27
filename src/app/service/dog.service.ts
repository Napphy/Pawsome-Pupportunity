import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Dog } from "../model/dog";
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DogService {
  dogsUrl : string

  constructor(private http: HttpClient) {
      this.dogsUrl = "http://localhost:18081";
   }

   public getDog(id : number): Observable<Dog> {
    return this.http.get<Dog>(this.dogsUrl + '/dog/' + id.toString());
   }

   public getDogs() : Observable<Dog[]> { 
    return this.http.get<Dog[]>(this.dogsUrl + '/dogs/');
   }

   public addDog(dog : Dog): Observable<Object>{
    return this.http.post(`${this.dogsUrl + '/add-dog/'}`, dog)
   }
   
}
