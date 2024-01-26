import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem('user')!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem('user')!).picture;
  email = JSON.parse(sessionStorage.getItem('user')!).email;

  
  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.auth.signOut();
  }
}
