import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/en-ca';


dayjs.extend(isLeapYear) // use plugin
dayjs.locale('en-ca') // use locale