import { Component, ElementRef, ViewChild } from "@angular/core";
import { Persona } from "src/app/entities/persona.model";
import { LoginService } from "src/app/services/LoginService.service";
import { PersonasService } from "src/app/services/PersonaService.service";


@Component({
  selector: "app-formulario-persona",
  templateUrl: "./formulario.component.html",
})
export class FormularioPersonaComponent {

  @ViewChild("nombreInput") nombre: ElementRef
  @ViewChild("apellidoInput") apellido: ElementRef

  constructor(private loginService: LoginService, private personService: PersonasService) {
    personService.saludar.subscribe((indice: number) => {
      alert(`El incide es: ${indice}`)
    })
  }

  addUser() {
    const newUser = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
    this.personService.createNewPerson(newUser)
  }

}
