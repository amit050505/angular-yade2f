import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homec',
  templateUrl: './homec.component.html',
  styleUrls: ['./homec.component.css']
})
export class HomecComponent implements OnInit {

  constructor(public dataService: DataService) {}
  articleData: any;
  userId = 10;
  userName = "admin";
  message: any;


  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this.articleData = JSON.parse(localStorage.getItem("articleData"));
  }

  setLocalStorage() {
    localStorage.setItem("articleData", JSON.stringify(this.articleData));
  }

}