import React, { useState } from "react";
import { remarksData } from "../DummyData/Data";
import { RemarkModal } from "..";

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

  // ============ Event Handlers ===============
	const handleModal = (val, name) => {
		setOpen(val);
		setRemarkModalTitle(name);
	};

	const handleEdit = (name, val) => {
		handleModal(val, name);
	};
	return (
		<div className="border rounded-2xl lg-mr-6 bg-white shadow-md p-3 w-[30rem]">
			{/* Remarks Header*/}
			<div className="flex flex-row justify-between items-center h-[3rem]">
				<div className="flex gap-x-2 lg:gap-x-3 items-center justify-center">
					<p className="font-semibold">Remarks</p>
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
