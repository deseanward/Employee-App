import React from 'react';
import { HeaderContainer } from './header.styles';

const Header = ({ heading }) => {
	return (
		<HeaderContainer>
			<h1>{heading}</h1>
		</HeaderContainer>
	);
};

export default Header;
