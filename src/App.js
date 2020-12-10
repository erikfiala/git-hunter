import logo from "./logo.svg"
import "./app.css"
import React, { useEffect, useState } from "react"

function App() {
	const [avatar, setAvatar] = useState("")
	const [name, setName] = useState("")
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [twitterUsername, setTwitterUsername] = useState("")
	const [company, setCompany] = useState("")
	const [status, setStatus] = useState(Boolean)
	const [userInput, setUserInput] = useState("")
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch("https://api.github.com/users/example")
			.then((res) => res.json())
			.then((data) => {
				setData(data)
			})
	}, [])

	const setData = ({
		avatar_url,
		name,
		login,
		email,
		twitter_username,
		company,
		hireable,
	}) => {
		setAvatar(avatar_url)
		setName(name)
		setUsername(login)
		setEmail(email)
		setTwitterUsername(twitter_username)
		setCompany(company)
		setStatus(hireable)
	}

	const handleSearch = (e) => {
		setUserInput(e.target.value)
	}

	const handleSubmit = () => {
		fetch(`https://api.github.com/users/${userInput}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.message) {
					setError(data.message)
				} else {
					setData(data)
				}
			})
	}

	return (
		<div className="bg-gray-200 min-h-screen font-sans antialiased">
			<div className="bg-white p-4">Git Hunter</div>
			<form className="mt-4 ml-4 mr-4" onSubmit={handleSubmit}>
				<input
					className="bg-white h-12 w-full shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-4"
					placeholder="Search GitHub users"
					onChange={handleSearch}
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
											Company
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Status
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
										>
											🐦
										</th>
										<th
											scope="col"
											className="relative px-6 py-3"
										>
											<span className="sr-only">
												Actions
											</span>
										</th>
									</tr>
								</thead>
								{error ? (
									<p>{error}</p>
								) : (
									<tbody className="bg-white divide-y divide-gray-200">
										<tr>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="flex-shrink-0 h-10 w-10">
														<img
															className="h-10 w-10 rounded-full"
															src={avatar}
															alt="profile picture"
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-semibold text-gray-900">
															{name}
														</div>
														<div className="text-sm text-gray-500">
															{username}
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">
													{company}
												</div>
												{/* <div className="text-sm text-gray-500">
												Optimization
											</div> */}
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
													{status}
												</span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{twitterUsername}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<a
													href="mailto:{email}"
													className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
												>
													Contact
												</a>
												<span className="text-gray-400 cursor-default">
													{"  "}·{"  "}
												</span>
												<a
													href="#"
													className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
												>
													Save
												</a>
											</td>
										</tr>
										{/* more rows */}
									</tbody>
								)}
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
