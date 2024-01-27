import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
declare var google : any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '119772922037-57s3klg3ag5mgugagv2vr7vglur3839p.apps.googleusercontent.com',
      callback: (response: any) => {
        this.handleLogin(response)
      }
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 50
    })
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any) {
    if (response) {
      //decrypt token
      const payLoad = this.decodeToken(response.credential)
      
      //handle in session
      sessionStorage.setItem('user', JSON.stringify(payLoad));

      //navigate to homepage
      this.router.navigate(['/browse']);
    }
  }
}
