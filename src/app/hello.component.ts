import {
  Component, 
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ChangeDetectorRef
 } from '@angular/core';

@Component({
  selector: 'hello',
  template:`
            <p>Hello {{name}}!</p>
            <div id="my-text-container">
              <div class='my-box' *ngFor="let item of EmployeeList">
                {{item.Name}}{{item.IsApplyEllipses}}
              <div>
            <div>
          `,
  styles: [
    `
       h1 { font-family: Lato; }
       .my-box {
         margin: 10px;
         border: 1px solid;
         padding:8px;
         max-height:20px;
       }
    `
    ]
})
export class HelloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
  @Input() name: string;
  public EmployeeList:Array<any> = null
  constructor(private cd:ChangeDetectorRef){

  }
  private GetMockData():Array<any>{
    return [
    {Name:'sample data sample data ',IsApplyEllipses:false},
    {Name:'sample data sample data ',IsApplyEllipses:false},
    {Name:'sample data sample data sample data ',IsApplyEllipses:false},
    {Name:'sample data sample data sample data sample data ',IsApplyEllipses:false},
    {Name:'sample data sample data ',IsApplyEllipses:false},
    {Name:'sample data sample data sample data ',IsApplyEllipses:false}
    ];
  }

  private ManageElipses(){
    const divList = document.querySelectorAll('.my-box');
    console.log(divList.length);
    let i = 0;
    [].forEach.call(document.querySelectorAll('.my-box'), (e) => {
        console.log(e.scrollHeight,':',e.offsetHeight);
        this.EmployeeList[i].IsApplyEllipses = (e.scrollHeight > e.offsetHeight);
        this.cd.detectChanges();
        i = i + 1;
    });
  }

  public FindScrollAndOffsetHeight(event){
    console.log(event.scrollHeight,'-',event.offsetHeight);
  }

  private Init(){
    setTimeout(()=>{
      this.EmployeeList = this.GetMockData();
    },2000)
    this.ManageElipses();
  }

  ngOnChanges(){
     console.log('H-ngOnChanges')
  }

  ngOnInit(){
     console.log('H-ngOnInit');
     this.Init();
  }

  ngDoCheck(){
    console.log('H-ngDoCheck')
  }

  ngAfterContentInit(){
     console.log('H-ngAfterContentInit')
  }

  ngAfterContentChecked(){
     console.log('H-ngAfterContentChecked')
  }

  ngAfterViewInit(){
    console.log('H-ngAfterViewInit'); 
    this.ManageElipses();
  }

  ngAfterViewChecked(){
    console.log('H-ngAfterViewChecked');
    this.ManageElipses();
  }

  ngOnDestroy(){
    console.log('H-ngOnDestroy')
  }
}
