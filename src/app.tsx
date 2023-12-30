import { ThemeContextProvider } from '@app/contexts/theme/theme-context.provider.tsx'
import { CMComponent } from '@widgets/sections/cm-component.tsx'

import { CMParamsContextProvider } from './app/contexts/cm-params/cm-params.provider.tsx'
import { setupTwind } from './setup-twind.ts'

import './app.css'
import './global.css'

setupTwind()

function App() {
  return (
    <ThemeContextProvider>
      <CMParamsContextProvider>
        <CMComponent/>
      </CMParamsContextProvider>
    </ThemeContextProvider>
  )
}

export default App
