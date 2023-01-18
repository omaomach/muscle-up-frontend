
export function Post(trainer){
	const token = localStorage.getItem("jwt")
	console.log(trainer);
	return fetch('https://muscleup-production.up.railway.app/trainers',{
		method : "POST",
		body: JSON.stringify(trainer),
		headers:{
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		}
		
	}).then((resp) => resp.json()) 
}

export function Patch(trainer){
	return fetch(`https://muscleup-production.up.railway.app/trainers/${trainer.id}` ,{
		method : "PATCH",
		body: JSON.stringify(trainer),
		headers:{
			"Content-Type": "application/json"
		}
}).then((resp) => resp.json()) 
}