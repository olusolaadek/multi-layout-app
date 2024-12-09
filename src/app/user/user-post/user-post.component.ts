import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../_models/post';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.css',
})
export class UserPostComponent {
  userService = inject(UserService);

  userPost: Post | undefined;
  route = inject(ActivatedRoute);

  id!: number | string | null;
  userId!: number | string | null;

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];

    this.route.paramMap.subscribe((params) => {
      // console.log(params);
      this.id = params.get('postId');
      this.userId = params.get('userId');
      this.getUserPost();
      // console.log('route.snapshot.params: ', this.route.snapshot.params);
      // console.log('Id: ', this.id);
    });
  }
  getUserPost() {
    this.userService
      .getPost(Number(this.id))
      .pipe()
      .subscribe({
        next: (data) => {
          // console.log('USER POST: ', data);
          this.userPost = data;
        },
      });
  }
}
