import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Box } from '@mui/material'
import DataProvider from './context/DataProvider'
import { BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<DataProvider>
			<BrowserRouter>
				<Header></Header>
				<Box style={{ marginTop: 54 }}>
					<Home></Home>
				</Box>
			</BrowserRouter>
		</DataProvider>
	)
}

export default App
