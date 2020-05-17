import React from "react";
import styled from "styled-components";

const Heading = (props) => {
	const Container = styled.div`
        display: flex;
        align-items: center;
        width: 90%;    
        margin: 0 auto;

    `;

	const Title = styled.h1`
		font-size: 1.5rem;
		font-style: italic;
	`;


	return (
		<Container>
			<Title>NASA Photo the Day!</Title>
		</Container>
	)
};

export default Heading;

