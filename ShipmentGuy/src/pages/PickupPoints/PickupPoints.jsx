import React, { useEffect, useState } from "react";
import { Form, Button, Table, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { ArrowsCounterClockwise, MagnifyingGlass } from "phosphor-react";
import ModalPickup from "../../components/ModalPickup/ModalPickup";
import styles from "./PickupPoints.module.css";

let json = {
	"users": [
		{
			"id": 1,
			"name": "Amanacu",
			"address": "1234 Main St",
			"city": "San Diego",
			"state": "CA",
			"zip": "3810-193",
			"phone": "911524213",
			"opens": "9am",
			"closes": "5pm",
			"available": "Yes"
		},
		{
			"id": 2,
			"name": "Amanacu",
			"address": "1234 Main St",
			"city": "San Diego",
			"state": "CA",
			"zip": "3810-193",
			"phone": "911524213",
			"opens": "9am",
			"closes": "5pm",
			"available": "Yes"
		},
		{
			"id": 3,
			"name": "Amanacu",
			"address": "1234 Main St",
			"city": "San Diego",
			"state": "CA",
			"zip": "3810-193",
			"phone": "911524213",
			"opens": "9am",
			"closes": "5pm",
			"available": "Yes"
		}]
}

export default function PickupPoints() {
	const [searchQuery, setSearchQuery] = useState("");
	const [pickupPoints, setPickupPoints] = useState([]);
	const [selectedFilter, setSelectedFilter] = useState("Name");

	const [modalShow, setModalShow] = useState(false);
	const [userEdit, setUserEdit] = useState([{}]);

	useEffect(() => {
		getUsersFromMockingAPI();
	}, []);


	const handleSelectedFilter = (e) => {
		console.log("Selected filter will be: ", e);
		setSelectedFilter(e);
	};

	const giveUser = () => {
		console.log("Giving user: ", userEdit)
		return userEdit;
	}
	const handleEdit = (e, pickupPoint) => {
		console.log("Editing this: ", pickupPoint)
		setUserEdit(pickupPoint);
		setModalShow(true);
	};
	const handlePickupPointEdit = (newJson) => {
		console.log("Editando pickup point: ");
		/*for (let i = 0; i < json.users.length; i++) {
			if (json.users[i].id === newJson.id) {
				json.users[i] = newJson;
				break;
			}
		}*/
	};
	const handleDelete = (e) => {
		console.log("Deleting this: ", e.target.value);
	};

	const getUsersFromMockingAPI = async () => {
		const response = await fetch("127.0.0.1:3000/users/all");
		const data = await response.json();
		console.log("DADOS VINDOS DO NODEJS API MOCK: ", data);
	}

	return (
		<div className={styles.pickupPoints_wrapper}>
			<div className={styles.pickupPoints_title}>Pickup Points <ArrowsCounterClockwise size={32} className={styles.pickupPoints_refresh_button} /></div>
			{/* Render a list of Available Pickup Points */}
			{/* Add, Remove and Edit Pickup Point from the Table */}
			{/* Filter the table to show only available PickupPoints */}
			{/* Search for a PickupPoint by name, address, city, state, zip, phone */}
			<div className={styles.pickupPoints_search_wrapper}>
				<Form.Control
					onChange={(e) => setSearchQuery(e.target.value)}
					type="text"
					placeholder="Search"
					className={styles.pickupPoints_search}
					maxLength={100}
				/>
				<DropdownButton
          variant="dark"
          title={`Filter by ${selectedFilter}`}
          id="input-group-dropdown-1"
					className={styles.pickupPoints_search_dropdownBtn}
					onSelect={(e) => handleSelectedFilter(e)}
        >
          <Dropdown.Item eventKey="Name">Name (default)</Dropdown.Item>
          <Dropdown.Item eventKey="Address">Address</Dropdown.Item>
          <Dropdown.Item eventKey="City">City</Dropdown.Item>
          <Dropdown.Item eventKey="State">State</Dropdown.Item>
          <Dropdown.Item eventKey="Zip">Zip</Dropdown.Item>
          <Dropdown.Item eventKey="Phone">Phone</Dropdown.Item>
        </DropdownButton>
				<Button className={styles.pickupPoints_search_button} variant="secondary" id="button-addon2">
					<MagnifyingGlass size={24} /> Search
				</Button>
			</div>

			<Table
				className={styles.pickupPoints_table}
				striped
				variant="dark"
				responsive="xl"
			>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Address</th>
						<th>City</th>
						<th>State</th>
						<th>Zip</th>
						<th>Phone</th>
						<th>Opens</th>
						<th>Closes</th>
						<th>Available</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						json.users.map((user, key) => {
							return (<>
								<tr key={key}>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.address}</td>
									<td>{user.city}</td>
									<td>{user.state}</td>
									<td>{user.zip}</td>
									<td>{user.phone}</td>
									<td>{user.opens}</td>
									<td>{user.closes}</td>
									<td>{user.available}</td>
									<td className={styles.pickupPoints_table_td_actions}>
										<a onClick={(e) => handleEdit(e, user)} className="">
											Edit
										</a>
										<span disabled className="ms-2">
											or
										</span>
										<a onClick={(e) => handleDelete(e)} className="ms-2">
											Delete
										</a>
									</td>
								</tr>
							</>)
						})
					}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="10">Total Pickup Points: {10}</td>
						<td colSpan="1" className={styles.pickupPoints_table_td_actions}>
							<a className="">
								+ New
							</a>
						</td>
					</tr>
				</tfoot>
			</Table>
			<ModalPickup
			show={modalShow}
			onHide={() => setModalShow(false)}
			onEdit={(newJson) => handlePickupPointEdit(newJson)}
			user={giveUser}
			/>
		</div>
	);
}
