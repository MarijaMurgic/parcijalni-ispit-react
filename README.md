useEffect(() => {
	fetch("API_URL")
		.then((response) => response.json())
		.then((data) => {
			// Save data to state...
		})
}, []); 