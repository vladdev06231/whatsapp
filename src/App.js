import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { init } from "./initGlobals";
import firebase from './firebase';
import { authGoogle } from './hooks/useApi'

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import PrivateRoute from './components/auth/PrivateRoute';
import CompanyAdminRoute from './components/auth/CompanyAdminRoute'
import SystemAdminRoute from './components/auth/SystemAdminRoute';
import SystemSettings from './components/system/SystemSettings';
import Chat from './components/company/chat/Chat';
import Contact from './components/company/contact/Contact.js'
import CompanySettings from './components/company/setting/CompanySettings';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();
init();

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <TempApp />
                </BrowserRouter>
            </QueryClientProvider>
        </div>
    )
}

const TempApp = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
            if (user) {
                try {
                    authGoogle("post", "/user/auth/google", user)
                        .then((response) => {
                            navigate("/company/chat");
                            setUser(response.data.user);
                        })
                        .catch(err => console.log(err, "error"));

                } catch (err) {
                    console.log(err);
                }
            }

        })
    }, []);

    return (
        <>
            <Routes>

                {/* System Pages */}
                <Route
                    path="/system/settings"
                    element={
                        <SystemAdminRoute>
                            <SystemSettings />
                        </SystemAdminRoute>
                    }
                />

                {/* Company Pages */}
                <Route
                    path="/company/chat"
                    element={
                        <PrivateRoute>
                            <Chat />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/company/contacts"
                    element={
                        <CompanyAdminRoute>
                            <Contact />
                        </CompanyAdminRoute>
                    }
                />

                <Route
                    path="/company/settings"
                    element={
                        <CompanyAdminRoute>
                            <CompanySettings />
                        </CompanyAdminRoute>
                    }
                />

                {/* 
                            <Route path="/sign-in/verify/:hash" element={<EmailHashVerfication />} />
                            <Route path="/sign-in/verify" element={<VerificationCode />} />
                        */}

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={
                    <Navigate
                        to="/company/chat"
                    />
                }>
                </Route>
            </Routes>
        </>
    );
}

export default App;
