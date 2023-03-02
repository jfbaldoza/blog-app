import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import LandingPage from './Pages/LandingPage/LandingPage'
import LogIn from './Pages/LogIn/LogIn'
import Register from './Pages/Register/Register'

function App() {
	return (
		<>
			<BrowserRouter>
                <Routes>
                    <Route path="/blog-app" element={<LandingPage/>}  />
					<Route path="/blog-app/login" element={<LogIn/>}  />
					<Route path="/blog-app/register" element={<Register/>}  />
					<Route path="/blog-app/home" element={<Home/>}  />
                </Routes>
			</BrowserRouter>
		</>
	)
}

export default App
