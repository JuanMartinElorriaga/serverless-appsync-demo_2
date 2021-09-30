import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {        
        // Amazon Cognito Region
        region: 'us-east-2',
        // Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_gYZqf462R',
        // Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '1cmau3jsg2p9q3b2m6j7g4nlv9',
        // Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: true,
    }
});

const myAppConfig = {
  // Hay que agregar el endpoint de GraphQL hecho en la otra carpeta (backend)
  'aws_appsync_graphqlEndpoint': 'https://d2sy67q7andr5iohx35y623z7e.appsync-api.us-east-2.amazonaws.com/graphql',
  'aws_appsync_region': 'us-east-2',
  'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS', // You have configured Auth with Amazon Cognito User Pool ID and Web Client Id
  // ...
}

Amplify.configure(myAppConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

