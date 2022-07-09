import { useEffect } from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom"

const StudentList = () => {
    const {id} = useParams();
    const [queryParams] = useSearchParams();

    useEffect(() => {
        console.log(id, queryParams);
    }, [])

    return <div>
        Student List
        <Outlet />
    </div>
}

const StudentListItem = () => {
    const {age} = useParams();
    const [queryParams] = useSearchParams();

    useEffect(() => {
        console.log('inside student list item: ', age)
        console.log('queryParams inside student list: ', queryParams.get('abc')); // new Map()
    })

    return <div>
        Tuổi: {age}
    </div>
}


export {StudentListItem}
export default StudentList;

