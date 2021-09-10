import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className ="container my-3">
                <h3>News - Top Headline</h3>
                <div className="row ">
                    <div className="col-sm-3  ">
                <NewsItem title="hello" description="hxdkuxhgukx" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"/>
                </div>
                <div className="col-sm-3 ">
                <NewsItem title="hello" description="hxdkuxhgukx"/>
                </div>
                <div className="col-sm-3 ">
                <NewsItem title="hello" description="hxdkuxhgukx"/>
                </div>
                <div className="col-sm-3 ">
                <NewsItem title="hello" description="hxdkuxhgukx"/>
                </div>
                <div className="col-sm-3 ">
                <NewsItem title="hello" description="hxdkuxhgukx"/>
                </div>
                <div className="col-sm-3 ">
                <NewsItem title="hello" description="hxdkuxhgukx"/>
                </div>
                <div className="col-sm-3 ">
                <NewsItem title="hello" description="hxdkuxhgukx"/>
                </div>
                <div className="col-sm-3 ">
                <NewsItem title="hello" description="hxdkuxhgukx"/>
                </div>
               </div>
                

            </div>
        )
    }
}
