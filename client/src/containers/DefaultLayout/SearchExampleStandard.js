import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import axios from 'axios';
import swal from 'sweetalert';
import { Link, NavLink } from 'react-router-dom';

const initialState = { isLoading: false, results: [], value: '' }

const resultRenderer = ({ iduser, nickname, name, status }) =>
    <Link to={{
        pathname: `/perfil/${iduser}`
    }} className="nav-link searchInput" key={iduser}>
        <div> {nickname} - {name}</div>
    </Link>


resultRenderer.propTypes = {
    iduser: PropTypes.number,
    nickname: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
}

export default class SearchExampleStandard extends Component {
    state = { isLoading: false, results: [], value: '', user: JSON.parse(localStorage.getItem('dadosUser')) }

    handleSearchChange = (e, { value }) => {
        clearTimeout(this.state.debounce);
        let debounce = setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            axios.post(`http://127.0.0.1:3333/api/v1/users/searchFriends`, {
                "userId": this.state.user.id,
                "value": this.state.value
            })
                .then(function (response) {
                    let dados = response.data[0];
                    if (dados.length > 0) {
                        this.setState({
                            results: dados
                        })
                    } else {
                        this.setState({
                            results: [],
                        })
                    }

                    this.setState({
                        isLoading: false,
                    })

                }.bind(this))
                .catch(function (error) {
                    swal("Erro!", "Um erro inesperado ocorreu, tente novamente!", "error");
                });
        }, 1000)

        this.setState({ isLoading: true, value, debounce })
    }

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Grid>
                <Grid.Column>
                    <Search
                        fluid
                        loading={isLoading}
                        onSearchChange={_.debounce(this.handleSearchChange, 1000, {
                            leading: true,
                        })}
                        results={results}
                        value={value}
                        resultRenderer={resultRenderer}
                        {...this.props}
                    />
                </Grid.Column>
            </Grid>
        )
    }
}
