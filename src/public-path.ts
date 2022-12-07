import {qiankunWindow} from 'vite-plugin-qiankun/dist/helper';

declare var __webpack_public_path__: string | undefined
if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log(qiankunWindow.__INJECTED_PUBLIC_PATH_BY_QIANKUN__, '如果子应用被使用则在这里')
  // __webpack_public_path__ = qiankunWindow.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
