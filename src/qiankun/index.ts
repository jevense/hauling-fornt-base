import {registerMicroApps, start} from 'qiankun';
import * as actions from './shared'

registerMicroApps([
    {
      name: 'subReportAdmin',
      entry: '//localhost/subapp',
      container: '#container',
      activeRule: '/sub-report-admin',
      props: { actions },
    }
  ]
)
start()
