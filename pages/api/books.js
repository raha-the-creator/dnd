import {Save, Read} from '@/utils/helpers';

import { filtering, sortArr } from '@/utils/func';
import books from '@/utils/books.json';
export default async function handler(req, res) {

  //HELPER FUNCTIONS FOR YOU TO USE!
  //console.log(req.query, req.body)
  //await Save("test", json);
  //const files = await Read();

  //detect if filter/save/read
  const {txt, sort_rating, sort_type} = req.query;
  var lists = [];
  if(txt){
    lists = filtering(books, {
      title:txt
    })
  }

  if(sort_rating){
    lists = sortArr(lists, {
      key:"average_rating",
      type:sort_type
    })
  }

  lists = lists.slice(0,10);
  res.status(200).json(lists);
}
