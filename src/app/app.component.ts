import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para futuras directivas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Añadimos esto por buena práctica
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Aquí definimos tus datos para que sea fácil cambiarlos luego
  nombre: string = 'Adriel Delosanto';
  titulo: string = 'Desarrollador Full Stack';
  pasion: string = 'Desarrollador Full Stack con mentalidad de resolución de problemas. Me especializo en crear aplicaciones web robustas y escalables, uniendo un backend eficiente con experiencias de usuario intuitivas y modernas. Mi objetivo es transformar ideas complejas en productos digitales funcionales y de alto impacto.';
}