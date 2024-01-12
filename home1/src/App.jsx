import { UserProvider } from './Components/UserContext';
import MainComponent from './Components/MainComponent';

const App = () => {
  return (
    <UserProvider>
      <MainComponent />
    </UserProvider>
  );
};

export default App;