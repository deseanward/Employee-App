import React from 'react';
import {
	EmployeeInfoContainer,
	EmployeeInfoItem,
} from './employee-info.styles';

const EmployeeInfo = () => {
	return (
		<EmployeeInfoContainer>
			<EmployeeInfoItem
				type='info'
				heading='Call Office'
				subheading='781-000-0002'
			/>

			<EmployeeInfoItem
				type='info'
				heading='Call Mobile'
				subheading='617-000-0002'
			/>

			<EmployeeInfoItem
				type='info'
				heading='SMS'
				subheading='617-000-0002'
			/>

			<EmployeeInfoItem
				type='info'
				heading='Email'
				subheading='jtaylor@fakemail.com'
			/>
		</EmployeeInfoContainer>
	);
};

export default EmployeeInfo;
