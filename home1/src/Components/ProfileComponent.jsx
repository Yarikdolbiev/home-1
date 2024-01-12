
import { useUser } from './UserContext';

const ProfileComponent = () => {
  const { userData } = useUser();

  return (
    <div>
      <h3>Profile Component</h3>
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </div>
  );
};

export default ProfileComponent;