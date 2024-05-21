import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemsAction } from "../store/itemSlice"
import { fetchAction } from "../store/fetchStatusSlice"


const FetchItems = () => {
const fetchStatus = useSelector(store => store.fetchStatus)
const dispatch = useDispatch();


useEffect(() => {
    if(fetchStatus.fetchDone) return;
    
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchAction.markFetchingStarted());
    fetch("http://localhost:8080/items", )
    .then((res) => res.json())
    .then(({items}) => {
        dispatch(fetchAction.markFetchDone());
        dispatch(fetchAction.markFetchingFinished());

     dispatch(itemsAction.addInitialItems(items[0]));
        
    });

    return () => {
        controller.abort();
    };
},[fetchStatus]);


    return (
    <>
 
    </>
    );
}

export default FetchItems;