import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  userService = inject(UserService);
  users!: User[];
  env = environment;
  ngOnInit(): void {
    this.userService
      .getUsers()
      .pipe()
      .subscribe({
        next: (data) => {
          //  console.log(data);
          this.users = data;
        },
      });
  }
}
