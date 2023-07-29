import React from 'react';
import {
	DirectoryContainer,
	DirectoryItem,
} from './directory.styles';

const EmployeeDirectory = () => {
	return (
		<DirectoryContainer>
			<DirectoryItem
				avatar='https://img.freepik.com/free-photo/stylish-bearded-male-with-tattooed-arms-dressed-shirt-posing-grey-background_613910-15701.jpg?w=900&t=st=1690591898~exp=1690592498~hmac=f0c0432ce3327090a9c77d87ddd955490d8b6658f4d69562198ac72690326e7c'
				heading='James King'
				subheading='President and CEO'
			/>
			<DirectoryItem
				avatar='https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?w=900&t=st=1690591130~exp=1690591730~hmac=afa615f25dafdbc4f9a9bcc59f59852b63fc1592fd8854d5a9eea268dad7d05f'
				heading='Julie Taylor'
				subheading='VP of Marketing'
			/>
			<DirectoryItem
				avatar='https://img.freepik.com/free-photo/portrait-african-american-model_23-2149072141.jpg?w=740&t=st=1690592264~exp=1690592864~hmac=8f69eb6a37c05a22da513a6ce07404090e8b418caaea5d77988e996e3dfe3ebd'
				heading='Eugene Lee'
				subheading='CFO'
			/>
			<DirectoryItem
				avatar='https://img.freepik.com/premium-photo/closeup-portrait-handsome-smartlooking-smiling-with-toothy-smile-male-posing-social-advertisement-isolated-white-background-with-copy-space-your-promotional-information-content_616427-3101.jpg?w=900'
				heading='John Williams'
				subheading='VP of Engineering'
			/>
			<DirectoryItem
				avatar='https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?w=740&t=st=1690592110~exp=1690592710~hmac=3cd4be1a3496589336a0e07aa70a797b04d5b2dfca0b19ff78fe9dd50ad938e7'
				heading='Ray Moore'
				subheading='VP of Sales'
			/>
			<DirectoryItem
				avatar='https://img.freepik.com/free-photo/cute-smiling-young-man-with-bristle-looking-satisfied_176420-18989.jpg?w=900&t=st=1690591971~exp=1690592571~hmac=f7117f0db3cbe80b7ee9223c86b631ca9c92f9be9228d90d8eaf5085de7a2794'
				heading='Paul Jones'
				subheading='QA Manager'
			/>
		</DirectoryContainer>
	);
};

export default EmployeeDirectory;
