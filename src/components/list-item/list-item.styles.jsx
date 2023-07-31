import styled from 'styled-components';

export const ListItemContainer = styled.div`
	width: 100%;
	height: ${props => (props.type === 'hero' ? '12em' : '6em')};
	border: 1px solid gray;
	border-radius: 0.25em;
	padding: 1em;
	display: flex;
	justify-content: ${props =>
		props.type === 'info' ? 'space-between' : 'flex-start'};
	align-items: center;
	gap: 0.5em;
	transition: all 0.25s ease-in-out;

	&:hover {
		cursor: ${props => (props.type === 'hero' ? 'arrow' : 'pointer')};

		box-shadow: ${props =>
			props.type === 'hero' ? 'none' : '4px 4px 8px black'};

		#avatar-container,
		#arrow {
			box-shadow: ${props =>
	props.type === 'hero' ? 'none' : '4px 4px 8px black'};
				background-color: white;
		}

		#avatar-container {
			transform: ${props =>
			props.type === 'hero' ? 'none' : 'scale(1.05)'};
		}
	}

	&:active {
		background-color: whitesmoke;
		box-shadow: inset 4px 4px 8px black;
	}

	#arrow {
		font-size: 3rem;
		color: gray;
		background-color: white;
		border-radius: 0.25em;
		padding: 0.25em;
		display: ${props => (props.type === 'info' ? 'block' : 'none')};
		transition: all 0.4s ease-in-out;

		&:hover {
			color: black;
		}

		&:active {
			background-color: white;
			box-shadow: inset 4px 4px 8px black;
			//border: 1px solid gray;
		}
	}
`;

export const AvatarContainer = styled.div`
	height: 100%;
	width: ${props => (props.type === 'hero' ? '150px' : '75px')};
	border-radius: 50%;
	border: 1px solid lightgray;
	/* padding: 0.25em; */
	display: ${props => (props.type === 'info' ? 'none' : 'block')};
	transition: all 0.4s ease-in-out;
`;

export const Avatar = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	border: none;
`;

export const InfoContainer = styled.div``;

export const Heading = styled.h2``;

export const SubHeading = styled.span``;
