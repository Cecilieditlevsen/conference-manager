import { Suspense } from 'react'
import { container } from '@shared/styles/container.style.ts'
import { Events } from '@widgets/events/events.tsx'
import { Filters } from '@widgets/filters/filters.tsx'
import { tw } from 'twind'

export const MainContent = () => {
  return (
    <div className={tw`${container}`}>
      <div className={tw`grid grid-cols-12 gap-[25px]`}>
        <Filters />

        <div className={tw`col-span-12 md:col-span-9 flex justify-center`}>
          <Suspense fallback={<span>Indlæser...</span>}>
            <Events />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
