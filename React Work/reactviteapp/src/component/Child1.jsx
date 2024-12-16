import PropTypes from 'prop-types';
import Child2 from './Child2'

function Child1({child1Data}) {
  return (
    <div>Child1
        Name : {child1Data.name}
        <Child2 child2Data = {child1Data}/>
    </div>
  )
}

Child1.propTypes = {
  child1Data: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Child1