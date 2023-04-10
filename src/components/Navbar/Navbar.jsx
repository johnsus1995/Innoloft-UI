import PropTypes from 'prop-types';

const Navbar = props => {
  const { className } = props;
  return (
    <div className={ `${className}`}>
      Navbar
    </div>
  );
};

Navbar.defaultProps = {
  variant: 'default',
  className: '',
};

Navbar.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Navbar;