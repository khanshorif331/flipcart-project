import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Box } from '@mui/material'

// components

function App() {
	return (
		<div>
			<Header></Header>
			<Box style={{ marginTop: 54 }}>
				<Home></Home>
			</Box>
		</div>
	)
}

export default App
