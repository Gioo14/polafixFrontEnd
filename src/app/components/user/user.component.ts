import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    //this.userService.createUser(url, {}).subscribe;
    this.userService
      .getAllUsers()
      .pipe(
        catchError((error) => {
          console.error('Errore durante la chiamata HTTP:', error);
          return throwError(error);
        })
      )
      .subscribe((data: any) => {
        this.users = Object.keys(data).map((key) => {
          return data[key];
        });
        console.log(this.users);
      });
  }
}
