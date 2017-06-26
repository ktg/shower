function query(query, axis) {
	return fetch("http://jzcpi1.local:8086/query?db=shower&epoch=ms&q=" + query)
		.then((res) => res.json())
		.then((json) => {
		"use strict";
			json.axis = axis;
			return json;
		})
}