import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Dog } from 'src/app/model/dog';
import { DogService } from 'src/app/service/dog.service';


@Component({
 selector: 'app-form',
 templateUrl: './form.component.html',
 styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 formData: Dog = new Dog();

 constructor(private dogService: DogService,
    private router: Router,
    ) {}

 ngOnInit(): void {
      
 }

 onFileChange(event: any) {
  const file = event.target.files[0]; // Get the selected file from the input element
  if (file) {
    this.convertToBase64(file);
  }
}

convertToBase64(file: File) {
  const reader = new FileReader();

  reader.onload = () => {
    const base64String = reader.result as string;
    const base64ImageData = base64String.split(',')[1];
    this.formData.dogImage = base64ImageData;
  };

  reader.readAsDataURL(file);
}

  onSubmit() {
    console.log(this.formData.dogImage);
    this.saveDog();
  }  


 saveDog(){
    this.dogService.addDog(this.formData).subscribe( data => {
      console.log(data);
    },
    error => console.log(error));
 }

 
}