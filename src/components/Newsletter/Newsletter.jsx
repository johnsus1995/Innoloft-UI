import PropTypes from 'prop-types';

const Newsletter = props => {
  const { className } = props;
  return (
    <div className={"Newsletter"}>
      Newsletter
    </div>
  );
};

Newsletter.defaultProps = {
  variant: 'default',
  className: '',
};

Newsletter.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Newsletter;