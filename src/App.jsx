import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import {Alert, Snackbar, Stack} from "@mui/material";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {
    removeToast,
    selectShowTopLoading,
    selectToasts,
} from "./redux/slices/common.slice";
import TopLoading from "./components/TopLoading";
import AppRouter from "./AppRouter";

function App() {
    const dispatch = useAppDispatch();
    const showTopLoading = useAppSelector(selectShowTopLoading);
    const toasts = useAppSelector(selectToasts);


    const handleToastClose = (id) => {
        dispatch(removeToast(id));
    };

    const Toasts = () =>
        toasts.map((toast) => (
            <Snackbar
                key={toast._id}
                open
                autoHideDuration={
                    toast.durationInSeconds ? toast.durationInSeconds * 1000 : 6000
                }
                onClose={() => handleToastClose(toast._id)}
            >
                <Alert
                    onClose={() => handleToastClose(toast._id)}
                    severity={toast.type}
                    sx={{width: "100%"}}
                >
                    {toast.message}
                </Alert>
            </Snackbar>
        ));
    return (
        <>
            <Stack className="App">
                <Router>
                    <AppRouter/>
                </Router>
            </Stack>
            <TopLoading loading={showTopLoading}/>
            <Toasts/>
        </>


    );
}

export default App;
