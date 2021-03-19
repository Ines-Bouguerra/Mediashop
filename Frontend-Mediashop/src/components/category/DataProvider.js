import React, { Component } from 'react'

export default class CategoryDataProvider extends Component {
    state={
        data: [],
        loading:false,
        placeholder:'Loading'
    }
    componentDidMount() {
        fetch(this.props.endpoint
            )
            .then(res=>{
                if(res.status!==200){
                    return this.setState({placeholder:'Something went wrong !'})
                }
                return res.json()
            })
            .then(data=>this.setState({data:data,loading:true}))
    }
    render() {
        const {loading,data,placeholder}=this.state
        return (
           
                loading ?
                this.props.render(data):
                <p>{placeholder}</p>

           
        )
    }
}
