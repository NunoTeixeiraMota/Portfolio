import logo from "../assets/Screenshot_2.png"; // Importing the image directly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Home = () => {
    // Function to scroll to a section
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const startPos = window.pageYOffset;
            const targetPos = section.getBoundingClientRect().top + window.pageYOffset;

            const distance = targetPos - startPos;
            const duration = 800; // Adjust duration as needed

            let start: number | null = null;

            const step = (timestamp: number) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);

                window.scrollTo(0, startPos + distance * easeInOutQuad(percentage));

                if (progress < duration) {
                    requestAnimationFrame(step);
                } else {
                    window.location.hash = `#${id}`;
                }
            };

            requestAnimationFrame(step);
        }
    };

    // Easing function for smooth animation
    function easeInOutQuad(t: number) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    return (
        <Container>
            <FSD>
                <span>F</span>
                <span>U</span>
                <span>L</span>
                <span>L</span>
                <span>S</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span>K</span>
                <ReflectionWrapper>
                    <GradientText>F</GradientText>
                    <GradientText>U</GradientText>
                    <GradientText>L</GradientText>
                    <GradientText>L</GradientText>
                    <GradientText>S</GradientText>
                    <GradientText>T</GradientText>
                    <GradientText>A</GradientText>
                    <GradientText>C</GradientText>
                    <GradientText>K</GradientText>
                </ReflectionWrapper>
            </FSD>

            <FlexContainer>
                <ContentContainer>
                    <LogoContainer>
                        <Logo src={logo} alt="Logo" />
                    </LogoContainer>
                    <Content>
                        <Title>Hi</Title>
                        <Description>
                            I'm Nuno, a full-stack developer based in Porto, Portugal.
                        </Description>
                        <Description>Student at ISEP Instituto Superior de Engenharia do Porto.</Description>
                        <Description>Crafting digital solutions from front to back.</Description>
                    </Content>
                </ContentContainer>
                <BoxContainer>
                    <Box onClick={() => scrollToSection("about")}>
                        <BoxTitle><FontAwesomeIcon icon={faAddressCard} size="2x" color="white" /></BoxTitle>
                        <BoxContent>Learn about me</BoxContent>
                    </Box>
                    <Box onClick={() => scrollToSection("projects")}>
                        <BoxTitle><FontAwesomeIcon icon={faBriefcase} size="2x" color="white" /></BoxTitle>
                        <BoxContent>See my projects</BoxContent>
                    </Box>
                    <Box onClick={() => scrollToSection("contact")}>
                        <BoxTitle><FontAwesomeIcon icon={faEnvelope} size="2x" color="white" /></BoxTitle>
                        <BoxContent>Contact me</BoxContent>
                    </Box>
                </BoxContainer>
            </FlexContainer>
        </Container>
    );
};

const FSD = styled.div`
    top: -5%;
    color: white;
    font-size: 8em;
    z-index: 1;
    position: relative;
    display: inline-block;
    transition: transform 0.3s ease;

    span {
        display: inline-block;
        transition: transform 0.3s ease;
    }

    span:hover {
        transform: translateY(-10px);
    }

    @media (max-width: 768px) {
        font-size: 4em; /* Adjust font size for mobile */
    }
`;

const ReflectionWrapper = styled.div`
    position: absolute;
    bottom: -115px;
    left: 0;
    width: 100%;
    transform: scaleY(-1);
    opacity: 0.5;

    @media (max-width: 768px) {
        bottom: -60px; /* Adjust position for mobile */
    }
`;

const GradientText = styled.span`
    background: linear-gradient(to top, rgba(125, 72, 177, 0.5) 0%, rgba(125, 72, 177, 0.2) 50%, rgba(125, 72, 177, 0) 90%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    padding: 1rem;

    @media (max-width: 768px) {
        padding: 0.5rem; /* Adjust padding for mobile */
    }
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column; /* Stack elements vertically on mobile */
    }
`;

const Logo = styled.img`
    width: 250px;
    height: auto;
    border-radius: 20%;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        width: 150px; /* Adjust logo size for mobile */
    }
`;

const ContentContainer = styled.div`
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.5);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 2rem;

    @media (max-width: 768px) {
        flex-direction: column; /* Stack elements vertically on mobile */
        text-align: center; /* Center text on mobile */
    }
`;

const LogoContainer = styled.div`
    margin-right: 1rem;

    @media (max-width: 768px) {
        margin-right: 0; /* Remove margin for mobile */
        margin-bottom: 1rem; /* Add bottom margin for spacing */
    }
`;

const Content = styled.div`
    text-align: left;

    @media (max-width: 768px) {
        text-align: center; /* Center text on mobile */
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: white;

    @media (max-width: 768px) {
        font-size: 2rem; /* Adjust title size for mobile */
    }
`;

const Description = styled.p`
    font-size: 1.2rem;
    color: white;
    margin-top: 1rem;

    @media (max-width: 768px) {
        font-size: 1rem; /* Adjust description size for mobile */
    }
`;

const BoxContainer = styled.div`
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;
    margin-left: 2rem;

    @media (max-width: 768px) {
        width: 100%; /* Full width on mobile */
        margin-left: 0; /* Remove left margin */
        padding-top: 1rem; /* Adjust padding for mobile */
    }
`;

const Box = styled.div`
    padding: 0.25rem;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 1rem;
    position: relative;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.2);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 0 20px 5px rgba(125, 72, 177, 0.9);
    }

    @media (max-width: 768px) {
        margin-bottom: 0.5rem; /* Adjust margin for mobile */
    }
`;

const BoxTitle = styled.h2`
    font-size: 1rem;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 0.9rem; /* Adjust title size for mobile */
    }
`;

const BoxContent = styled.p`
    font-size: 1rem;
    color: white;

    @media (max-width: 768px) {
        font-size: 0.9rem; /* Adjust content size for mobile */
    }
`;

export default Home;
