import PropTypes from 'prop-types';

const Home = () => {
  return (
    <div className=Home>
      Home
    </div>
  );
};

Home.defaultProps = {
  className: '',
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;