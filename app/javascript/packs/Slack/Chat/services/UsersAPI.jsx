import API from './API'

const UsersAPI = {
  fetchAll({onSuccess}) {
    API({
      url: "api/v1/users",
      method: "GET",
      onSuccess: onSuccess
    })
  }
}

export default UsersAPI
