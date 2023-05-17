import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-serie-user',
  templateUrl: './serie-user.component.html',
  styleUrls: ['./serie-user.component.css'],
})
export class SerieUserComponent {
  constructor(private userService: UserService) {}
  ngOnInit(): void {}
}
