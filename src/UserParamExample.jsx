import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const queryClient = new QueryClient({
	defaultOptions:{
		queries:{
			retryDelay:1000*60
		}
	}
});

export default function UserParamExample() {
	const { id } = useParams();

	return (
		<>
			{id}
			<QueryClientProvider client={queryClient}>
				<UserList />
			</QueryClientProvider>
		</>
	)
}

function UserList() {
	const {isPending,error,data,isFetching} = useQuery({
		queryKey:['repoData'],
		queryFn:async ()=>{
			const response = await fetch('https://api.github.com/repos/TanStack/query')
			return await response.json();
		},
		retry:10
	})

	if(isPending) return 'Loading....';
	if(error) return 'An errors has occurred : '+ error.message;
	
	return (
		<>
		<h1>{data.full_name}</h1>
		<h2>{data.description}</h2>			
		</>
	)
}
