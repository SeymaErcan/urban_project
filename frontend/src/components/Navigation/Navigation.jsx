import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css'

const Navigation = ({ isLoaded }) => {

    const currUser = useSelector((state) => state.session.user);

    const sessionLinks = currUser ? (
        <>
          <li>
            <ProfileButton user={currUser} />
          </li>
        </>
      ) : (
        <>
          <li>
            <OpenModalButton
              buttonText="Log In"
              modalComponent={<LoginFormModal />}
            />
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </>
      );

      return (
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {isLoaded && sessionLinks}
        </ul>
      );
    }

export default Navigation
