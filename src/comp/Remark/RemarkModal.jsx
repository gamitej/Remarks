import styled from "@emotion/styled";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
	EmojiEmotions,
	Image,
	PersonAdd,
	VideoCameraBack,
} from "@mui/icons-material";
import {
	Avatar,
	Box,
	Button,
	Modal,
	Stack,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "10px",
	marginTop: "20px",
	marginBottom: "20px",
});

const RemarksModal = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip onClick={(e) => setOpen(true)} title="Add New Remark">
				<button
					className="text-3xl rounded-full hover:bg-gray-100 p-3"
					style={{ color: "blue" }}
				>
					<IoIosAddCircleOutline />
				</button>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={(e) => setOpen(false)}
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
					<Typography variant="h6" color="gray" textAlign="center">
						Add Remark
					</Typography>
					<TextField
						sx={{ width: "100%",marginTop:"2rem" }}
						id="standard-multiline-static"
						multiline
						rows={2}
						placeholder="What's on your mind ?"
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={2} mb={3}>
						<p>DropDown</p>
            <p>DatePicker</p>
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
