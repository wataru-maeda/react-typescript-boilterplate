import Button from 'components/Button'
import { actions, states } from 'modules/app.module'
import { useDispatch, useSelector } from 'utils/hook'
import logo from './logo.svg'
import './App.scss'

const App = () => {
  const { loggedIn } = useSelector(states)
  const dispatch = useDispatch()
  const handleUpdateLogin = () => {
    dispatch(actions.setLoginAsync())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`Dashboard: login status: ${loggedIn}`}</p>
        <Button label="Update Login Status" onClick={handleUpdateLogin} />
      </header>
    </div>
  )
}

export default App
