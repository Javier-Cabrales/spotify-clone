import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reducer, {initialState} from './utils/reducer'
import {StateProvider} from './utils/StateProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
		<StateProvider initialState={initialState} reducer={reducer}>
				<App />
		</StateProvider>	
)
