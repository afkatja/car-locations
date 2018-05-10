import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./variables";

const StyledLink = styled(Link)`
	color: #000;
	display: block;
	line-height: 1.5;
	text-decoration: none;
	cursor: pointer;
`;

export default function CustomLink(props) {
  return (
    <StyledLink to={props.to}>{props.children}</StyledLink>
  );
}
