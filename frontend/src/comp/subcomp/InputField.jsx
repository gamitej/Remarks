import React from "react";
import { Alert } from "@mui/material";

const InputField = ({
	inputClassName,
	handleChange,
	autoComplete = "off",
	placeholder,
	type,
	name,
	message,
	show,
	label,
	severity,
	handleAlertChange,
	value,
	labelCheck,
}) => {
	return (
		<>
			<input
				className={inputClassName}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				autoComplete={autoComplete}
			/>
			{message && show && label === labelCheck && (
				<Alert onClose={handleAlertChange} severity={severity}>
					{message}
				</Alert>
			)}
		</>
	);
};

export default InputField;
