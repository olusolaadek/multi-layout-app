import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { SharedModule } from '../shared/shared.module';
import { UserPostComponent } from './user-post/user-post.component';

@NgModule({
  declarations: [UserComponent, UserLayoutComponent, UserPostComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
