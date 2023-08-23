import { Persona } from "../entities/persona.model";

export class PersonasService {

  personas: Persona[] = [
    new Persona("Juan", "Perez"),
    new Persona("Maria", "Gomez")
  ]

  createNewPerson(persona: Persona) {
    this.personas.push(persona)
  }

}
