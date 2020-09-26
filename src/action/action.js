import axios from 'axios'

export const loadNews = (values) => {
    return {
        type: 'LOAD_NEWS',
        payload: values 
    }

}
export const call_news_api = () =>
{
    return(dispatch) => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c7fce68ee7a4cdcb395a5e02cca3aa1`)
        .then(response =>{
            const loadResults = response.data;
            dispatch(loadNews(loadResults))
        })

    }
}


export const call_filter_news_api = (param) =>
{
    return(dispatch) => {
        axios.get(`https://newsapi.org/v2/everything?q=${param}&apiKey=1c7fce68ee7a4cdcb395a5e02cca3aa1`)
        .then(response =>{
            const filterResults = response.data;
            dispatch(loadNews(filterResults))
        })
    }
}
