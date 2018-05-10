import React from "react";
import styled from "styled-components";
import { colors } from "./variables";

const StyledTitle = styled.h1`
	letter-spacing: -1.8px;
	line-height: 1.1em;
	font-size: 60px;
	color: ${colors.brandGreen};
	max-width: 800px;
`;

export default function Title(props) {
	return <StyledTitle>{props.children}</StyledTitle>;
}
