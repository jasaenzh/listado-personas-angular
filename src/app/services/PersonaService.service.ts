import { EventEmitter } from "@angular/core";
import { Persona } from "../entities/persona.model";

export class PersonasService {

  personas: Persona[] = [
    new Persona("Juan", "Perez"),
    new Persona("Maria", "Gomez")
  ]

  // Declaro una variable de tipo EventEmitter para que pueda ser usada en cualquier componente
  saludar = new EventEmitter<number>()

  createNewPerson(persona: Persona) {
    this.personas.push(persona)
  }

}
