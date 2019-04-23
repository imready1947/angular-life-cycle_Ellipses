import { Pipe, PipeTransform } from '@angular/core';  

@Pipe({name: 'myPipe'}) 
export class MyPipe implements PipeTransform { 
   
  transform(value:string): any
  {
    console.log('Pipe-',value);
    return value;
  } 
} 