import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activityc',
  templateUrl: './activityc.component.html',
  styleUrls: ['./activityc.component.css']
})
export class ActivitycComponent implements OnInit {
  userId = 7866;  
  articleData: any;
  likesByMe = 0;

  constructor() { 
    this.getArticle();
  }

  ngOnInit() {
    this.getLikesMadeByMe(7866);
  }

  getArticle() {
    this.articleData = JSON.parse(localStorage.getItem("articleData"));
  }

  getLikesMadeByMe(userId) {
     let counter = 0;
        console.log(userId);
          this.articleData.forEach(function (art) {   
            if(art.likes.some(item => item.authorId == 7866))
            { 
              console.log('contains');
              this.likesByMe++;
              counter++;
            }
          });
          console.log(this.likesByMe);
  }

}