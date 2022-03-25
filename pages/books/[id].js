import Head from 'next/head';
import ax from 'axios';
import {useRouter} from 'next/router';

export default function BooksID() {
  const router = useRouter();
  const {id} = router.query;
  return (
    <div>
      Make a new list for <b>{id}</b>

      <button onClick={()=>{
        //save in your own api!
      }}>Save</button>
    </div>
  )
}
