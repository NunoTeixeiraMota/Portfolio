import './About.css';
import styled from 'styled-components';

const About = () => {
  const technologies = [
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "MongoDB & SQL", icon: "fas fa-database" },
    { name: "Typescript & JavaScript", icon: "fab fa-js" },
    { name: "C", icon: "fas fa-c" },
    { name: "Python", icon: "fab fa-python" },
  ];

  return (
    <Container>
      <LeftSection>
      <Title style={{ textAlign: "center" }}>Life Map</Title>
        <Trajectory>
          <RoadMap>
            <CheckPoint>
              <CheckPointTitle>Born</CheckPointTitle>
              <CheckPointDescription>Porto Portugal</CheckPointDescription>
            </CheckPoint>
            <CheckPoint>
              <CheckPointTitle>School</CheckPointTitle>
              <CheckPointDescription>Esc. Sec. de Marco de Canaveses</CheckPointDescription>
            </CheckPoint>
            <CheckPoint>
              <CheckPointTitle>University</CheckPointTitle>
              <CheckPointDescription>Computer Engineering at ISEP, Porto</CheckPointDescription>
            </CheckPoint>
          </RoadMap>
        </Trajectory>
      </LeftSection>
      <RightSection>
        <TechStack>
        <Title style={{ textAlign: "left", fontSize: "1rem", color: "rgba(255, 255, 255, 0.25)" }}>Technologies I Work With:</Title>
          <TechList>
            {technologies.map((tech, index) => (
              <TechItem key={index}>
                <TechCard>
                  <Icon className={`${tech.icon}`} />
                  <TechName>{tech.name}</TechName>
                </TechCard>
              </TechItem>
            ))}
          </TechList>
        </TechStack>
      </RightSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding-top: 10rem;
  `;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: white;
`;

const Trajectory = styled.div`
  border-radius: 8px;
  font-size: 1.2rem;
  color: white;
`;

const RoadMap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckPoint = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1rem;
`;

const CheckPointTitle = styled.div`
  font-weight: bold;
  color: white;
`;

const CheckPointDescription = styled.div`
  color: white;
`;

const TechStack = styled.div`
  margin-bottom: 1rem;
`;



const TechList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const TechItem = styled.li`
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`;

const TechCard = styled.div`
  background-color: rgba(36, 36, 36, 0.5);
  border-radius: 8px;
  padding: 0.75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TechName = styled.span`
  color: white;
  margin-top: 0.5em;
`;

const Icon = styled.i`
  font-size: 7rem;
  color: white;
  width: 1.3em;
  height: 1em;
`;

export default About;
