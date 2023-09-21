import { api } from '../services/api'

export const getPosts = () => {
    //const {data} = await api.get('/posts'); 
    const data = [{
        id: 1,
        title: "Hello World",
        description: "Lorem ipsum",
        created_at: "10/09/2023"
    },
        {
            id: 2,
            title: "Hello World",
            description: "Lorem ipsum",
            created_at: "10/09/2023"
        }
    ]


    if(data){
        return data;
    }

    return []
}

export const getPostBySlug =  (id) => {

    //const { data } = await api.get(`/post?id=eq.${id}`);
    const data = {
        id: 1,
        title: "Hello World",
        description: "Lorem ipsum",
        created_at: "10/09/2023"
    }
    console.log(data);

    return {data}
}