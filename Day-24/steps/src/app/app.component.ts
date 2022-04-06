import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <h1>Routing 101: {{ version }}</h1>
    <!-- <ul>
      <li>
        <a href="batman">Batman</a>  
      </li>
      <li>
        <a href="aquaman">Aquaman</a>  
      </li>
      <li>
        <a href="superman">Superman</a>  
      </li>
      <li>
        <a href="flash">Flash</a>  
      </li>
      <li>
        <a href="wonderwoman">Wonder Woman</a>  
      </li>
      <li>
        <a href="cyborg">Cyborg</a>  
      </li>
      <li>
        <a href="hulk">Hulk</a>  
      </li>
    </ul> -->
    <!-- It is wrong way to use anchor tags as it refreshes the entire pages again and again which causes error. We should use angular navigation instead. -->
    
    
    <!-- <ul>
      <li>
        <a routerLink="batman">Batman</a>  
      </li>
      <li>
        <a routerLink="aquaman">Aquaman</a>  
      </li>
      <li>
        <a routerLink="superman">Superman</a>  
      </li>
      <li>
        <a routerLink="flash">Flash</a>  
      </li>
      <li>
        <a routerLink="wonderwoman">Wonder Woman</a>  
      </li>
      <li>
        <a routerLink="cyborg">Cyborg</a>  
      </li>
      <li>
        <a routerLink="hulk">Hulk</a>  
      </li>
    </ul> -->
    
    <input #qty type="range" (input)="setQuantity = qty.value">
    <ul>
    <li>
        <a [routerLink]="['batman']">Batman without parameter</a>  
      </li>
      <li>
        <a [routerLink]="['batman', setQuantity, version ]">Batman</a>  
      </li>
      <li>
        <a [routerLink]="['aquaman']">Aquaman</a>  
      </li>
      <li>
        <a [routerLink]="['superman']">Superman</a>  
      </li>
      <li>
        <a [routerLink]="['flash']">Flash</a>  
      </li>
      <li>
        <a [routerLink]="['wonderwoman']">Wonder Woman</a>  
      </li>
      <li>
        <a [routerLink]="['cyborg']">Cyborg</a>  
      </li>
      <li>
        <a [routerLink]="['hulk']">Hulk</a>  
      </li>
    </ul>
    
    <hr>
    <router-outlet></router-outlet> 
  `,
  styles: []
})
export class AppComponent {
  title = 'steps';
  version = 0;
  setQuantity = 0;
  constructor(){
    this.version = Math.round(Math.random() * 1000);
  }
}
