import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
   
    // articles= [
    
    // ]

    
  constructor(){
    super();
    this.state = {
        articles : [],
        loading : false,
        page :1
        
    }

}

async componentDidMount(){
   
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=da07ee5053bb4cc2b6f61dba3daa5ea1&page=1&pageSize=16"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults})
}

handlerPrevClick =async ()=>{
console.log("prev")

let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=da07ee5053bb4cc2b6f61dba3daa5ea1&page=${this.state.page -1}&pageSize=16`;
let data = await fetch(url);
let parsedData = await data.json()
console.log(parsedData)

this.setState({
    page : this.state.page - 1,
    articles: parsedData.articles
})

}

handlerNextClick =async()=>{
    console.log("Next")
    if(this.state.page +1 >Math.ceil(this.state.totalResults/16)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=da07ee5053bb4cc2b6f61dba3daa5ea1&page=${this.state.page +1}&pageSize=16`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    
    this.setState({
        page : this.state.page +1,
        articles: parsedData.articles
    })
} 
}

    render() {
        return (
            <div className ="container my-3">
                <h3>News - Top Headline</h3>
                {/* {this.state.articles.map((element)=>{console.log(element)})} */}
                <div className="row ">
                {this.state.articles.map((element)=>{
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
        <button type="button" className="btn btn-dark mx-3" onClick ={this.handlerNextClick}>Next &rarr;</button>
        </div>
                

            </div>
        )
    }
}
