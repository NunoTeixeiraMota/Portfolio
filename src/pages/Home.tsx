import styled from "styled-components";
import logo from "../assets/Screenshot_2.png"; // Importing the image directly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
            <FSD>Full Stack Developer</FSD>
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
                {/* Boxes with click functionality */}
                <BoxContainer>
                    <Box onClick={() => scrollToSection("about")}>
                        <BoxTitle><FontAwesomeIcon icon={faAddressCard} size="2x" color="white" /></BoxTitle>
                        <BoxContent>Learn about me.</BoxContent>
                    </Box>
                    <Box onClick={() => scrollToSection("projects")}>
                        <BoxTitle><FontAwesomeIcon icon={faBriefcase} size="2x" color="white" /></BoxTitle>
                        <BoxContent>See my projects.</BoxContent>
                    </Box>
                    {/* Add more boxes here */}
                    <Box onClick={() => scrollToSection("contact")}>
                        <BoxTitle><FontAwesomeIcon icon={faEnvelope} size="2x" color="white" /></BoxTitle>
                        <BoxContent>Get in touch.</BoxContent>
                    </Box>
                </BoxContainer>
            </FlexContainer>
        </Container>
    );
};

const FSD = styled.h1`
  padding: 1px; /* Adjust padding as needed */
  border-radius: 20px; /* Rounded corners */
  margin-top: 0; /* Remove default margin */
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the height to 100% of viewport height */
  flex-direction: column; /* Change to column layout */
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 250px;
  height: auto;
  border-radius: 20%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 1rem;
`;

const ContentContainer = styled.div`
  background-color: rgba(36, 36, 36, 0.5); /* White-gray transparent background */
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: row; /* Align items horizontally */
  margin-top: 2rem; /* Add margin to separate from logo */
`;

const LogoContainer = styled.div`
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

const BoxContainer = styled.div`
  padding-top: 2.5rem; /* Add padding to separate from ContentContainer */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
  margin-left: 2rem; /* Add margin to separate from ContentContainer */
`;

const Box = styled.div`
  background-color: rgba(36, 36, 36, 0.5); /* White-gray transparent background */
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 1rem; /* Add margin between the boxes */
  &:hover {
    transform: translateY(-5px) rotateX(10deg) rotateY(5deg);
    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 1);
  }
`;



const BoxTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const BoxContent = styled.p`
  font-size: 1rem;
`;

export default Home;
