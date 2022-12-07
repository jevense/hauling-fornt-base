import {registerMicroApps, start} from 'qiankun';
import * as actions from './shared'

registerMicroApps([
    {
      name: 'subReportAdmin',
      entry: '//172.16.5.26:8087',
      container: '#container',
      activeRule: '/sub-report-admin',
      props: { actions },
    }
  ]
)
start()
