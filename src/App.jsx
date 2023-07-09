<<<<<<< HEAD
// import React, {useState} from 'react';\

import { BottomNav } from "./components/BottomNav"
import { Navbar } from "./components/NavBar"
import { Home } from "./pages/home/home"
=======
import { CircularProgress, createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { lazy, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import { themeSettings } from "./theme";
>>>>>>> 9f9e620819c10a9dc220b837b0e34fb8aa369ddd


const AuthPage = lazy(() => import('./pages/Auth/index'));
const HomePage = lazy(() => import('./pages/Home/index'));


const LoadingScreen = () => {
  return (
<<<<<<< HEAD
    <>
    <Navbar/>
    <Home/>
     <BottomNav/>
    </>
=======
    <Stack alignItems="center" mt={4}>
      <CircularProgress />
    </Stack>
>>>>>>> 9f9e620819c10a9dc220b837b0e34fb8aa369ddd
  )
}


function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/' element={<AuthPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
