import React, { Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { createUsers } from '../actions/index';
import { Link } from 'react-router'

function checkValid(elem) {
    return elem.touched && elem.invalid ? 'has-danger' : ''
}

class UserForm extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount(){
        // console.log(this.props.user);
    }

    title() {
        if (!this.props.params.id){
            return <h3>Create A New Post</h3>
        }
        return <h3>Edit User</h3>
    }

    onSubmit(props) {
        this.props.createUsers(props)
            .then(() => {
                this.context.router.push('/users');
            }
            )
    }

    render() {
        const { fields: { name, email, phone, address}, handleSubmit } = this.props;
        // const handleSubmit = this.props.handleSubmit
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this)) }>
                {this.title()}

                <div className={`form-group ${checkValid(name)}`}>
                    <label>Name</label>
                    <input type="text" className="form-control" {...name}/>
                    <div className="text-help">
                        {name.touched ? name.error : ''}
                    </div>
                </div>
                <div className={`form-group ${checkValid(email)}`}>
                    <label>email</label>
                    <input type="text" className="form-control" {...email}/>
                    <div className="text-help">
                        {email.touched ? email.error : ''}
                    </div>
                </div>
                <div className={`form-group ${checkValid(phone)}`}>
                    <label>phone</label>
                    <input type="text" className="form-control" {...phone}/>
                    <div className="text-help">
                        {phone.touched ? phone.error : ''}
                    </div>
                </div>
                 <div className={`form-group ${checkValid(address.city)}`}>
                    <label>City</label>
                    <input type="text" className="form-control" {...address.city}/>
                </div>
                <div className={`form-group ${checkValid(address.street)}`}>
                    <label>Street</label>
                    <input type="text" className="form-control" {...address.street}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
                <Link to="/" className="btn btn-danger" >Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};
    if (!values.name) {
        errors.name = 'Enter a username';
    }
    if (!values.email) {
        errors.email = 'Enter a category';
    }

    if (!values.phone) {
        errors.phone = 'Enter some phone';
    }
    return errors;
}
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

function mapStateToProps(state) {
    return { user: state.users.currentUser };
}


export default reduxForm({
    form: 'NewUser',
    fields: ['name', 'email', 'phone', 'address.city', 'address.street'],
    validate
}, mapStateToProps, { createUsers })(UserForm);