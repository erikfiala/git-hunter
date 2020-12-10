import logo from "./logo.svg"
import "./app.css"
import React, { useEffect, useState } from "react"

function App() {
	// const [avatar, setAvatar] = useState("")
	// const [name, setName] = useState("")
	// const [userName, setUsername] = useState("")
	// const [email, setEmail] = useState("")
	// const [twitterUsername, setTwitterUsername] = useState("")
	// const [userInput, setUserInput] = useState("")
	// const [error, setError] = useState(null)

	return (
		// <div className="bg-gray-100 min-h-screen font-sans antialiased">
		// 	<div className="bg-gray-300 p-4">Git Hunter</div>
		// 	<div className="grid grid-cols-1 gap-4 m-4">
		// 		<div className="space-x-4">
		// 			<form>
		// 				<input
		// 					className="bg-white h-12 w-full rounded-lg
		// 					border-solid border border-gray-200 p-4"
		// 					placeholder="Search GitHub users"
		// 				></input>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div>
		<div className="bg-gray-200 min-h-screen font-sans antialiased">
			<div className="bg-white p-4">Git Hunter</div>
			<form className="mt-4 ml-4 mr-4">
				<input
					className="bg-white h-12 w-full shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-4"
					placeholder="Search GitHub users"
				></input>
			</form>
			<div className="flex flex-col p-4">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											User
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Orgs
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Status
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											🐦
										</th>
										<th
											scope="col"
											className="relative px-6 py-3"
										>
											<span className="sr-only">
												Edit
											</span>
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									<tr>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center">
												<div className="flex-shrink-0 h-10 w-10">
													<img
														className="h-10 w-10 rounded-full"
														src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
														alt=""
													/>
												</div>
												<div className="ml-4">
													<div className="text-sm font-semibold text-gray-900">
														Jane Cooper
													</div>
													<div className="text-sm text-gray-500">
														jane_cooper
													</div>
												</div>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">
												Facebook
											</div>
											{/* <div className="text-sm text-gray-500">
												Optimization
											</div> */}
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
												Available for hire
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											@jane_cooper
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<a
												href="#"
												className="text-indigo-600 hover:text-indigo-900"
											>
												Contact
												<span className="text-gray-400 cursor-default">
													{"  "}·{"  "}
												</span>
												Save
											</a>
										</td>
									</tr>
									{/* more rows */}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
