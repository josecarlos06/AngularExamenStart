import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsidebarComponent } from './components/ui/asidebar/asidebar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularExamenStar';
}
