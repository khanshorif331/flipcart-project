import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Box } from '@mui/material'
import DataProvider from './context/DataProvider'

// components

function App() {
	return (
		<DataProvider>
			<Header></Header>
			<Box style={{ marginTop: 54 }}>
				<Home></Home>
			</Box>
		</DataProvider>
	)
}

export default App
