import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "./style/Button";
import Label from "./style/Label";
import FormField from "./style/FormField";
import Input from "./style/Input";
import { Post, Patch } from "./post";
import { useNavigate } from "react-router-dom";


export default function NewTrainer({defaultData}) {
	// const history = useHistory();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: defaultData ? defaultData.name : "",
		age: defaultData ? defaultData.age : "",
		email: defaultData ? defaultData.email : "",
		phone_number: defaultData ? defaultData.phone_number : "",
		image: defaultData ? defaultData.image : ""
	});

	// include loader
	const [saving, setSaving] = useState(false)
	const [trainers, setTrainers] = useState([])
	const [newUpdate, setNewUpdate] = useState();
	const [addingPerformance, setAddingPerformance] = useState(false);

	// function that handles change
	function handleChange(event) {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		})
	}

	// update function on submission
	function addTrainer(event) {
		event.preventDefault();
		console.log(formData);
		setSaving(true)
			Post(formData).then(newTrainer => {
				setSaving(false);
				console.log(newTrainer);
				navigate("/admintrainers")
			});
    
  }
	
  function updateResults(newProduct) {
	// if newUpdate is defined update result if not defined add into the array
	if (newUpdate) {
		const index = trainers.findIndex(r => r.id === newProduct.id);
  console.log(trainers)
		console.log(index)
		// updating form using index
		let latestUpdate = [...trainers];
		latestUpdate[index] = NewTrainer;
		setTrainers(latestUpdate);

	} else {
		setTrainers([...trainers, newUpdate]);
	}
	setAddingPerformance(false);
}
// function that handles patch(edit)
function onUpdate(trainer) {
	setNewUpdate(trainer)
	setAddingPerformance(true)
// history.push("/new");
}

	
	return(
		<div>
		<Wrapper>
		  <WrapperChild>
			<h2>New Trainer</h2>
			<form onSubmit={addTrainer}>
			  <FormField >
				<Label htmlFor="name">Name</Label>
				<Input
				  type="text"
				  id="name"
				  name="name"
				  value={formData.name}
				  onChange={handleChange}
				/>
			  </FormField >
			  <FormField >
				<Label htmlFor="age">age</Label>
				<Input
				  type="number"
				  id="age"
				  name="age"
				  value={formData.age}
				  onChange={handleChange}
				/>
			  </FormField >
			  <FormField >
				<Label htmlFor="email">Email</Label>
				<Input
				  id="email"
				  name="email"
				  value={formData.email}
				  onChange={handleChange}
				/>
			  </FormField>
			  <FormField >
				<Label htmlFor="image">Image</Label>
				<Input
				  id="image"
				  name="image"
				  value={formData.image}
				  onChange={handleChange}
				/>
			  </FormField>
			  <FormField >
				<Label htmlFor="phone_number">phone_number</Label>
				<Input
				  id="phone_number"
				  name="phone_number"
				  value={formData.phone_number}
				  onChange={handleChange}
				/>
			  </FormField>
			  <FormField>
				
				{/* <NavLink to="/admintrainers" > */}
				<Button    color="primary" type="submit" disabled={saving} >
				  {saving ? "Loading..." : "Submit"}
				</Button>
				{/* </NavLink> */}
			  </FormField>
			</form>
		  </WrapperChild>
		</Wrapper>
		</div>
	 ); 
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  align-items: center;
  padding: 16px;
  display: flex;
  gap: 24px;
 `;

 const WrapperChild = styled.div`
  flex: 1;
 `;
    