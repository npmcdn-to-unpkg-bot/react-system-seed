// main entry point
import { render } from 'react-dom';
import { Dashboard } from './dashboard/dashboard';

render(<Dashboard />, document.querySelector('#app'), () => {});