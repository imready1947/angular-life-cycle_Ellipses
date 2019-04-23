import { 
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
 } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy   {
  name = 'Angular';


  ngOnChanges(){
     console.log('A-ngOnChanges')
  }

  ngOnInit(){
     console.log('A-ngOnInit')
  }

  ngDoCheck(){
    console.log('A-ngDoCheck')
  }

  ngAfterContentInit(){
     console.log('A-ngAfterContentInit')
  }

  ngAfterContentChecked(){
     console.log('A-ngAfterContentChecked')
  }

  ngAfterViewInit(){
     console.log('A-ngAfterViewInit')
  }

  ngAfterViewChecked(){
    console.log('A-ngAfterViewChecked')
  }

  ngOnDestroy(){
    console.log('A-ngOnDestroy')
  }
}
