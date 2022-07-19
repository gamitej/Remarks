import React from "react";

// MUI
// eslint-disable-next-line
import {
	Divider,
	ListItem,
	ListItemText,
	Tooltip,
	IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { remarksData } from "../DummyData/Data";

const Remark = () => {
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
				{remarksData.map((item,index) => (
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
								<IconButton>
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
		</div>
	);
};

export default Remark;
