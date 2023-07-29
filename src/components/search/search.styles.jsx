import styled from 'styled-components';

import { FaSearch } from 'react-icons/fa';

export const SearchContainer = styled.div`
	width: 100%;
	height: 4em;
	display: flex;
	border: 1px solid gray;
	border-radius: 0.25em;
`;

export const SearchInput = styled.input`
	width: 100%;
	height: 100%;
	padding: 0.5em;
	border: none;
	outline: none;

	font-size: var(--body-font);
`;

export const SearchIconContainer = styled.div`
	border-radius: 0.25em;
	/* box-shadow: 0.7px 0.9px 0.8px rgba(0, 0, 0, 0.167),
		1.7px 2.2px 2.1px rgba(0, 0, 0, 0.24),
		3.5px 4.4px 4.3px rgba(0, 0, 0, 0.3),
		7.3px 9.1px 8.8px rgba(0, 0, 0, 0.373),
		20px 25px 24px rgba(0, 0, 0, 0.54); */
	width: 4em;
	display: flex;
	justify-content: center;
	align-items: center;
    
    :hover {
        cursor: pointer;
        color: gray;
    }

    :active {
        color: lightgray;
    }
`;

export const SearchIcon = styled(FaSearch)`
	color: black;
	font-size: 2em;
	margin: 0.5em;
`;
