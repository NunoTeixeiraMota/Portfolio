import styled from "styled-components";

import logo from "../assets/Screenshot_2.png"; // Importing the image directly

const Home = () => {
    return (
        <Container>
            <ContentContainer>
                <LogoContainer>
                    <Logo src={logo} alt="Logo" />
                </LogoContainer>
                <Content>
                    <Title>Hi</Title>
                    <Description>
                        Hey there! Welcome to my website, where I share my journey as a programmer and showcase the projects I've been working on.
                    </Description>
                    <Description>
                        Come explore with me as I dive into the fascinating world of coding, sharing stories of challenges, triumphs, and everything in between.
                    </Description>
                    <Description>
                        Let's connect, learn, and grow together as we navigate the ever-evolving landscape of technology.
                    </Description>
                </Content>
            </ContentContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const Logo = styled.img`
    width: 250px;
    height: auto;
    border-radius: 20%;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }
`;

const ContentContainer = styled.div`
    background-color: rgba(36, 36, 36, 0.5); /* White-gray transparent background */
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
`;  

const LogoContainer = styled.div`
    flex: 0 0 auto;
    margin-right: 1rem;
`;

const Content = styled.div`
    text-align: left;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: white; /* Change color to white */
`;

const Description = styled.p`
    font-size: 1.2rem;
    color: white; /* Change color to white */
    margin-top: 1rem;
`;

export default Home;
