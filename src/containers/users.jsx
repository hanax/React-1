import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { fetchUsers, selectUser } from '../actions/index'

class Users extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    setCurrentUser(user) {
        this.props.selectUser(user);
        // console.log(user);
    }


    renderUsers() {
        return this.props.users.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                    <td><Link to={"users/" + user.id}>
                        <i className="glyphicon glyphicon-edit" onClick={this.setCurrentUser(user)}></i>
                    </Link></td>
                    <td><a>
                        <i className="glyphicon glyphicon-remove"></i>
                    </a></td>
                </tr>
            )
        }
        )
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <div className="row">
                    <Link to="/users/new">
                        <button className="btn btn-primary">Add User</button>
                    </Link>
                </div>
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUsers() }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.users.all };
}

export default connect(mapStateToProps, { fetchUsers, selectUser })(Users);