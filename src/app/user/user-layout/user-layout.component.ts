import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { Post } from '../../_models/post';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css',
})
export class UserLayoutComponent implements OnInit {
  route = inject(ActivatedRoute);
  userService = inject(UserService);
  id!: number | string | null;
  userPosts: Post[] | undefined;

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];

    // ?? this.route?.firstChild?.snapshot.params['id'];
    this.route.firstChild?.paramMap
      .pipe(
        map((par) => {
          console.log('PAR userId: ', par.get('userId'));
          console.log('PAR postId: ', par.get('postId'));
          // this.setCurrentUser();
          const userId = par.get('userId') ?? localStorage.getItem('userId');
          this.id = userId;

          this.getUserPosts();
          console.log('Current user Id: ', this.userService.currentUserId());
          return par;
        })
      )
      .subscribe({
        next: (params) => {
          console.log(params);
          console.log('Current user Id: ', this.userService.currentUserId());
        },
      });
  }
  getUserPosts() {
    console.log('Get User ID: ', this.id);
    this.userService
      .getUserPosts(Number(this.id))
      .pipe()
      .subscribe({
        next: (data) => {
          // console.log('User posts: ', data);
          this.userPosts = data;
        },
      });
  }

  setCurrentUser() {
    const userId = localStorage.getItem('userId');

    if (!userId) return;

    const user = userId;
    this.userService.currentUserId.set(user);
  }
}
