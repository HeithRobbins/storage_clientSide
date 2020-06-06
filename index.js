import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            name: "",
            date: [],
            weight: [],
            amount: [],
        }
    }

    delteItem = id=> {
        fetch(`https://hr-foodstorage.herokuapp.com/storage/${id}`, {
            method: "DELETE",
        }).then(
            this.setState({
                storages: this.state.storages.filter(item => {
                    return item.id !== id
                })
            })
        )
        .catch((err) => console.log("added storage error:", err))
    }

    // this is so i can map all items on page with out the one i deleted!!
    // renderStorage= () => {
    //     return this.state.storages.map(item => {
    //         return <
    //     })
    // }

    addStorage = (e) => {
        e.preventDefau
    }

}