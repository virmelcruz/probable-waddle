import API from './API'

const ChannelsAPI = {
  fetchAll({onSuccess}) {
    API({
      url: "api/v1/messages",
      method: "GET",
      onSuccess: onSuccess
    })
  },
  create({data, onSuccess}) {
    API({
      data: data,
      url: "api/v1/messages",
      method: "POST",
      onSuccess: onSuccess
    })
  },
  fetch(receiveableId, {onSuccess}) {
    API({
      url: "api/v1/messages?receiveable_id=" + receiveableId,
      method: "GET",
      onSuccess: onSuccess
    })
  },
}

export default ChannelsAPI
