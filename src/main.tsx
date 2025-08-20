import { render } from 'preact'
import { App } from './App.tsx'
import { LoaderTransition } from './LoaderTransition.tsx';

render(
    <LoaderTransition>
        <App />
    </LoaderTransition>,
    document.getElementById('app')!
);
