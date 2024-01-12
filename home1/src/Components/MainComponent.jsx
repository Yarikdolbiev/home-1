
import { useUser } from './UserContext';
import NestedComponent from './NestedComponent';

const MainComponent = () => {
  const { userData, loginUser } = useUser();

  const handleLogin = () => {
    loginUser({ username: 'user123', email: 'user@example.com' });
  };

  return (
    <div>
      <h1>Main Component</h1>
      {userData ? (
        <p>Welcome, {userData.username}!</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <NestedComponent />
    </div>
  );
};

export default MainComponent;