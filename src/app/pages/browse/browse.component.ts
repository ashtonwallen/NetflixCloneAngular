import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BannerComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem('user')!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem('user')!).picture;
  email = JSON.parse(sessionStorage.getItem('user')!).email;

  constructor() { }

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.auth.signOut();
  }
}
