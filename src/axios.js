import axios from 'axios'
const instance=axios.create({
    baseURL:'http://localhost:5001/challange-c1266/us-central1/api' 
}
)
export default instance