import Counter from "./components/withoutRedux"
import { Provider } from 'react-redux';
import store from './redux/store';
const App = () => {

  return (
    <Provider store={store}>
      <Counter />
     </Provider>

  )
}

export default App
