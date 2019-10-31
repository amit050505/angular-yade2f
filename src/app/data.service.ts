import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  /* public getJSON(): Observable<any> {
    return this.http.get("../../article.json");
  }*/

  public setDataToLocal() {
    if (localStorage.getItem("articleData") != '') {
      return true;
    }
    const data = [
      {
        articleName: "Propel yourself, chart your own destiny",
        articleId: "1",
        author: "Datta Sanghvi",
        authorId: 343,
        description: "Now, astrology is simply a way of plotting certain possibilities in a person’s life. If i look at you, based on your karmic trajectory which is immediately apparent to me, it is possible for me to say, “OK, given your natural tendencies, this is the direction your life will take.” There is nothing profound about this. Astrology is simply a possible road map for your life that takes into account your tendencies and inherited traits.",
        dislikes: [
          {
            likesId: 1,
            author: "Sadhguru Jaggi Vasudev",
            authorId: 1
          },
          {
            likesId: "2",
            authorId: 2,
            author: "Reddy"
          },
          {
            likesId: "2",
            authorId: 10,
            author: "admin"
          }
        ],
        imagepath: "src/images/noImage.jpg",
        comments: [
           {
            commentsId: "1",
            authorId: 3,
            description: "Write something of this sort on Mohammad, his eife, Ayesha, the Khalifas etc anc then see what happens to you.",
            author: "Nikki Shukla"
          },
          {
            commentsId: "2",
            authorId: 4,
            description: "Why dont you write about other religions God for a change?",
            author: "Sam jones"
          }
        ],
        likes: [
          {
            likesId: "1",
            authorId: 1,
            author: "John"
          },
          {
            likesId: "2",
            authorId: 2,
            author: "Reddy"
          }
        ]
      },
      {
        articleName: "Ideology of terror outlives ideologue",
        articleId: "2",
        description: "",
        dislikes: [
          {
            likesId: "1",
            authorId: 3,
            author: "Nikki"
          },
          {
            likesId: "2",
            authorId: 1,
            author: "John"
          }
        ],
        imagepath: "src/images/noImage.jpg",
        comments: [
          {
            commentsId: "1",
            authorId: 3,
            description: "Write something of this sort on Mohammad, his eife, Ayesha, the Khalifas etc anc then see what happens to you.",
            author: "Adam levine"
          }
        ],
        likes: [
          {
            likesId: "1",
            authorId: 1,
            author: "John"
          },
          {
            likesId: "2",
            authorId: 2,
            author: "Reddy"
          }
        ]
      }
    ];

    localStorage.setItem('articleData', JSON.stringify(data));
  }
}
