import { Container } from '@chakra-ui/react';
import PomodoroTimer from '../components/PomodoroTimer';

const HomePage: React.FC = () => {
  return (
    <Container maxW="md" centerContent>
      <PomodoroTimer />
    </Container>
  );
};

export default HomePage;