import Axios from "axios";

class Requester {

    getAllTrackedTORs = async () => {
        const trackedTORs = await Axios.get("http://localhost:8000/tracked")
        return trackedTORs
    }

    getTORData = async (id) =>{
        const TORData = await Axios.get(`http://localhost:8000/tracked/${id}`)
        return TORData
    }

    getNewTopicData = async () => {
        const topicData = await Axios.get(`http://localhost:8000/topic/dummyData`)
        return topicData.data
    }

    trackTOR = async (TOR) => {
        await Axios.post(`http://localhost:8000/topic`, TOR)
        console.log(`Saved TOR`)
    }

    updateTrackedTOR = async (id, TOR) => {
        await Axios.put(`http://localhost:8000/topic/${id}`, TOR)
        console.log(`Saved TOR`)
    }

    untrackTOR = async (id, TOR)=>{
        await Axios.delete(`http://localhost:8000/tracked/${id}`, TOR)

    }

// post to relevance collection

}

export default Requester
