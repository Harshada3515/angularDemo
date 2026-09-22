import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { IUser } from '../../models/models';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  // userList:any;
  userList: IUser[] = [];
  isLoading: boolean = true;

  constructor(private apiService:ApiServiceService) {
    this.getAllUsers();
  }

  // getAllUsers(){
  //   // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
  //   //     this.userList=res;
  //   //     console.log(this.userList);
  //   // });

  //   this.isLoading=true;
  //   this.http
  //     .get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  //     .subscribe({
  //        next:(res:IUser[])=>{
  //       this.userList=res;
  //       this.isLoading=false
  //       },
  //       error:(err)=>{
  //         console.error(err)
  //         this.isLoading=false
  //       }
  //     });
  // }

  getAllUsers(){
    this.apiService.getAllUsers().subscribe({
         next:(res:IUser[])=>{
        this.userList=res;
        this.isLoading=false
        },
        error:(err)=>{
          console.error(err)
          this.isLoading=false
        }
      });
  }
}
