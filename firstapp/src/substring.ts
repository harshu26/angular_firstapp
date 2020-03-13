import {PipeTransform, Pipe} from '@angular/core';

@Pipe(
    {
    name:'substring'
    }
)

export class SubStringPipe implements PipeTransform{
    transform(value: string,... args:number[]) {
        if(args.length==0)
            return;
         let start=args[0];
         if(args.length==1){
             let result=value.substring(start);
             return result;
         }
         let end=args[1];
         let result=value.substring(start,end);
         return result;   
    }
    
    
}