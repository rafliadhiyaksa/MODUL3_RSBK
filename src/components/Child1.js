import React, { Component } from "react";
class Child1 extends Component {
    state = {
        nim: "21120117120004",
        src: "https://i.ibb.co/W6mvGqG/IMG20200704141654.jpg"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ubahNama = () => {
        this.setState((state) => { 
            if (state.nim === "21120117120004" && state.src === "https://i.ibb.co/W6mvGqG/IMG20200704141654.jpg") {
                return {nim : "21120117120028", src : "https://i.ibb.co/njwgwrj/954539-karakter-spongebob.jpg"}
            } 
        })
    }
    ubahNama1 = () => {
        this.setState((state) => { 
            if (state.nim === "21120117120028" && state.src === "https://i.ibb.co/njwgwrj/954539-karakter-spongebob.jpg") {
                return {nim : "21120117120004", src : "https://i.ibb.co/W6mvGqG/IMG20200704141654.jpg"}
            } 
        })
    }

    componentWillUnmount() {
        alert('child 1 will be gone :(')
    }
    render() {
        return (
            <div>
                <h4>Child-1</h4>
                <button onClick={this.ubahNama}>Petrick</button>
                <button onClick={this.ubahNama1}>Rafli</button>
                <br />
                <img src= {this.state.src} />
                <h4>NIM : {this.state.nim}</h4>
                
            </div>
        );
    }
}
export default Child1;