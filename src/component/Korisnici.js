import PropTypes from "prop-types";

const Korisnici = ({user}) => {
  return (
  <div>
   <img src={user.avatar_url} alt="Profile picture" />
    <p>User name: {user.name}</p>
    <p>Bio: {user.bio}</p>
    <p>Location: {user.location}</p>
  </div>
  );
};

Korisnici.propTypes = {
  user: PropTypes.object,
};

export default Korisnici;
