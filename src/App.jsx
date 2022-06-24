import React, {useEffect} from "react";
import {Login} from "./comopnents/Login";
import {reducerCase} from "./utils/Constants";
import {useStateProvider} from "./utils/StateProvider"
import { Spotify } from "./comopnents/Spotify";

function App() {

	const [{token},dispatch] = useStateProvider()

		useEffect(()=> {
				const hash = window.location.hash;
				if(hash){
						const token = hash.substring(1).split("&")[0].split("=")[1];
						dispatch({type: reducerCase.SET_TOKEN,token})
				}
		},[token,dispatch])

  return <div>{token ? <Spotify/> : <Login/>}</div>
}

export default App
