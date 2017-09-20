import API from './API'

const ChannelsAPI = {
  fetchAll({onSuccess}) {
    API({
      url: "api/v1/channels",
      method: "GET",
      onSuccess: onSuccess
    })
  },
  create({data, onSuccess}) {
    API({
      data: data,
      url: "api/v1/channels",
      method: "POST",
      onSuccess: onSuccess
    })
  }
}

export default ChannelsAPI
