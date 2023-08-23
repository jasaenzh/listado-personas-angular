import { Component, OnInit } from "@angular/core";
import { Persona } from "../entities/persona.model";
import { PersonasService } from "../services/PersonaService.service";

@Component({
  selector: "app-personas",
  templateUrl: "./personas.component.html"
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = []

  constructor(private personaService: PersonasService) { }

  // Inicializo el array de personas al iniciar la APP => USEEFFECT
  ngOnInit(): void {
    this.personas = this.personaService.personas
  }

}
