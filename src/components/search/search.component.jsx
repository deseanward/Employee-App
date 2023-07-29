import React from 'react';
import { SearchContainer, SearchIcon, SearchIconContainer, SearchInput } from './search.styles';

import { FaSearch } from 'react-icons/fa';

const Search = () => {
	return (
		<SearchContainer>
			<SearchInput placeholder='Search' />
			<SearchIconContainer>
				<SearchIcon />
			</SearchIconContainer>
		</SearchContainer>
	);
};

export default Search;
