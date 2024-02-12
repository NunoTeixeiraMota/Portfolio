import styled from 'styled-components';

const About = () => {
  return (
    <ContainerContainer>
            <Title>About Me</Title>
    <Container>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <Description>
        <Info>
          I'm Nuno, a 22-year-old full-stack developer from the beautiful town of Marco de Canaveses in Portugal. I graduated in Computer Engineering from ISEP (Instituto Superior de Engenharia do Porto), where I honed my skills in both front-end and back-end development.
        </Info>
        <Info>
          My journey in web development has been exhilarating, with a focus on utilizing cutting-edge technologies to craft seamless user experiences.
        </Info>
        <TechStack>
          <TechTitle>Technologies I Work With:</TechTitle>
          <TechList>
            <TechItem><Icon className="fab fa-node-js" /> <TechName>Node.js:</TechName> I've leveraged the power of Node.js to build scalable and efficient server-side applications.</TechItem>
            <TechItem><Icon className="fab fa-react" /> <TechName>React:</TechName> I enjoy creating dynamic and interactive user interfaces that breathe life into web applications.</TechItem>
            <TechItem><Icon className="fas fa-database" /> <TechName>MongoDB & SQL:</TechName> I'm adept at handling data storage and retrieval efficiently.</TechItem>
            <TechItem><Icon className="fab fa-js" /> <TechName>Typescript & JavaScript:</TechName> I thrive in both typed and untyped environments, delivering robust solutions.</TechItem>
            <TechItem><Icon className="fas fa-code" /> <TechName>C and Python:</TechName> These languages hold a special place in my heart for their versatility and performance.</TechItem>
          </TechList>
        </TechStack>
        <Info>
          Combining creativity with technical prowess, I strive to deliver solutions that not only meet but exceed expectations. Whether it's building a sleek frontend interface or architecting a robust backend system, I'm passionate about turning ideas into reality through code.
        </Info>
        <Info>
          When I'm not coding, you can find me exploring new technologies, tinkering with side projects, or simply enjoying the serene landscapes of Marco de Canaveses.
        </Info>
        <Contact>
          Feel free to reach out, whether it's for collaboration, project inquiries, or just to say hi! Let's build something awesome together.
        </Contact>
      </Description>
    </Container>
    </ContainerContainer>
  );
};
const ContainerContainer = styled.div`
padding-top: 10rem;
height: 100vh; /* Set the height to 100% of viewport height */
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`

  background-color: rgba(36, 36, 36, 0.5); /* White-gray transparent background */
  padding: 2rem;
  padding-top: 0; /* Remove top padding */
  border-radius: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: white ; /* Change color to blue */
`;

const Description = styled.div`
  font-size: 1.2rem;
  color: white; /* Change color to white */
  margin-top: 1rem;
`;

const Info = styled.p`
  text-align: left;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  margin-bottom: 1rem;
  text-align: left;
`;

const TechTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const TechList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TechItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Icon = styled.i`
  margin-right: 0.5rem;
`;

const TechName = styled.span`
  color: white;
`;

const Contact = styled.p`
  margin-top: 1rem;
  text-align: left;
`;

export default About;
