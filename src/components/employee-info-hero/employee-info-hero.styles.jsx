import styled from 'styled-components';
import ListItem from '../list-item/list-item.component';

export const EmployeeInfoHeroItem = styled(ListItem)`
	height: ${props => (props.type === 'hero' ? '20em' : '8em')};

	&:hover {
		cursor: arrow;
	}
`;
