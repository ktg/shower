function query(query) {
	return fetch("http://jzcpi1.local:8086/query?db=shower&epoch=ms&q=" + query)
		.then((res) => res.json())
}