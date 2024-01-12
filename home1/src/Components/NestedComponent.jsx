
import { useUser } from './UserContext';
import ProfileComponent from './ProfileComponent';

const NestedComponent = () => {
  const { userData } = useUser();

  return (
    <div>
      <h2>Nested Component</h2>
      {userData && (
        <div>
          <p>Logged in as {userData.username}</p>
          <ProfileComponent />
        </div>
      )}
    </div>
  );
};

export default NestedComponent;