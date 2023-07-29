import styled from 'styled-components';
import ListItem from '../list-item/list-item.component';

export const EmployeeContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	width: 70%;
	max-width: 500px;
	height: 100%;
	padding: 0.5em;
`;

export const EmployeeHero = styled(ListItem)``;
