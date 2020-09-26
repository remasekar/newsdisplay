import React from 'react'
import { connect } from 'react-redux'
import { call_news_api,call_filter_news_api } from '../src/action/action'
import NewsCardsLayout from '../src/components/card'

class App extends React.Component{

  constructor(props)
  {
    super(props)
    this.state = {
      search: '',
      filteredNews: []
  }
  }
  handleSearch = (searchVal) => {
      this.props.dispatch(call_filter_news_api(searchVal))
  }

  handleChange = (e) => {
    const search = e.target.value
    this.setState(() => ({search })) 
    this.handleSearch(search)
}

handleClear=(e) => {
  this.setState(()=> ({
    search: '',
    filteredNews : []
  }))
  this.props.dispatch(call_news_api())
}


componentDidMount()
{
 this.props.dispatch(call_news_api())
}
  render()
  {
  return (
  <div className="container">
    <div className="row">
         <div className="col-md-12 offset-4">
          <h1>Live News</h1> 
          </div>
          <div className = "row mb-4">
            <div className="col-md-2">
         <span>
                <input type="checkbox" className="custom-control-input" id="clearall" value="clear" onChange={this.handleClear}></input>
                <label className="custom-control-label" htmlFor="clearall">Clear All</label>
                </span>
            </div>
            <div className = "col-md-10">
                  <span>
                  <form>
                    <input type="text" placeholder = "search by keyword " value ={this.state.search} onChange={ this.handleChange} />
                    <br/>
                  </form>
            </span>
           </div>
           </div>
           <div className="row mb-8">
             <div className="col-md-20 ">
               <span>
                {this.state.filteredNews.length === 0 && this.props.news.totalResults && this.props.news.totalResults !== 0 ? 
                <div>
                  <NewsCardsLayout news={this.props.news.articles} />
                </div> : null
                }
                </span>
                <span>
                {this.state.filteredNews.length !==0 && this.props.news.totalResults && this.props.news.totalResults !== 0 ? 
                <div>
                 <h2>Total Results - {this.state.filteredNews.length} </h2> 
                  <NewsCardsLayout news={this.state.filteredNews} />
                </div> : null
                }
                </span>
              </div>
           </div>
    </div>
  </div>
  )
}
}

const mapStateToProps = (state) => {
  if (state.news ){
    return (
    { 
      news: state.news
    }
     )
 }
}  

export default connect(mapStateToProps)(App)