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
  dislikesByMe: any;
  commentsByMe: any;
  constructor(public dataService: DataService) { 
    
    
  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this.articleData = JSON.parse(localStorage.getItem("articleData"));
    this.getLikesMadeByMe(7866);
  }

  getLikesMadeByMe(userId) {
     let counter = 0;
     this.likesByMe = this.getcountOfLikes();
     this.dislikesByMe = this.getcountOfDisikes();
     this.commentsByMe = this.getcountOfComments();
     console.log(this.likesByMe.length);
  }

  getcountOfLikes() {
    let arr = [];
    this.articleData.forEach(function (art) {   
            if(art.likes.some(item => item.authorId == 7866))
            { 
              arr.push(art);
            }
          });
          return arr;
  }

   getcountOfDisikes() {
    let arr = [];
    this.articleData.forEach(function (art) {   
            if(art.dislikes.some(item => item.authorId == 7866))
            { 
              arr.push(art);
            }
          });
          return arr;
  }

   getcountOfComments() {
    let arr = [];
    this.articleData.forEach(function (art) {   
            if(art.comments.some(item => item.authorId == 7866))
            { 
              const commentItem = art.comments.filter(item => item.authorId == 7866)[0];
              console.log(commentItem);
              Object.defineProperty(art, 'timestamp', {
                value: commentItem.timestamp,
                writable: false
              });
              arr.push(art);
            }
          });
          return arr;
  }

  

}