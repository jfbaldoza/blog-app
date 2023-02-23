import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import LogIn from './Pages/LogIn/LogIn'
import Register from './Pages/Register/Register'

function App() {

	return (
		<>
			<BrowserRouter>
                <Routes>
                    <Route path="/blog-app/" element={<LandingPage/>}  />
					<Route path="/login" element={<LogIn/>}  />
					<Route path="/register" element={<Register/>}  />
                </Routes>
			</BrowserRouter>
		</>
	)
}

export default App
