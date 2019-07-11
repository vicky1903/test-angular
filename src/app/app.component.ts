import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//ce fichier style modifie que ce qui est dans app.component.html, on peux en rajouter , espace dans les crochets
})
export class AppComponent {
  title = 'test';
}
