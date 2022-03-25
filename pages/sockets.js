import { io } from "socket.io-client";
import { useEffect } from "react";

export default function Sockets() {

  useEffect(()=>{
    // const socket = io("ws://example.com/my-namespace", {
    //   reconnectionDelayMax: 10000,
    //   auth: {
    //     token: "123"
    //   },
    //   query: {
    //     "my-key": "my-value"
    //   }
    // });
  }, [])
  return (
    <div>

    </div>
  )
}
