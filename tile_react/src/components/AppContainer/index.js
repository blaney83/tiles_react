import React, { Component } from "react";
import NavBar from "../NavBar";
import SearchForm from "../SearchForm";
import CardArea from "../CardArea"
import API from "../../utils/API";
import "./style.css"


class AppContainer extends Component {

    constructor(props) {
        super()
        this.state = {
            search: "",
            results: [],
            guesses: [],
            correct: 0,
            highScore: 0,
            message: "Enter a category to start!",
            messageStyle: {color:"white"}
        };
    }

    searchGiphy = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchGiphy(this.state.search);
        this.setState({ message: "Great! Click a gif to start!" })
        this.setState({ messageStyle: {color:"lightskyblue"}})
    };

    handleClick = event => {
        let gifId = event.target.id
        if (this.state.guesses.indexOf(gifId) === -1) {
            let gArr = this.state.guesses;
            gArr.push(gifId)
            this.setState({ guesses: gArr })
            let score = this.state.correct
            let newScore = score + 1
            this.setState({ correct: newScore })
            if (newScore > this.state.highScore) {
                this.setState({ highScore: newScore })
            }
            this.setState({ results: this.shuffleArray(this.state.results) })
            this.setState({ message: "Correct! Next guess..." })
            this.setState({ messageStyle: {color:"lightgreen"}})
        } else {
            this.setState({ guesses: [] })
            this.setState({ correct: 0 })
            this.setState({ message: "Click a gif to start again or choose a new category." })
            this.setState({ messageStyle: {color:"lightsalmon"}})
        }
    }

    shuffleArray = array => {
        console.log(array)
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        console.log(array)
        return array;
    }

    render() {
        return (
            <div>

                <NavBar
                    correct={this.state.correct}
                    highScore={this.state.highScore}
                    message={this.state.message}
                    style={this.state.messageStyle}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-12 bodyCol">
                            <SearchForm
                                search={this.state.search}
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                                clickGifMessage={this.clickGifMessage}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 bodyCol">
                            <CardArea results={this.state.results} handleClick={this.handleClick} />
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default AppContainer;
