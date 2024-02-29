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
                        <BoxContent>Learn about me</BoxContent>
                    </Box>
                    <Box onClick={() => scrollToSection("projects")}>
                        <BoxTitle><FontAwesomeIcon icon={faBriefcase} size="2x" color="white" /></BoxTitle>
                        <BoxContent>See my projects</BoxContent>
                    </Box>
                    {/* LinkedIn Box */}
                    <Box onClick={() => scrollToSection("contact")}>
                        <BoxTitle><FontAwesomeIcon icon={faEnvelope} size="2x" color="white" /></BoxTitle>
                        <BoxContent>Contact me</BoxContent>
                    </Box>
                </BoxContainer>
            </FlexContainer>
        </Container>
    );
};


const FSD = styled.h1`
    color: white;
    padding: 1px;
    border-radius: 20px;
    margin-top: 0;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
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
background: linear-gradient(135deg, rgba(125, 72, 177, 0.5) 0%, rgba(110, 52, 165, 0.5) 100%);
padding: 1rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 2rem;
`;

const LogoContainer = styled.div`
    margin-right: 1rem;
`;

const Content = styled.div`
    text-align: left;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: white;
`;

const Description = styled.p`
    font-size: 1.2rem;
    color: white;
    margin-top: 1rem;
`;

const BoxContainer = styled.div`
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;
    margin-left: 2rem;
`;

const Box = styled.div`
    padding: 0.25rem;
    background: linear-gradient(135deg, rgba(125, 72, 177, 0.2) 0%, rgba(110, 52, 165, 0.2) 100%);
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 1rem;
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
    color : white;
`;

export default Home;
