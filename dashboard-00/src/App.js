import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './components/Layouts';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, key) => {
                    const Layout = route.layout || DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={key}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
