import {PipeTransform, Pipe} from '@angular/core';
import { User } from './app/app.component';

@Pipe(
    {
    name:'sorting'
    }
)

export class SortingPipe implements PipeTransform{
    transform(value:User[]) {
        let copy:User[]=[];
        for(let user of value){
            copy.push(user);                            //copy of user array is created to avoid change in original array.
        }


        let result:User[]=copy.sort(
            (u1,u2)=>{                                      //will sort the user on the basis of name.
                let compName=u1.name.localeCompare(u2.name);
                return compName;
            }
        );
        return result;
        /*
        let result1:User[]=copy.sort(
            (u1,u2)=>{
                return u1.id-u2.id;     //will sort the user on the basis of id.
            }
        );
        
        return result1;
    */    
    }

    

    }
