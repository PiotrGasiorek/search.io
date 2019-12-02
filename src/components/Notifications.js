import React from 'react';
import styled from 'styled-components';
import icon_alert from '../gallery/icon--alert.svg';

export default function Notifications(){
    return (
        <NotificationsStyles id='notification'>
            <img src={icon_alert} alt="Alert icon"/>
            <p></p>
        </NotificationsStyles>
    )
} 

const NotificationsStyles = styled.div `
    padding: 10px 30px 10px 25px;
    background: #007FCC;
    display: none;
    position: absolute;
    right: 15px;
    top: 15px;
    box-sizing: border-box;
    border-radius: 3px;

    p{
        margin-left: 15px;
        font-weight: 500;
        color: white;
    }
`;