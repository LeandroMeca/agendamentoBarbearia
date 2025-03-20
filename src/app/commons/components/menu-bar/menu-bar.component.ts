import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MatMenuModule,MatMenu, MatButton,MatMenuItem,MatMenuTrigger],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

  constructor(private readonly router: Router){

  }

  navigateTo(path: string){
    this.router.navigate([path])
  }
}
