import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './tester.css'
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Tester extends React.Component {
    state = {
        firstName: "",
        pFirstName: "",
        lastName: "",
        pLastName: "",
        age: "",
        pAge: "",
        theBusiness: 'monkey',
        sex: "",
        pSex: ""
    }
    
    //handles changes to the first name
    handleChangeFirstName = (e) => {
        this.setState({firstName: e.target.value})
    }

    // handleChangeBlurFirstName = (e) => {
    //     this.setState({pFirstName: this.state.firstName})
    // }

    //handles changes to the last name
    handleChangeLastName = (e) => {
        this.setState({lastName: e.target.value})
    }

    // handleChangeBlurLastName = (e) => {
    //     this.setState({pLastName: this.state.lastName})
    // }

    //handles changes to the age
    handleChangeAge = (e) => {
        this.setState({age: e.target.value})
    }

    // handleChangeBlurAge = (e) => {
    //     this.setState({pAge: this.state.age})
    // }

    // handleChangeSelect = (e) => {
    //     this.setState({theBusiness: e.target.value})
    // }

    handleChangeSex = (e) => {
        this.setState({sex: e.target.value})
    }

    handleOnClick = (e) => {
        this.setState({pFirstName: this.state.firstName})
        this.setState({pLastName: this.state.lastName})
        this.setState({pAge: this.state.age})
        this.setState({pSex: this.state.sex})
    }

    render(){
        return (
            <div className="tester-form">
            <Paper elevation={5} 
            style={{padding: '10px 5px 10px 5px', marginTop: 20, marginLeft: 10, marginRight: 10}}>
            
                <h1 style={{color: 'blue', marginLeft: 5, marginTop: 10}}>Login Info</h1>
                <div className="container">
                    <div>
                        <TextField 
                            className="field"
                            //style={{marginLeft: 10, marginTop: 10}}
                            id="usersFirstName" 
                            label="Enter First Name" 
                            variant="outlined"
                            value={this.state.firstName}
                            onChange={this.handleChangeFirstName}
                            //onBlur={this.handleChangeBlurFirstName}
                        />
                        
                        <TextField 
                            className="field"
                            //style={{marginLeft: 10, marginTop: 10}}
                            id="usersLastName" 
                            label="Enter Last Name" 
                            variant="outlined"
                            value={this.state.lastName}
                            onChange={this.handleChangeLastName}
                            //onBlur={this.handleChangeBlurLastName}
                        />
                    </div>

                    <TextField 
                        className="field"
                        //style={{marginLeft: 10, marginTop: 10}}
                        id="usersAge" 
                        label="Enter Age" 
                        variant="outlined"
                        value={this.state.age}
                        onChange={this.handleChangeAge}
                        //onBlur={this.handleChangeBlurAge}
                    />

                    {/* <FormControlLabel
                        control={
                            <Checkbox checked={'checkedA'} 
                            //onChange={} 
                            value="checkedA" />
                        }
                        label="Secondary"
                    /> */}

                    {/*Drop down box*/}
                    <InputLabel 
                        className="field" 
                        id="sex-label">Sex</InputLabel>
                    <Select 
                        //style={{marginLeft: 10, marginTop: 10}}
                        className="field"
                        labelId="sex-label"
                        id="sex-dropdown-box"
                        value={this.state.sex}
                        onChange={this.handleChangeSex}
                    >
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={"Rather not say"}>Rather not say</MenuItem>
                    </Select>

                    <Button 
                        className="submit-button" 
                        color="primary" 
                        variant="contained"
                        onClick={this.handleOnClick}
                    > Sumbit </Button>

                    {/* <select 
                    onChange={this.handleChangeSelect}
                    value={this.state.theBusiness}>
                        <optgroup label='Da Business'>
                            <option value='monkey'> Monkey </option>
                            <option value='business'>Business</option>
                        </optgroup>
                        <option value='lml'>Let Me Live</option>
                    </select> */}
                                    
                {/* <TextField 
                    // style={{marginLeft: 10}}
                    id="usersName" 
                    label="Enter Name" 
                    variant="outlined"
                    value={this.state.name} //shows a value already in the text box
                    onChange={this.handleChange}
                    onBlur={this.handleChangeBlur}
                /> */}
                </div>
                <p style={{marginLeft: 10}}>Name = {this.state.pFirstName} {this.state.pLastName}</p>
                <p style={{marginLeft: 10}}>Age = {this.state.pAge} </p>
                <p style={{marginLeft: 10}}>Sex = {this.state.pSex}</p>
                {/* <p style={{marginLeft: 10}}>Business name is {this.state.theBusiness} </p> */}
            </Paper>
                
                
            </div>
        )
    }
}

export default Tester;