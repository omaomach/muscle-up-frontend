export function Delete(id){
	const token = localStorage.getItem("jwt");
	return fetch(`https://muscleup-production.up.railway.app/clients/${id}` ,{
		method : "DELETE",
		headers:{
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		}
	}).then((resp) => resp.json()) 
}

export function tDelete(id){
	const token = localStorage.getItem("jwt");
	return fetch(`http://127.0.0.1:3000/trainers/${id}` ,{
		method : "DELETE",
		headers:{
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		}
	}).then((resp) => resp.json()) 
}


export function eDelete(id){
	const token = localStorage.getItem("jwt");
	return fetch(`https://muscleup-production.up.railway.app/equipment/${id}` ,{
		method : "DELETE",
		headers:{
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		}
	}).then((resp) => resp.json()) 
}
