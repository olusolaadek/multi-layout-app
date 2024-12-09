import { Component, inject } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../_models/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userService = inject(UserService);
  user: User | undefined;
  userPosts: Post[] | undefined;
  route = inject(ActivatedRoute);

  id!: number | string;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    this.userService.setCurrentUser(+this.id);
    // this.route.paramMap.subscribe((params) => {
    //   console.log(params);
    //   console.log(this.route.snapshot.data);
    // });
    this.getUserDetailsAndPost();
  }

  getUserDetailsAndPost() {
    this.userService
      .getUser(+this.id)
      .pipe()
      .subscribe({
        next: (data) => {
          // console.log(data);
          this.user = data;
        },
      });
  }
}
