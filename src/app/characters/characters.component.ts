import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTERS } from '../character-set';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters = CHARACTERS;
  selectedRow;
  result;
  constructor() {
  }

  ngOnInit() {
    this.selectedRow = [];
    this.result = [];
  }

  setClickedRow = function(index){
    //console.log('Adding ' + index);
    if(!this.selectedRow.includes(index)) {
      if(this.selectedRow.length > 1) {
        this.selectedRow[0] = this.selectedRow[1];
        this.selectedRow[1] = index;
      }
      else {
        this.selectedRow.push(index);
      }
    }

    if(this.selectedRow.length > 1) {
      this.getSplit();

    }
    //console.log('Array: ' + this.selectedRow);
  }

  getSplit = function() {

    this.result = [];
    for(let i = 0; i < this.characters.length; i++) {
      //console.log('comparing ' + this.characters[this.selectedRow[0]].matchups[i] + ' with ' + this.characters[this.selectedRow[1]].matchups[i] );
      if(this.characters[this.selectedRow[0]].matchups[i]  > this.characters[this.selectedRow[1]].matchups[i] )
        this.result.push(this.selectedRow[0]);
      else if(this.characters[this.selectedRow[0]].matchups[i]  < this.characters[this.selectedRow[1]].matchups[i] )
          this.result.push(this.selectedRow[1]);
      else
          this.result.push(-1);
    }

    //console.log('result = ' + this.result);
  }

}
