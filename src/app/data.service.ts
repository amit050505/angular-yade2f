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
        poster: "https://postmediavancouversun2.files.wordpress.com/2010/03/6747-art-sd_fate.jpg?quality=80&strip=all&w=460&h=341&crop=1",
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
            authorId: 7866,
            author: "User45662"
          }
        ]
      },
      {
        articleName: "Ideology of terror outlives ideologue",
        articleId: "2",
        author: "mark anthony",
        authorId: 348,
        poster: "https://www.ineteconomics.org/uploads/featured/split-brain-2.jpg",
        description: "Prime Minister Narendra Modi’s official visit to Saudi Arabia comes at a pivotal moment for New Delhi and Riyadh. For long, ties between the two sides have been akin to a buyer-seller relationship with Saudi oil fuelling the Indian economy. But today the Saudi leadership, especially under Crown Prince Mohammed bin Salman (MBS), is looking to diversify its engagements with the world and elevate its ties with key countries such as India. This is because Riyadh knows that the days of the exclusively petrodollar funded Saudi state are numbered due to the advent of shale oil and renewables.Hence, Riyadh is looking to completely transform its economy under the rubric of its Vision 2030 that envisages modern manufacturing, technology and service sectors. And that means linking Saudi industry to global value chains and preparing Saudi citizens – including Saudi women – for 21st century workplaces. ",
        dislikes: [
          {
            likesId: "1",
            authorId: 3,
            author: "Nikki"
          }
        ],
        imagepath: "src/images/noImage.jpg",
        comments: [
          {
            commentsId: "1",
            authorId: 7866,
            author: "User45662",
            description: "Write something of this sort on Mohammad, his eife, Ayesha, the Khalifas etc anc then see what happens to you."
            
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
            authorId: 7866,
            author: "User45662"
          }
        ]
      },

        {
        articleName: "Our democrazy: Sane, Sena, sanest",
        articleId: "3",
        author: "Bachi Karkaria",
        authorId: 349,
        poster:"https://www.thoughtco.com/thmb/BNOyx6_VCj-_Wy8OD5MhtPxlovc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/repdem-5c92359446e0fb00014a97c1.jpg",
        description: "Just look at the poll toll. Once-swaggering parties and pundits are now tol-mol kar baat karoing. In fact, the wayward results have made word-weighers wish that the wisdom of hindsight had been that of foresight. Aam aurats like me find their discomfiture quite juicy, mainly the fact that the alpha alphonso began langda-limping. But i’m still scratching my head since logic has gone into sirshasana. Consider the conundrum: Winner parties have a hang-dog look,Beleaguered and belittled Sharad Pawar thundered to victory, drenched in rain and revenge. Imagine the irony: the old war-horse’s come-back has given come-uppance to our original Commander-in-Chief ever ready, willing and able to do battle against the terrorists, their minder and his own rivals. ",
        dislikes: [
          {
            likesId: "1232",
            authorId: 7866,
            author: "User45662"
          },
          {
            likesId: "2454232",
            authorId: 1342,
            author: "mark"
          },
          {
            likesId: "44545",
            authorId: 45,
            author: "Neeta"
          },
          {
            likesId: "45",
            authorId: 145,
            author: "Alex"
          },
          {
            likesId: "2",
            authorId: 1,
            author: "Narine"
          }
        ],
        imagepath: "src/images/noImage.jpg",
        comments: [
          {
            commentsId: "1",
            authorId: 786,
            description: "Write something of this sort on Mohammad, his eife, Ayesha, the Khalifas etc anc then see what happens to you.",
            author: "Adam levine"
          },
           {
            commentsId: "145",
            authorId: 343,
            description: "iT IS SORRY STATE OF AFFAIR IN MAHARASHTRA THAT GOVT FORMATION IS DELAYED DESPITE STATE IS FACING SERIOUS ISSUES, DEBT HAS SIGNIFICANTLY INCREASED",
            author: "Alex"
          },
           {
            commentsId: "1342",
            authorId: 3212,
            description: "the NSO Group was founded by Israeli military veterans once they moved into the private sector following stints in Israel’s army",
            author: "Goerge levine"
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
