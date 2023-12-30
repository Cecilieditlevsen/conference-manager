import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'
import utc from 'dayjs/plugin/utc'

export function setupDayjs() {
  dayjs.locale('da')
  dayjs.extend(updateLocale)
  dayjs.extend(utc)
  dayjs.updateLocale('da', {
    monthsShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Maj',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
    ],
  })
}
