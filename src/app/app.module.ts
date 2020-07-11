import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { LocalComponent } from './components/local/local.component';
import { WorldComponent } from './components/world/world.component';
import { SoleadoComponent } from './components/climas/soleado/soleado.component';
import { LluviaComponent } from './components/climas/lluvia/lluvia.component';
import { NieveComponent } from './components/climas/nieve/nieve.component';
import { LunaLluviaComponent } from './components/climas/luna-lluvia/luna-lluvia.component';
import { SolLluviaComponent } from './components/climas/sol-lluvia/sol-lluvia.component';
import { DiaPocoNubladoComponent } from './components/climas/dia-poco-nublado/dia-poco-nublado.component';
import { NochePocoNubladoComponent } from './components/climas/noche-poco-nublado/noche-poco-nublado.component';
import { NubladoComponent } from './components/climas/nublado/nublado.component';
import { NieblaComponent } from './components/climas/niebla/niebla.component';
import { TormentaComponent } from './components/climas/tormenta/tormenta.component';
import { LunaComponent } from './components/climas/luna/luna.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LocalComponent,
    WorldComponent,
    SoleadoComponent,
    LluviaComponent,
    NieveComponent,
    LunaLluviaComponent,
    SolLluviaComponent,
    DiaPocoNubladoComponent,
    NochePocoNubladoComponent,
    NubladoComponent,
    NieblaComponent,
    TormentaComponent,
    LunaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
