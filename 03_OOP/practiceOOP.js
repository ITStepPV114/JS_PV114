'use strict'
/*
Реалізуйте клас PrintMaсhine, який складається з:
■ розміру шрифту;
■ кольори шрифту;
■ сімейства шрифту;
■ методу print(), який приймає текст і друкує його відповідним шрифтом за допомогою document.write().
Створіть об’єкт такого класу та продемонструйте роботу методу.
*/

/*
class PrintMaсhine
{
    #fontsize;
    #colors;
    #fontfamily;
    constructor(fontsize, colors=["black"], fontfamily)
    {
     this.#fontsize=fontsize;
     this.#colors=colors;
     this.#fontfamily=fontfamily;
    }

    print(text)
    {
      document.write(`<p style="color:${this.#colors[0]}; font-size:${this.#fontsize}px">Documet: ${text}<\p>`);
    }

}

let printInfo=new PrintMaсhine(32,["red"],"Arial");
printInfo.print("Реалізуйте клас PrintMaсhine, який складається з: розміру шрифту; кольори шрифту; сімейства шрифту");

let printInfo1=new PrintMaсhine(32,["green"],"Arial");
printInfo1.print("Реалізуйте клас PrintMaсhine, який складається з: розміру шрифту; кольори шрифту; сімейства шрифту");
*/

/*Task2
//===========working Date()==============
// Math.trunc((new Date()-new Date("01/01/2006"))/(365*24*60*60*1000))
new objects are created with the new Date() constructor.

There are 9 ways to create a new date object:

new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
/*
date1=new Date()
Mon Jun 12 2023 19:12:13 GMT+0300 (за східноєвропейським літнім часом)

date11=new Date("2015-03-25")

date2=new Date("06/12/2023")
Mon Jun 12 2023 00:00:00 GMT+0300 (за східноєвропейським літнім часом)

date1.getDate()
12

date1.getMonth()
5

date1.getMonth("12 June 2023")
5

date3=new Date("12 June 2023")
Mon Jun 12 2023 00:00:00 GMT+0300 (за східноєвропейським літнім часом)

date3=new Date("12 May 2023")
Fri May 12 2023 00:00:00 GMT+0300 (за східноєвропейським літнім часом)

date3=new Date(1686557090);
Tue Jan 20 1970 15:29:17 GMT+0300 (за східноєвропейським стандартним часом)
date2
Mon Jun 12 2023 00:00:00 GMT+0300 (за східноєвропейським літнім часом)
date2.getMilliseconds();

Math.trunc((new Date()-new Date("01/01/2006"))/(365*24*60*60*1000))
17
*/

// https://www.w3schools.com/js/js_date_methods.asp
// https://www.w3schools.com/js/js_date_methods_set.asp

/*
Реалізуйте клас, що описує новину (заголовок, текст, масив тегів, дата публікації). 
    У класі необхідно реалізувати один метод  print, який виводить всю інформацію у такому вигляді, як на
    рисунку 1 (https://fsx1.itstep.org/api/v1/files/07pBtO28bf7YzXY_NYBufj7pABxpZczh?inline=true).
    Зверніть увагу, як виводиться дата:
    ■ якщо з дати публікації пройшло менше дня, то виводиться  «сьогодні»;
    ■ якщо з дати публікації пройшло менше тижня, то виводиться «N днів тому»;
    в інших випадках – повна дата у форматі «день.місяць.рік».
*/


class HtmlNews {
    #titleNews;
    #textNews;
    #arrTag;
    #datePublished;
    constructor(titleNews = "", textNews = "", arrTag = [], datePublished = new Date()) {
        // this.#titleNews=titleNews;
        this.titleNews = titleNews; //if you defineded setter
        this.#textNews = textNews;
        this.#arrTag = arrTag;
        this.#datePublished = new Date(datePublished) == "Invalid Date" ? new Date() : new Date(datePublished);
    }

    get titleNews() {
        return this.#titleNews;
    }

    // can use this.titleNews=titleNews;
    set titleNews(value) {
        this.#titleNews = value;
    }

    get textNews() {
        return this.#textNews;
    }

    set textNews(value) {
        this.#textNews = value;
    }

    get datePublished() {
        return this.#datePublished;
    }

    get arrTag() {
        return this.#arrTag;
    }
    // add getter/setter for all fields
    //...

    print() {
        document.write(`<h3> ${this.titleNews}</h3>`);
        // ■ якщо з дати публікації пройшло менше дня, то виводиться  «сьогодні»;
        // ■ якщо з дати публікації пройшло менше тижня, то виводиться «N днів тому»;
        // в інших випадках – повна дата у форматі «день.місяць.рік».
        // let countDay=(new Date()-new Date(this.datePublished))/(24*60*60*1000);
        let countDay = (Date.now() - Date.parse(this.datePublished)) / (24 * 60 * 60 * 1000);
        let textDate = "";
        if (countDay < 1) textDate = "today";
        else if (countDay <= 7) textDate = Math.round(countDay) + " days ago"
        else textDate = this.datePublished.toLocaleDateString();

        document.write(`<p>${textDate}</p>`);
        document.write(`<p>${this.#textNews}</p>`);
        let htmlTextTag = "";
        for (const htag of this.#arrTag) {
            htmlTextTag += "#" + htag + " ";
        }

        document.write(`<p>${htmlTextTag}</p>`);
    }

}


let textNews = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio provident labore mollitia odit. Accusantium enim quo ad molestias dolor, minima ullam, quidem molestiae ipsum tempore deserunt? Nihil, dignissimos quia!"
let news1 = new HtmlNews("Title1", textNews, ["ipsum", "dolor"], "05/25/2023");
console.log(news1.titleNews);
// news1.titleNews="NewTitle1";
// console.log(news1.titleNews);
// news1.print();
let news2 = new HtmlNews("Title2", textNews, ["text", "odio"], "2023-06-10");
let news3 = new HtmlNews("Title3", textNews, ["text", "odio"], "2023-06-12");
// news2.print();
// news3.print();


/*
Реалізуйте клас, що описує стрічку новин.
Клас має містити:
■ масив новин;
■ get-властивість, яка повертає кількість новин;
■ метод виведення на екран усіх новин;
■ метод додавання новини;
■ метод видалення новини;
■ метод сортування новин за датою (від останніх новин до
старих);
■ метод пошуку новин за тегом (повертає масив новин, в
яких вказано переданий тег у метод).
Продемонструйте роботу написаних методів
*/

class LineNews {
    #arrNews = [];
    #countNews;
    constructor(news) {
        this.#arrNews = news;
        this.#countNews = this.arrNews.length;
    }

    get arrNews() {
        return this.#arrNews;
    }

    get countNews() {
        return this.#countNews;
    }

    //methods for add and remove  
    addNews(news = new HtmlNews()) {
        this.arrNews.push(news);
    }

    removeNews() {
        let oldnews = this.arrNews.shift();
        console.log(oldnews);
    }

    // a>b => 1  a<b=>-1 a==b   =>  0       => a-b
    sortDate() {
        function compareDate(news1, news2) {
            if (news1.datePublished > news2.datePublished) return -1
            else if (news1.datePublished < news2.datePublished) return 1
            return 0;
        }
        // console.log(this.arrNews);
        this.arrNews.sort(compareDate);
        console.log(this.arrNews);

    }
    //метод пошуку новин за тегом (повертає масив новин, в яких вказано переданий тег у метод).
    newsByTag(tag) {
        let newArrNews = [];
        for (const news of this.arrNews) {
            for (const hTag of news.arrTag) {
                if (hTag == tag) {
                    newArrNews.push(news);
                    break;
                }
            }
        }

        return newArrNews;

    }

    printNews() {
        for (const news of this.arrNews) {
            news.print();
        }
    }

}

let arrNews = [news1, news2, news3];
let lineNewsPolitic = new LineNews(arrNews);
// lineNewsPolitic.printNews();
// lineNewsPolitic.removeNews();
lineNewsPolitic.sortDate();
lineNewsPolitic.printNews();