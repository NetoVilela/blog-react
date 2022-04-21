import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
