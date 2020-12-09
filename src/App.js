import logo from "./logo.svg"
import "./app.css"

function App() {
	return (
		<div className="bg-gray-100 min-h-screen font-sans antialiased">
			<div className="grid grid-cols-3 gap-4">
				<div></div>
				<div className="space-x-4">
					<input
						className="bg-white h-12 w-full rounded-lg border-solid border border-gray-200"
						placeholder="Search GitHub users"
					></input>
				</div>
				<div></div>
			</div>
		</div>
	)
}

export default App
