import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IAuth } from '../../interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user!: null;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('accessToken') || '{}');
  }
}
