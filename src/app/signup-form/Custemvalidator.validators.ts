import { ValidationErrors, AbstractControl } from "@angular/forms";
import { promise } from "protractor";
import { resolve } from "dns";
import { reject } from "q";

export class Custemvalidator{
   static Checkspace(myntrol:AbstractControl):ValidationErrors|null
    {
        if((myntrol.value as string).indexOf(' ')>=0)
            return {'canothavespace':true};
         return null;
    }
    static usernameMustbeUniqu(Mycotrol:AbstractControl):Promise<ValidationErrors|null>
    {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
               if( Mycotrol.value==="tatek1@gmail.com")
               resolve ({'MustbeUniqu':true});
                  else
               resolve (null);
             },2000); 
        });   
    }
}