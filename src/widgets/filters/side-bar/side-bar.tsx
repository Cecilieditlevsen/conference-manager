import { useCMParamsContext } from '@app/contexts/cm-params/cm-params.context.tsx'
import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import { useAreas } from '@entities/categories/hooks/use-areas.ts'
import { useTypes } from '@entities/categories/hooks/use-types.ts'
import { today } from '@internationalized/date'
import { ListMenu } from '@shared/ui/list-menu/list-menu.tsx'
import { CalendarView } from '@widgets/filters/side-bar/calendar.tsx'
import { tw } from 'twind'

export const SideBar = () => {
  const { date, setDate, type, area, clear, setArea, setType } =
    useCMParamsContext()
  const theme = useThemeContext()
  const types = useTypes()
  const areas = useAreas()

  return (
    <div className={tw`hidden md:flex md:flex-col gap-[30px]`}>
      <ListMenu>
        <ListMenu.ListBox
          aria-label={'Alle resultater'}
          selectionMode={'single'}
          selectedKeys={
            !type && !area && date === today('Europe/Copenhagen').toString()
              ? ['alleResultater']
              : []
          }
          onSelectionChange={() => clear()}
        >
          <ListMenu.Item id={'alleResultater'}>Alle resultater</ListMenu.Item>
        </ListMenu.ListBox>
      </ListMenu>

      <ListMenu>
        <ListMenu.Title>Typer</ListMenu.Title>

        <ListMenu.ListBox
          aria-label={'filtrer begivenheder efter type'}
          items={types.data}
          selectionMode={'single'}
          selectedKeys={type ? [type] : []}
          onSelectionChange={(e) => {
            return [...e].length === 0
              ? setType(null)
              : setType(String([...e][0]))
          }}
        >
          {(item) => (
            <ListMenu.Item textValue={item.name} id={item.name}>
              {item.name}
            </ListMenu.Item>
          )}
        </ListMenu.ListBox>
      </ListMenu>

      <ListMenu>
        <ListMenu.Title>Fagområder</ListMenu.Title>

        <ListMenu.ListBox
          aria-label={'filtrer begivenheder efter type'}
          items={areas.data}
          selectionMode={'single'}
          selectedKeys={area ? [area] : []}
          onSelectionChange={(e) => {
            return [...e].length === 0
              ? setArea(null)
              : setArea(String([...e][0]))
          }}
        >
          {(item) => (
            <ListMenu.Item textValue={item.name} id={item.name}>
              {item.name}
            </ListMenu.Item>
          )}
        </ListMenu.ListBox>
      </ListMenu>

      <div>
        <h2
          className={tw`text-heading-4-lg font-primary font-heading-weight ${
            theme === 'dark-theme' ? 'text-white' : 'text-black'
          }`}
        >
          Vælg Dato
        </h2>

        <CalendarView date={date} setDate={setDate} />
      </div>
    </div>
  )
}
