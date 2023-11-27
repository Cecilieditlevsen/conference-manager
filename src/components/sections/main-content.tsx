import { Suspense, useRef } from 'react'
import { tw } from 'twind'

import { Events } from '@components/events/events.tsx'
import { Filters } from '@components/filters/filters.tsx'

import { container } from '@styles/container.style.ts'

type Props = {
  date: string | null
  setDate: (date: string | null) => void
  type: string | null
  setType: (type: string | null) => void
  area: string | null
  setArea: (area: string | null) => void
  searchQuery: string | null
  clear: () => void
}

export const MainContent = (props: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className={tw`${container}`}>
      <div className={tw`grid grid-cols-12 gap-[25px]`} ref={scrollRef}>
        <Filters {...props} scrollRef={scrollRef} />

        <div className={tw`col-span-12 md:col-span-9 flex justify-center`}>
          <Suspense fallback={<span>Indlæser...</span>}>
            <Events {...props} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
