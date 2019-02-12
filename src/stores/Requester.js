import Axios from "axios";
class Requester {
    getAllTrackedTORs = async () => {
        const trackedTORs = await Axios.get("http://localhost:8000/tracked")
        return trackedTORs.data
    }
    getTORData = async (name) => {
        const TORData = await Axios.get(`http://localhost:8000/tracked/${name}`)
        return TORData.data
    }
    getNewTopicData = async (searchValue) => {
        const topicData = await Axios.get(`http://localhost:8000/topic/${searchValue}`)
        return topicData.data
    }
    trackTOR = async (TOR) => {
        await Axios.post(`http://localhost:8000/tor`, TOR)
    }
    updateTrackedTOR = async (TOR) => {
        await Axios.put(`http://localhost:8000/tracked`, TOR)
    }
    untrackTOR = async (name) => {
        await Axios.delete(`http://localhost:8000/tracked/${name}`)
    }
    updateRelevance = async (id, TOR, bool) => {
        await Axios.put(`http://localhost:8000/topic/${id}`, TOR)
        console.log("updated relevance")
    }
    getSubTopicHTML = async (TORName, subTopic) => {
        const topicHTML = await Axios.get(`http://localhost:8000/subtopic/`
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
export default Requester;

