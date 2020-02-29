import * as serviceWorker from './serviceWorker';
import {Render} from './render';
import State from './Redax/Redax';

Render(State);

serviceWorker.unregister();
