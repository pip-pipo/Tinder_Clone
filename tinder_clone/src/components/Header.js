import React from "react"
import { Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

function Header(){
return(
    // BEM <<<<<<<<<<<<<<<<<
    <div>
        <h1>welcome to courses</h1>
        <Button color="primary" outline>Hello World</Button>
        <PersonIcon style={{ color: green[500] }} fontSize="large"/>
        <MessageIcon style={{ color: green[500] }} fontSize="large"/>
        <QuestionAnswerIcon style={{ color: green[500] }} fontSize="large"/>
    </div>
)
}

export default Header ;