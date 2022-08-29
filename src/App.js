import './App.css';
import Navbar from './Components/Navbar/Navbar'
import JobsList from './Components/JobsList/JobsList';
import Upcoming from './Components/UpComming/Upcoming';
import Faqs from './Components/Faqs/Faqs'
import { Container } from '@mui/material';
import { customStyle } from './styles.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <JobsList />
      <Container sx={customStyle.container} disableGutters={true}>
        <Upcoming />
        <Faqs />
      </Container>
    </div>
  );
}

export default App;
