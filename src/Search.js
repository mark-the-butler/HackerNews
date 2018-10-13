import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { value, onChange, children } = this.props;
        return (
            <form>
                {children}
                <input
                    type='text'
                    value={value}
                    onChange={(e) => onChange(e)}
                />
            </form>
        );
    }
}

export default Search;