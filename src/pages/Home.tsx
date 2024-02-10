import styled from "styled-components";

const logo = '/vite-project/src/assets/Screenshot_2.png';

const Home = () => {
    return (
        <Container>
            <Logo src={logo} alt="Logo" />
            <Content>
                <Title>Hi</Title>
                <Description>
                    Hey there! Welcome to my website, where I share my journey as a programmer and showcase the projects I've been working on.
                    <p></p>
                    Come explore with me as I dive into the fascinating world of coding, sharing stories of challenges, triumphs, and everything in between.
                    <p></p> 
                    Let's connect, learn, and grow together as we navigate the ever-evolving landscape of technology.
                </Description>
            </Content>
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

const Content = styled.div`
    text-align: left;
    margin-left: 2rem;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #333;
`;

const Description = styled.p`
    font-size: 1.2rem;
    color: #666;
    margin-top: 1rem;
`;

export default Home;
