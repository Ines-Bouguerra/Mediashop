import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})
export default class Favorites extends Component {
    state = {
        favorites: []
    }
    constructor() {
        super();
        this.getFavorite();

    }
    getFavorite = async () => {
        try {
            let data = await api.get('/favorite').then(({ data }) => data);
            this.setState({ favorites: data })
        }
        catch (err) {
            console.log("🚀 ~ file: favorites.js ~ line 22 ~ Favorites ~ getFavorite= ~ err", err)

        }

    }
    createFavorites = async () => {
        let res = await api.post('/favorite', { "name": "test" })
        .catch(err => console.log("err"))
        console.log("🚀 ~ file: favorites.js ~ line 20 ~ Favorites ~ createFavorites=async ~ res", res)

    }
    deleteFavorite = async (id) => {
        let data = await api.delete('/${id}')
        this.getFavorite();
        console.log("🚀 ~ file: favorites.js ~ line 27 ~ Favorites ~ deleteFavorite ~ data", data)
    }
    render() {
        return (
            <div>
                <button onClick={this.createFavorites}>createFavorites</button>
                {/* <button onClick={() => this.deleteFavorite(favorite.id)}>deleteFavorites</button> */}
            </div>
        )
    }
}
