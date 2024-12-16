import PropTypes from 'prop-types';

function Child3({child3Data}) {
  return (
    <div>
        <br></br>
        Child3
        Name : {child3Data.name}
        <br></br>
        Branch : {child3Data.branch}
        <br></br>
        Section : {child3Data.section}
    </div>
  )
}

Child3.propTypes = {
  child3Data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    branch: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
  }).isRequired,
};

export default Child3
