export function Delete(id){
	return fetch(`http://127.0.0.1:3000/clients/${id}` ,{
		method : "DELETE",
	}).then((resp) => resp.json()) 
}

export function tDelete(id){
	return fetch(`http://127.0.0.1:3000/trainers/${id}` ,{
		method : "DELETE",
	}).then((resp) => resp.json()) 
}


export function eDelete(id){
	return fetch(`http://127.0.0.1:3000/equipment/${id}` ,{
		method : "DELETE",
	}).then((resp) => resp.json()) 
}
