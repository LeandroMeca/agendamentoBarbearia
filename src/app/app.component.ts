import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CardHeaderComponent } from "./commons/components/card-header/card-header.component";
import { Subscription, filter, map } from 'rxjs';
import { MenuBarComponent } from './commons/components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardHeaderComponent, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'barber-shop-ui';


  private routeSubscrition?: Subscription;

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute){
  }

  ngOnDestroy(): void{
   if(this.routeSubscrition){
    this.routeSubscrition.unsubscribe()
   }
  }

  ngOnInit(): void{
    this.routeSubscrition = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() =>  this.getRouteTitle(this.activatedRoute))
    ).subscribe(title => this.title = this.title)
  }


  private getRouteTitle(route: ActivatedRoute): string{
    let child = route;
    while (child.firstChild) {
      child = child.firstChild;
    }
    return child.snapshot.data['title'] || 'Default Title';
  }
 

}
