import React, { useState } from "react";
import { remarksData, dropDownData } from "../DummyData/Data";
import { RemarkModal, DropDown } from "..";

// MUI
import {
	Divider,
	ListItem,
	ListItemText,
	Tooltip,
	IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Remark = () => {
	// ============ Handling State ===============
	const [open, setOpen] = useState(false);
	const [remarkModalTitle, setRemarkModalTitle] = useState("");
	const [formData, setFormData] = useState({
		study: "coding",
		day: "monday",
	});

	// ============ Event Handlers ===============
	const handleModal = (val, name) => {
		setOpen(val);
		setRemarkModalTitle(name);
	};

	const handleEdit = (name, val) => {
		handleModal(val, name);
	};

	const handleChange = ({ target }) => {
		console.log(target.name, target.value);
		setFormData({ ...formData, [target.name]: target.value });
	};

	return (
		<div className="border rounded-2xl lg-mr-6 bg-white shadow-md p-3 w-[30rem]">
			{/* Remarks Header*/}
			<div className="flex flex-row justify-between items-center h-[4rem]">
				<div className="flex gap-x-2 lg:gap-x-3 justify-center items-center ">
					<p className="font-semibold text-xl my-1">Remarks</p>
				</div>
				{/* Drop-Down */}
				<div className="flex flex-row gap-x-2 justify-center items-center">
					{dropDownData?.map((item, index) => (
						<DropDown
							key={index}
							label={item.label}
							width={120}
							id={item.id}
							handleChange={handleChange}
							value={formData[item.id]}
							options={item.options}
						/>
					))}
				</div>
			</div>
			<Divider />
			{/* Remarks Items*/}
			<div className="h-[14em] overflow-auto w-[100%]">
				{remarksData.map((item, index) => (
					<div key={index}>
						<ListItem alignItems="flex-start">
							<ListItemText
								primary={item.date}
								secondary={
									<>
										<span className="inline font-bold">
											{item.field}
										</span>
										<span className="inline mx-1">
											- {item.remarkText}
										</span>
									</>
								}
							/>
							<Tooltip placement="top" title="edit">
								<IconButton
									onClick={() =>
										handleEdit("Edit Remark", true)
									}
								>
									<EditIcon color="primary" />
								</IconButton>
							</Tooltip>
							<Tooltip placement="top" title="delete">
								<IconButton>
									<DeleteIcon color="error" />
								</IconButton>
							</Tooltip>
						</ListItem>
						<Divider />
					</div>
				))}
			</div>
			<RemarkModal
				open={open}
				handleModal={handleModal}
				remarkModalTitle={remarkModalTitle}
			/>
		</div>
	);
};

export default Remark;
