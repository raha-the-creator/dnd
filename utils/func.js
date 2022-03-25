export function filtering(
  arr=[],
  config={title:null, page:null, rating:null}
){
  //console.log(arr.slice(0,5));

  const {title, page, rating} = config;

  if(title || page || rating){
    const filtered_arr = arr.filter((o)=>{

      var cond = true;
  
      if(title){
        cond = cond && o.title.includes(title);
      }
  
      if(page){
        cond = cond && Number(o.num_pages) >= Number(page);
      }
  
      if(rating){
        cond = cond && Number(o.average_rating) >= Number(rating);
      }
  
      return cond;
    })
  
    //console.log(filtered_arr);
    return filtered_arr;
  } else {
    //console.log([])
    return [];
  }

  //const filtered_arr = arr.filter(o=> o.bookID === req.query.bookID);
}

//const books = require("./books.json");

/*
bag 1 is empty, 
bag 2 has books

"Harry",
123

filtering is saying if the book matches this condition, clone it and put it into bag 1
*/
//filtering(books);

/*
filtering(books, {
  title:"Harry",
  pages:123,
  rating:5.5
})

//FOR THE EXERCISE, also filter, language code, authors, ratings_count, and text_reviews_count

*/

export function sortArr(
  arr=[],
  config={key:null, type:null}
){

  const {key, type} = config;

  if(key){
    arr.sort((cur, next) => {
      var num1 = Number(cur[key]);
      var num2 = Number(next[key]);

      if(isNaN(cur[key])){
        num1 = cur[key];
        num2 = next[key];
      }
      
      if(num1 > num2){
        if(type && type === "desc"){
          return -1;
        } else {
          return 1;
        }
      }
      if(num1 < num2){
        if(type && type === "desc"){
          return 1;
        } else {
          return -1;
        }
      }
  
      return 0;
    })
  
   // console.log(arr.slice(0,10))
    return arr;
  }
}


// const books = require("./books.json");

// var f_books = filtering(books, {
//   title:"Harry",
//   page:500
// })

// f_books = sortArr(f_books, {
//   key:"ratings_count",
//   type:"desc"
// });

// console.log(f_books)
/*
bag has items
loop via bag and figure out if the item is moving forward, backward, or same position
+1
-1
0
*/