import {registerMicroApps, start} from 'qiankun';
import * as actions from './shared'

registerMicroApps([
    {
      name: 'subReportAdmin',
      entry: '//huahill-nj:8090',
      container: '#container',
      activeRule: '/sub-report-admin',
      props: { actions },
    }
  ]
)
start()
