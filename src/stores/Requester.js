import Axios from "axios";
class Requester {
    // constructor(){
    //     this.domain = process.env.PORT ? "" : "http://localhost:8000"
    // }

    getAllTrackedTORs = async () => {
        const trackedTORs = await Axios.get(`/tracked`)
        return trackedTORs.data
    }

    getTORData = async (name) => {
        const TORData = await Axios.get(`/tracked/${name}`)
        return TORData.data
    }
    getNewTopicData = async (searchValue) => {
        const topicData = await Axios.get(`/topic/${searchValue}`)
        return topicData.data
    }
    trackTOR = async (TOR) => {
        await Axios.post(`/tor`, TOR)
    }
    updateTrackedTOR = async (TOR) => {
        await Axios.put(`/tracked`, TOR)
    }
    untrackTOR = async (name) => {
        await Axios.delete(`/tracked/${name}`)
    }
    updateRelevance = async (id, TOR, bool) => {
        await Axios.put(`/topic/${id}`, TOR)
        console.log("updated relevance")
    }
    getSubTopicHTML = async (TORName, subTopic) => {
        const topicHTML = await Axios.get(`/subtopic`
        , {
            params: {
              TORName: TORName,
              subTopic: subTopic
            }
        })
        return topicHTML.data
    }
    // post to relevance collection
}
export default Requester

