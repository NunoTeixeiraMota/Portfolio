import './About.css';
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
        <LeftSection className="leftsection">
          <Title>Life Road Map</Title>
          <Trajectory>
            <RoadMap className="roadmap">
              <CheckPoint>
                <CheckPointTitle>Born</CheckPointTitle>
                <CheckPointDescription>Marco de Canaveses, Portugal</CheckPointDescription>
              </CheckPoint>
              <CheckPoint>
                <CheckPointTitle>Study</CheckPointTitle>
                <CheckPointDescription>Computer Engineering at ISEP, Porto</CheckPointDescription>
              </CheckPoint>
              <CheckPoint>
                <CheckPointTitle>Projects</CheckPointTitle>
                <CheckPointDescription>Relevant projects description here</CheckPointDescription>
              </CheckPoint>
            </RoadMap>
          </Trajectory>
        </LeftSection>
        <RightSection>
          <TechStack className="techcontainer">
            <Title>Technologies I Work With:</Title>
            <TechList className="techlist">
              {technologies.map((tech, index) => (
                <TechItem key={index}>
                  <TechCard className="TechCard">
                    <Icon className={`${tech.icon}`} />
                    <TechName>{tech.name}</TechName>
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  background-color: rgba(36, 36, 36, 0.5);
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
