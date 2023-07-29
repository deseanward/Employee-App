import React from 'react';
import {
	ListItemContainer,
	AvatarContainer,
	Avatar,
	Heading,
	SubHeading,
	InfoContainer,
} from './list-item.styles';

import { FaGreaterThan } from 'react-icons/fa';

const ListItem = ({ type, avatar, heading, subheading }) => {
	return (
		<ListItemContainer id='list-item-container' type={type}>
			{/* Image */}
			<AvatarContainer id='avatar-container' type={type}>
				<Avatar src={avatar} />
			</AvatarContainer>

			{/* Info */}
			<InfoContainer id='info-container'>
				<Heading id='heading'>{heading}</Heading>
				<SubHeading id='subheading'>{subheading}</SubHeading>
			</InfoContainer>

			<FaGreaterThan id='arrow' type={type} />
		</ListItemContainer>
	);
};

export default ListItem;
