import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioPersonaComponent } from './personas/formulario/formulario.component';
import { LoginService } from './services/LoginService.service';
import { PersonasService } from './services/PersonaService.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    FormularioPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LoginService,
    PersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
