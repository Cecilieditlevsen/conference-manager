import { ThemeContextProvider } from '@app/contexts/theme/theme-context.provider.tsx'
import { CMComponent } from '@widgets/sections/cm-component.tsx'

import { CMParamsContextProvider } from './app/contexts/cm-params/cm-params.provider.tsx'
import { setupDayjs } from './setup-dayjs.ts'
import { setupTwind } from './setup-twind.ts'

setupTwind()
setupDayjs()

function App() {
  return (
    <ThemeContextProvider>
      <CMParamsContextProvider>
        <CMComponent />
      </CMParamsContextProvider>
    </ThemeContextProvider>
  )
}

export default App
