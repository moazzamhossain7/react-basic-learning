import React from 'react';

export default class Form extends React.Component {
    state = {
        name: '',
        address: '',
        terms: false,
        gender: '',
    };

    handleInputChange = (e) => {
        const { name } = e.target;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        this.setState({
            [name]: value,
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        const { name, address, terms, gender } = this.state;

        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                        placeholder="Username"
                    />
                    <br />
                    <br />
                    <textarea
                        name="address"
                        rows="4"
                        value={address}
                        onChange={this.handleInputChange}
                        placeholder="Enter address"
                    />
                    <br />
                    <br />
                    <input
                        type="checkbox"
                        name="terms"
                        onChange={this.handleInputChange}
                        value={terms}
                    />
                    Confirm Terms
                    <br />
                    <br />
                    <input
                        type="radio"
                        name="gender"
                        onChange={this.handleInputChange}
                        value={gender}
                    />
                    Male &nbsp;
                    <input
                        type="radio"
                        name="gender"
                        onChange={this.handleInputChange}
                        value={gender}
                    />
                    Female
                    <br />
                    <br />
                    <br />
                    <input type="submit" value="Submit" name="btn" />
                </form>
            </div>
        );
    }
}
