export interface createOrgReq {
  name: string;
  parentId: number;
  remark: string;
  status: number;
}

export interface createOrgRes {
  name?: string
  id?: number
}

export interface getOrgListPageRes {
  orgName: string
  parentId: number
}

export interface getOrgListPageReq {
  success: string
}
