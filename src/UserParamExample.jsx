import { useParams } from "react-router-dom";
export default function UserParamExample(){
	const {id} = useParams();
	
	return(
		<>
			{id}		
		</>
	)
}
