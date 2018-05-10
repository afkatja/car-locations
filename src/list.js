import React from 'react';
import styled from "styled-components";
import { colors } from "./variables";

const StyledList = styled.ul`
	list-style: none;
	padding: 0;
	li {
		line-height: 1.5;
		padding: 10px;
		margin: 0;
		&:not(:last-child) {
			border-bottom: 1px solid ${colors.lightGrey};
		}
		&:hover, &:focus {
			cursor: pointer;
			background: ${colors.offWhite};
		}
	}
`;

export default function List(props) {
  return (
    <StyledList>{props.children}</StyledList>
  );
}
