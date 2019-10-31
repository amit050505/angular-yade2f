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
  onLike(artId) {



  }

  onDeslike(artId) {

  }
  likeCounter(artId) {
    const item = this.articleData.filter(function(v){
    return v.articleId === artId;
      })
    return item[0].likes.length;    
  }

  deslikeCounter(artId) {
    const item = this.articleData.filter(function(v){
    return v.articleId === artId;
      })
    return item[0].dislikes.length;    
  }

  commentsCounter(artId) {
    const item = this.articleData.filter(function(v){
    return v.articleId === artId;
      })
    return item[0].comments.length;  
  }

  onLike(id) {
    let counter = 0;
    let flag = false;
    this.articleData.forEach(childObj => {
      if (id == childObj.articleId) {
        const dislikes = childObj.dislikes;
        dislikes.forEach((dLike, index) => {
          if (dLike.authorId == this.userId) {
            dislikes.splice(index, 1);
          }
        });
        this.articleData[counter].dislikes = dislikes;

        const obj = {
          likesId: "1",
          authorId: this.userId,
          author: this.userName
        };
        childObj.likes.forEach((data, index) => {
          if (data.authorId == this.userId) {
            alert("You alreday liked.");
            flag = true;
          }
        });
        if (!flag) {
          this.articleData[counter].likes.push(obj);
        }
      }
      counter++;
    });

    this.setLocalStorage();
  }

  onDisLike(id) {
    let counter = 0;
    let flag = false;
    this.articleData.forEach(childObj => {
      if (id == childObj.articleId) {
        const likes = childObj.likes;
        likes.forEach((dLike, index) => {
          if (dLike.authorId == this.userId) {
            likes.splice(index, 1);
          }
        });
        this.articleData[counter].likes = likes;

        const obj = {
          likesId: "1",
          authorId: this.userId,
          author: this.userName
        };
        childObj.dislikes.forEach((data, index) => {
          if (data.authorId == this.userId) {
            alert("You alreday disliked.");
            flag = true;
          }
        });
        if (!flag) {
          this.articleData[counter].dislikes.push(obj);
        }
      }
      counter++;
    });
    this.setLocalStorage();
  }

}