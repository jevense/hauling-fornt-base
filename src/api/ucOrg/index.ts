import type {createOrgReq, createOrgRes, getOrgListPageReq, getOrgListPageRes,} from './type'
import {$get, $post} from '../request'

enum UcOrg {
  UcCreateOrg = '/v1/uc/org/createOrg', // 创建组织架构
  UcGetOrgListPage = '/v1/uc/org/getOrgListPage', // 获取组织架构list
  UcetOrgTree = '/v1/uc/org/getOrgTree' // 获取组织架构树形结构
}

const UcCreateOrg = (data: createOrgReq) => {
  return $post<createOrgRes>({
    url: UcOrg.UcCreateOrg,
    data: data
  })
}

const UcGetOrgListPage = (data: getOrgListPageReq) => {
  return $get<getOrgListPageRes>({
    url: UcOrg.UcGetOrgListPage,
    params: data
  })
}

const UcetOrgTree = (data: createOrgReq) => {
  return $get<createOrgRes>({
    url: UcOrg.UcetOrgTree,
    params: data
  })
}

export default {
  UcCreateOrg,
  UcGetOrgListPage,
  UcetOrgTree
}
