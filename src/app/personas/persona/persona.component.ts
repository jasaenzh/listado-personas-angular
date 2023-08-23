import { Component, Input } from "@angular/core";
import { Persona } from "../../entities/persona.model";

@Component({
  selector: "app-persona",
  templateUrl: "./persona.component.html"
})
export class PersonaComponent {
  // Enviar parametros desde el padre al hijo
  @Input() persona: Persona;
  @Input() indice: number;
}
