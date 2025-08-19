import { render } from 'preact'
import { App } from './app.tsx'

document.getElementById('loader-container')?.remove();
render(<App />, document.getElementById('app')!)
