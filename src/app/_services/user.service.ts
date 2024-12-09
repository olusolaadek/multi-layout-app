import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../_models/user';
import { Post } from '../_models/post';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  currentUserId = signal<number | string | null>(null);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number): Observable<User> {
    this.setCurrentUser(id);
    return this.http
      .get<User>('https://jsonplaceholder.typicode.com/users/' + id)
      .pipe(
        map((user) => {
          if (user) {
            this.currentUserId.set(id);
            this.setCurrentUser(id);
            console.log('USER  : ', user);
            // console.log('USER ID Set: ', user.id);
            // console.log('USER ID Set: ', this.currentUserId());
          }
          return user;
        })
      );
  }
  setCurrentUser(id: number) {
    localStorage.setItem('userId', JSON.stringify(id));
    this.currentUserId.set(id);
  }

  getUserPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }
}
