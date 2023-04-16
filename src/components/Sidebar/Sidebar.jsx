import PropTypes from 'prop-types';

const Sidebar = props => {
  return (
    <div className="Sidebar">
      Sidebar
    </div>
  );
};

Sidebar.defaultProps = {
  variant: 'default',
  className: '',
};

Sidebar.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Sidebar;