import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',//copier coller la balise dans html d'affichage pour l inclure dedans comme ceci : <app-test></app-test>
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {//implementation d'interfaces

  currentTab: string;
  comments = null;
  
  constructor() { 
    this.currentTab ='1';
  }

  ngOnInit() {
    this.comments = ['super', 'cool', 'mdr'];
  }
  setTab(tab: string): void{
    this.currentTab = tab;
  }
}
