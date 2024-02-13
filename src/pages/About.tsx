import styled from 'styled-components';

const About = () => {
  const technologies = [
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "MongoDB & SQL", icon: "fas fa-database" },
    { name: "Typescript & JavaScript", icon: "fab fa-js" },
    { name: "C", icon: "fas fa-c" },
    { name: "Python", icon: "fab fa-python" }
  ];
  return (
    <ContarinerM>
      <Container>
        <LeftSection>
          <Title>About Me</Title>
          <Trajectory>
            <Info>
              I'm Nuno, a 22-year-old full-stack developer from the beautiful town of Marco de Canaveses in Portugal. 
            </Info>
            <Info>
            I study Computer Engineering at ISEP (Instituto Superior de Engenharia do Porto), where I honed my skills in both front-end and back-end development.
            </Info>
            <Info>
              Combining creativity with technical prowess, I strive to deliver solutions that not only meet but exceed expectations. Whether it's building a sleek frontend interface or architecting a robust backend system, I'm passionate about turning ideas into reality through code.
            </Info>
            <Info>
              When I'm not coding, you can find me exploring new technologies, tinkering with side projects, or simply enjoying the serene landscapes of Marco de Canaveses.
            </Info>
            <Contact>
              Feel free to reach out, whether it's for collaboration, project inquiries, or just to say hi! Let's build something awesome together.
            </Contact>
          </Trajectory>
        </LeftSection>
        <RightSection>
          <TechStack>
            <TechTitle>Technologies I Work With:</TechTitle>
            <TechList>
              {technologies.map((tech, index) => (
                <TechItem key={index}>
                  <TechCard>
                    <Icon className={`${tech.icon}`} />
                    <TechName>{tech.name}</TechName> {/* Add the technology name here */}
                  </TechCard>
                </TechItem>
              ))}

            </TechList>
          </TechStack>
        </RightSection>
      </Container>
    </ContarinerM>
  );
};

const ContarinerM = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
const Container = styled.div`
  background-color: rgba(36, 36, 36, 0.5); /* White-gray transparent background */
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 20px;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: white;
`;

const Trajectory = styled.div`
  font-size: 1.2rem;
  color: white;
`;

const Info = styled.p`
  text-align: left;
  margin-bottom: 1rem;
`;

const Contact = styled.p`
  margin-top: 1rem;
  text-align: left;
`;

const TechStack = styled.div`
  margin-bottom: 1rem;
`;

const TechTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: white;
`;

const TechList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const TechItem = styled.li`
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`;

const TechCard = styled.div`
  background-color: rgba(36, 36, 36, 0.5);
  border-radius: 8px;
  padding: 1em;
  display: flex;
  flex-direction: column; /* Display children elements in a column */
  align-items: center;
  text-align: center; /* Center text horizontally */
`;

const TechName = styled.span`
  color: white;
  margin-top: 0.5em; /* Add margin to separate icon and name */
`;

const Icon = styled.i`
  font-size: 10rem;
  color: white;
  width: 1.3em; /* Adjust width and height to desired size */
  height: 1em;
`;

export default About;
