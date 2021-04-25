import axi from 'axios'

export const getRequest = (projectName, groupName, requestName, uuid) => {
  return axi.request({
    url: '/httpproxy/config/getRequest',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      projectName,
      groupName,
      requestName,
      uuid
    }
  })
}

export const getAllInfo = () => {
  return axi.request({
    url: '/httpproxy/config/getAllInfo',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
