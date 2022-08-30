import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Box } from '@mui/material'
import DataProvider from './context/DataProvider'
import DetailView from './components/Details/DetailView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Payment from './components/Payment/Payment'

function App() {
	return (
		<DataProvider>
			<BrowserRouter>
				<Header></Header>
				<Box style={{ marginTop: 54 }}>
					<Routes>
						<Route path="/" element={<Home></Home>}></Route>
						<Route
							path="/product/:id"
							element={<DetailView></DetailView>}
						></Route>
						<Route path="/cart" element={<Cart></Cart>}></Route>
						<Route
							path="/payment/:id"
							element={<Payment></Payment>}
						></Route>
					</Routes>
				</Box>
			</BrowserRouter>
		</DataProvider>
	)
}

export default App
