import './About.css';
import styled from 'styled-components';
import { FaNodeJs, FaReact, FaJs, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { PiFileSqlDuotone } from "react-icons/pi";
import { FaAngular } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const About = () => {
  const technologies = [
    { name: "Node.js", icon: FaNodeJs },
    { name: "React", icon: FaReact },
    { name: "Angular", icon: FaAngular },
    { name: "JavaScript", icon: FaJs },
    { name: "Typescript", icon: SiTypescript },
    { name: "MongoDB", icon: BiLogoMongodb },
    { name: " SQL", icon: PiFileSqlDuotone },
    { name: "Git", icon: FaGitAlt },
    { name: "Python", icon: FaPython },
    { name: "Java", icon: FaJava },
    { name: "Linux", icon: FaLinux },
    { name: "Postman", icon: SiPostman }
  ];

  return (
    <Container>
      <LFM>
        <Section>
          <Title>Life Map</Title>
          <Trajectory>
            <RoadMap>
              <CheckPoint>
                <CheckPointTitle>Born</CheckPointTitle>
                <CheckPointDescription>Porto Portugal</CheckPointDescription>
              </CheckPoint>
              <CheckPoint>
                <CheckPointTitle>School</CheckPointTitle>
                <CheckPointDescription>Esc. Sec. de Marco de Canaveses </CheckPointDescription>
              </CheckPoint>
              <CheckPoint>
                <CheckPointTitle>University</CheckPointTitle>
                <CheckPointDescription>Computer Engineering at ISEP, Porto</CheckPointDescription>
              </CheckPoint>
            </RoadMap>
          </Trajectory>
        </Section>
        <Section>
          <Title>Hobby</Title>
          <Trajectory>
            <RoadMap>
              <CheckPoint>
                <CheckPointTitle>LAN Party aeISEP </CheckPointTitle>
                <CheckPointDescription>1st# Place CS:GO Tournament </CheckPointDescription>
              </CheckPoint>
              <CheckPoint>
                <CheckPointTitle>Level Up- GameJam ISEP </CheckPointTitle>
                <CheckPointDescription>3rd# Place</CheckPointDescription>
              </CheckPoint>
            </RoadMap>
          </Trajectory>
        </Section>
      </LFM>
      <RightSection>
        <TechStack>
          <Title>Technologies I Work With:</Title>
          <TechList>
            {technologies.map((tech, index) => (
              <TechItem key={index}>
                <TechCard>
                  {tech.icon && <Icon>{<tech.icon size={64} />}</Icon>}
                  {!tech.icon && <CustomIcon>C</CustomIcon>}
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
  align-items: center;
  width: 100%;
  padding-top: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const LFM = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-top: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    text-align: center;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Trajectory = styled.div`
  border-radius: 8px;
  font-size: 1.2rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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
  width: 150px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TechName = styled.span`
  color: white;
  margin-top: 0.5em;
`;

const Icon = styled.span`
  font-size: 4rem;
  color: white;
`;

const CustomIcon = styled.span`
  font-size: 4rem;
  color: white;
`;

export default About;
