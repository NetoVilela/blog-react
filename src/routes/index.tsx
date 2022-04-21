import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {
    const {toggleTheme} = useAppThemeContext();

    return (

        <Routes>
            <Route path="/" element={
                <Button onClick={toggleTheme} variant='contained' color='secondary'>
                    ToggleTheme
                </Button>
            } />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>

    )

}