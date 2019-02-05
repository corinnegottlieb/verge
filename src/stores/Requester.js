import Axios from "axios";
class Requester {
    getAllTrackedTORs = async () => {
        const trackedTORs = await Axios.get("http://localhost:8000/tracked")
        return trackedTORs
    }
    getTORData = async (id) => {
        const TORData = await Axios.get(`http://localhost:8000/tracked/${id}`)
        return TORData
    }
    getNewTopicData = async (searchValue) => {
        const topicData = await Axios.get(`http://localhost:8000/topic/${searchValue}`)
        return topicData.data
    }
    trackTOR = async (TOR) => {
        await Axios.post(`http://localhost:8000/tor`, TOR)
        console.log(`Saved TOR ${TOR}`)
    }
    untrackTOR = async (name) => {
        await Axios.delete(`http://localhost:8000/tracked/${name}`)
    }
    updateRelevance = async (id, TOR, bool) => {
        await Axios.put(`http://localhost:8000/topic/${id}`, TOR)
        console.log("updated relevance")
    }
    updateTrackedTOR = async (id, TOR) => {
        await Axios.put(`http://localhost:8000/topic/${id}`, TOR)
        console.log(`Saved TOR`)
    }
    // post to relevance collection
}
export default Requester

