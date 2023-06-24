import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
    MantineProvider, ColorSchemeProvider, ColorScheme, createEmotionCache, LoadingOverlay,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Global } from '@emotion/react';
import { themeDark, themeLight } from 'theme/theme';
import { Main } from 'pages';
import { BackToTop } from 'components';
import { GlobalStyles } from './GlobalStyles';

const ProjectPage = lazy(() => import('pages/ProjectPage/ProjectPage').then((module) => ({ default: module.ProjectPage })));

export function App() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'colorThemeRB',
        defaultValue: 'dark',
    });

    const toggleColorScheme = () => setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));
    const myCache = createEmotionCache({ key: 'bonchevskyi', prepend: true });

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider emotionCache={myCache} theme={colorScheme === 'dark' ? themeDark : themeLight} withGlobalStyles withNormalizeCSS>
                <Router>
                    <Suspense fallback={<LoadingOverlay visible />}>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/projects" element={<ProjectPage />} />
                        </Routes>
                    </Suspense>
                </Router>
                <Global styles={GlobalStyles} />
                <BackToTop />
            </MantineProvider>
        </ColorSchemeProvider>
    );
}
