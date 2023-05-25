import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
  ],
})
export class ProfileModule { }
