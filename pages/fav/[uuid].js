import { useRouter } from "next/router";

export default function Fav() {
  const r = useRouter();
  const {uuid} = r.query;
  //console.log(Object.values(fav));
  return (
    <div>
      <h3>{uuid}</h3>
      Favourites
    </div>
  )
}
