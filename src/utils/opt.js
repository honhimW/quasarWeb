import axios from 'axios'

const baseURL = '/httpproxy'
const axi = axios.create({
  baseURL
})

export const save = () => {
  return axi.request({
    url: '/config/save',
    method: 'post'
  })
}

export const saveRequest = (requestName, groupName, projectName, uuid, request) => {
  return axi.request({
    url: '/config/saveRequest',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      requestName,
      groupName,
      projectName,
      uuid,
      request
    }
  })
}

export const checkChange = (requestName, groupName, projectName, uuid, request) => {
  return axi.request({
    url: '/config/checkChange',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      requestName,
      groupName,
      projectName,
      uuid,
      request
    }
  })
}

export const getRequest = (requestName, groupName, projectName) => {
  return axi.request({
    url: '/config/getRequest',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      requestName,
      groupName,
      projectName
    }
  })
}

export const createProject = (name, desc) => {
  return axi.request({
    url: '/config/createProject',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name,
      desc
    }
  })
}

export const createGroup = (name, desc, projectName) => {
  return axi.request({
    url: '/config/createGroup',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name,
      desc,
      projectName
    }
  })
}

export const createRequestOnProjcet = (name, desc, projectName) => {
  return axi.request({
    url: '/config/createRequestOnProjcet',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name,
      desc,
      projectName
    }
  })
}

export const createRequestOnGroup = (name, desc, projectName, groupName) => {
  return axi.request({
    url: '/config/createRequestOnGroup',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name,
      desc,
      projectName,
      groupName
    }
  })
}

export const removeProject = (name) => {
  return axi.request({
    url: '/config/removeProject',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name
    }
  })
}

export const removeGroup = (name, projectName) => {
  return axi.request({
    url: '/config/removeGroup',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name,
      projectName
    }
  })
}

export const removeRequestOnProjcet = (name, projectName) => {
  return axi.request({
    url: '/config/removeRequestOnProjcet',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name,
      projectName
    }
  })
}

export const removeRequestOnGroup = (name, projectName, groupName) => {
  return axi.request({
    url: '/config/removeRequestOnGroup',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name,
      projectName,
      groupName
    }
  })
}

export const editProject = (newName, newDesc, projectName) => {
  return axi.request({
    url: '/config/editProject',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      newName,
      newDesc,
      projectName
    }
  })
}

export const editGroup = (newName, newDesc, projectName, groupName) => {
  return axi.request({
    url: '/config/editGroup',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      newName,
      newDesc,
      projectName,
      groupName
    }
  })
}

export const editRequest = (newName, newDesc, projectName, groupName, requestName) => {
  return axi.request({
    url: '/config/editRequest',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      newName,
      newDesc,
      projectName,
      groupName,
      requestName
    }
  })
}

export const copyProject = (newName, newDesc, projectName) => {
  return axi.request({
    url: '/config/copyProject',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      newName,
      newDesc,
      projectName
    }
  })
}

export const copyGroup = (newName, newDesc, projectName, groupName) => {
  return axi.request({
    url: '/config/copyGroup',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      newName,
      newDesc,
      projectName,
      groupName
    }
  })
}

export const copyRequest = (newName, newDesc, projectName, groupName, requestName) => {
  return axi.request({
    url: '/config/copyRequest',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      newName,
      newDesc,
      projectName,
      groupName,
      requestName
    }
  })
}

export const updateEnv = (type, env) => {
  return axi.request({
    url: '/config/updateEnv',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      type,
      env
    }
  })
}

export const importFormattedModel = (name, desc, url) => {
  return axi.request({
    url: '/config/importFormattedModel',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name,
      desc,
      url
    }
  })
}

export const mdStr = (url) => {
  var encodeUrl = btoa(url)
  return axi.request({
    url: '/toMarkdown?url=' + encodeUrl,
    method: 'get'
  })
}

export const Opt = {
  save,
  saveRequest,
  checkChange,
  getRequest,
  createProject,
  createGroup,
  createRequestOnProjcet,
  createRequestOnGroup,
  removeProject,
  removeGroup,
  removeRequestOnProjcet,
  removeRequestOnGroup,
  editProject,
  editGroup,
  editRequest,
  copyProject,
  copyGroup,
  copyRequest,
  updateEnv,
  importFormattedModel,
  mdStr
}
