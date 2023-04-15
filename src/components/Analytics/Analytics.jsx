import PropTypes from 'prop-types';

const Analytics = props => {
  const { className } = props;
  return (
    <div className={ `${className}`}>
      Analytics
    </div>
  );
};

Analytics.defaultProps = {
  variant: 'default',
  className: '',
};

Analytics.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Analytics;