import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.css']
})
export class MovieComponent implements OnInit {

  disableInput=true;
  disableButton=true;
  displayList=false;
  //cast="";
  cast1="";
  cast2="";
  cast3="";
  cast4="";
  cast5="";

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{this.disableInput=false;},4000)
  }

  readValue(event:any){
    //this.cast=(<HTMLInputElement>event.target).value;
    if(this.cast1!=='' && this.cast2!=='' && this.cast3!=='' && this.cast4!=='' && this.cast5!==''){
      this.disableButton=false;
    }
  }

  addCasts(){
    alert(this.cast1+","+this.cast2+","+this.cast3+","+this.cast4+","+this.cast5);
    this.displayList=true;
  }

  removeCasts(){
    this.cast1="";
    this.cast2="";
    this.cast3="";
    this.cast4="";
    this.cast5="";
    this.disableButton=true;
    this.displayList=false;
  }

}
