import Child1 from './component/Child1'

function AppProps() {
    const data = {
        name: 'Ishanvi Chauhan',
        branch: 'CSE',
        section: 'A',
    }

  return (
    <div>AppProps
        <div>
            <Child1 child1Data = {data}/>
        </div>
    </div>
  )
}

export default AppProps