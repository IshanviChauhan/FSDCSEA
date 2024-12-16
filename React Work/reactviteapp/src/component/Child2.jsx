import PropTypes from 'prop-types';
import Child3 from "./Child3"

function Child2({child2Data}) {
  return (
    <div>Child2
        Name : {child2Data.name}
        <Child3 child3Data = {child2Data}/>
    </div>
  )
}

Child2.propTypes = {
  child2Data: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Child2