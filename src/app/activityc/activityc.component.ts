import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-activityc',
  templateUrl: './activityc.component.html',
  styleUrls: ['./activityc.component.css']
})
export class ActivitycComponent implements OnInit {

  userId = 7866;  
  articleData: any;
  likesByMe: any;

  constructor(public dataService: DataService) { 
    
    
  }

  ngOnInit() {
    this.getArticle();
    this.likesByMe = [];
  }

  getArticle() {
    this.articleData = JSON.parse(localStorage.getItem("articleData"));
    this.getLikesMadeByMe(7866);
  }

  getLikesMadeByMe(userId) {
     let counter = 0;
     this.likesByMe = this.getcount();
     console.log(this.likesByMe.length);
  }

  getcount() {
    let arr = [];
    this.articleData.forEach(function (art) {   
            if(art.likes.some(item => item.authorId == 7866))
            { 
              // console.log('contains');
              arr.push(art);
            }
          });
          // console.log(arr);
          return arr;
  }

}