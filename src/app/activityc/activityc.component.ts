import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activityc',
  templateUrl: './activityc.component.html',
  styleUrls: ['./activityc.component.css']
})
export class ActivitycComponent implements OnInit {
  
  articleData: any;
  likesByMe: any[];
  dilikesByMe = 0;
  commentsByMe = 0;

  constructor() { 
    this.getArticle();
  }
  userId = 7866;
   getArticle() {
    this.articleData = JSON.parse(localStorage.getItem("articleData"));
  }

  ngOnInit() {
    this.getLikesMadeByMe(7866);
  }

   getLikesMadeByMe(userId) {
     debugger; 
        console.log(userId);
        console.log(this.articleData);


          this.articleData.forEach(function (art) {   
            console.log(art);        
            if(art.likes.some(item => item.authorId == 7866))
            { 
              console.log('contains');
            }
          });

    }

}