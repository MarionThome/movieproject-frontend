import { useDispatch } from "react-redux"
import { addRequestToStore, addPlatformToStore} from '../reducers/movies'
import { useRouter } from "next/router"



export default function Random(props){
    const dispatch = useDispatch()
    const router = useRouter()

    const handleRandom = () => {
        dispatch(addRequestToStore(`random ${props.request}`))
        console.log("clic")
        dispatch(addPlatformToStore(props.platform))
        router.push("/result")
    }

    return (
        <div onClick={() => handleRandom()} style={{cursor:"pointer"}}>
            <p> Random {props.request}</p>
        </div>
    )
}