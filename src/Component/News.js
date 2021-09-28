import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export default class News extends Component {

    static defaultProps  = {

        country : 'in',
        pageSize: '8',
        category : 'general'

    }

    PropTypes = {

        country: PropTypes.string,
        pageSize: PropTypes.number,
        category : PropTypes.string
    }
   
    // articles= [
    
    // ]

    
  constructor(){
    super();
    this.state = {
        articles : [],
        loading : false,
        page :1,
       
        
        
    }

}

async componentDidMount(){
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da07ee5053bb4cc2b6f61dba3daa5ea1&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading :false
    })
}

handlerPrevClick =async ()=>{
console.log("prev")

let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da07ee5053bb4cc2b6f61dba3daa5ea1&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
this.setState({loading:true})
let data = await fetch(url);
let parsedData = await data.json()
console.log(parsedData)

this.setState({
    page : this.state.page - 1,
    articles: parsedData.articles,
    loading :false
})

}

handlerNextClick =async()=>{
    console.log("Next")
    if(!(this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize))){

    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da07ee5053bb4cc2b6f61dba3daa5ea1&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    
    this.setState({
        page : this.state.page +1,
        articles: parsedData.articles,
        loading:false
    })
}
}

    render() {
        return (
            <div className ="container my-3">
                <h3>News - Top Headline</h3>
                {this.state.loading && <Spinner/>}
                {/* {this.state.articles.map((element)=>{console.log(element)})} */}
                <div className="row ">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return   <div className="col-sm-3" key={element.url}>
                    <NewsItem
                    
                    title={element.title?element.title.slice(0,45):""}
                    description={element.description?element.description.slice(0,80):""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                />
                    </div>
                })}
                
                
               </div>

               <div className="container d-flex justify-content-end my-5">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick = {this.handlerPrevClick}>&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark mx-3" onClick ={this.handlerNextClick}>Next &rarr;</button>
        </div>
                

            </div>
        )
    }
}
