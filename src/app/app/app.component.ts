import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from '../core/layout/layout.module';
import { PrincipalModule } from '../features/principal/principal.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutModule, PrincipalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto_frontEnd';
}
