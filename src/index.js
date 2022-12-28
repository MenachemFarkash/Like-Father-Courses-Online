import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CoursesContextProvider from './Helpers/CoursesContext';
import UserContextProvider from './Helpers/UserContext';
import AdminContextProvider from './Helpers/AdminContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AdminContextProvider>
            <CoursesContextProvider>
                <UserContextProvider>
                    <App />
                </UserContextProvider>
            </CoursesContextProvider>
        </AdminContextProvider>
    </React.StrictMode>
);

reportWebVitals();
