import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
  ],
})
export class ProfileModule { }
