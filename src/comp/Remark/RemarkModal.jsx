import React from "react";
import styled from "@emotion/styled";
import { IoIosAddCircleOutline } from "react-icons/io";

// MUI
import {
	Box,
	Button,
	Modal,
	Stack,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";

// MUI style comp
const StyledModal = styled(Modal)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const RemarksModal = ({ open, handleModal, remarkModalTitle, dropDown }) => {
	return (
		<>
			<Tooltip
				onClick={() => handleModal(true, "Add Remark")}
				title="Add New Remark"
			>
				<button
					className="text-3xl rounded-full hover:bg-gray-100 p-3"
					style={{ color: "blue" }}
				>
					<IoIosAddCircleOutline />
				</button>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={() => handleModal(false, "Add Remark")}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					width={400}
					height={300}
					bgcolor="whitesmoke"
					p={3}
					borderRadius={5}
				>
					<Typography
						variant="h5"
						color="text.primary"
						textAlign="center"
					>
						{remarkModalTitle}
					</Typography>
					{/* Input-text Field */}
					<TextField
						sx={{ width: "100%", marginTop: "2rem" }}
						id="standard-multiline-static"
						multiline
						rows={2}
						placeholder="write remark ..."
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={2} mb={3}>
						{dropDown}
					</Stack>
					<Button fullWidth variant="contained">
						Submit
					</Button>
				</Box>
			</StyledModal>
		</>
	);
};

export default RemarksModal;
