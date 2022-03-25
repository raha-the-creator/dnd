import {Save, Read} from '@/utils/helpers';
export default async function handler(req, res) {

  //HELPER FUNCTIONS FOR YOU TO USE!
  //console.log(req.query, req.body)
  //await Save("test", json);
  //const files = await Read();

  //detect if filter/save/read
  const lists = [];
  res.status(200).json([]);
}
