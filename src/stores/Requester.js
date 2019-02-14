import Axios from "axios";
class Requester {
    getAllTrackedTORs = async () => {
        const trackedTORs = await Axios.get("http://localhost:8000/tracked")
        // console.log(trackedTORs.data)
        return trackedTORs.data
    }
    getTORData = async (name) => {
        const TORData = await Axios.get(`http://localhost:8000/tracked/${name}`)
        // console.log(TORData.data)
        return TORData.data
    }
    getNewTopicData = async (searchValue) => {
        const topicData = await Axios.get(`http://localhost:8000/topic/${searchValue}`)
        return topicData.data
    }
    trackTOR = async (tree, topics) => {
        await Axios.post(`http://localhost:8000/tor`, {tree: tree, topics: topics})
    }
    untrackTOR = async (name) => {
        await Axios.delete(`http://localhost:8000/tracked/${name}`)
    }
    updateTrackedTOR = async (TOR) => {
        await Axios.put(`http://localhost:8000/tracked`, TOR)
    }
    updateProperty = async (treeName, updateInfo) => {
        await Axios.put(`http://localhost:8000/tracked/${treeName}`, updateInfo)
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

