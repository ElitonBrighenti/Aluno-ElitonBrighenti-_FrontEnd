import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // IMPORTANTE: adicione as diretivas aqui
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  // se você tiver um app.css, pode manter:
  // styleUrls: ['./app.css'],
})
export class AppComponent {}