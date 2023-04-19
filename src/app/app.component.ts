import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  include = {
    letters:false,
    numbers:false,
    symbols:false,
    length:0,
  }; 

  password:string="";

  modifyLength(value:string){
    console.log(value);
    

    if(!isNaN(parseInt(value))){
        this.include.length=parseInt(value);
        console.log(typeof(this.include.length));
        console.log("lenght",this.include.length);
        
        
    }

  }
  
  modifyLetters(){
    this.include.letters=!this.include.letters;
  }

  modifyNumbers(){
    this.include.numbers=!this.include.numbers;
  }

  modifySymbols(){
    this.include.symbols=!this.include.symbols;
  }

  buttonClick(){
    this.password="";
    const numbers="123456789";
    const letters="abcdefgğhiıjklmnoöpqrstuüvxyz";
    const symbols="!@#$%^&*()";

    let validChars='';

    if(this.include.letters){
      validChars += letters;
    }

    if(this.include.numbers){
      validChars += numbers;
    }

    if(this.include.symbols){
      validChars += symbols;
    }
    
    console.log(validChars,"vlaid");
    

    for(let i=1;i<=this.include.length;i++){
      this.password += validChars.charAt(Math.floor(Math.random()*validChars.length))
    }

    console.log(this.password,"generated password");
    
  }

  getPassword(){
      return this.password;
  }

}
