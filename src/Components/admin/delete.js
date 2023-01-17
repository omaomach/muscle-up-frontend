export function Delete(id){
	return fetch(`http://127.0.0.1:3000/clients/${id}` ,{
		method : "DELETE",
	}).then((resp) => resp.json()) 
}