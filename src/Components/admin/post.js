
export function Post(trainer){
	const token = localStorage.getItem("jwt")
	console.log(trainer);
	return fetch('http://127.0.0.1:3000/trainers',{
		method : "POST",
		body: JSON.stringify(trainer),
		headers:{
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		}
		
	}).then((resp) => resp.json()) 
}

export function Patch(trainer){
	return fetch(`http://127.0.0.1:3000/trainers/${trainer.id}` ,{
		method : "PATCH",
		body: JSON.stringify(trainer),
		headers:{
			"Content-Type": "application/json"
		}
}).then((resp) => resp.json()) 
}