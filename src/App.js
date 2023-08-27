import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './page/Home';
import Page1 from './page/page1';
import Page2 from './page/page2';
import Page3 from './page/page3';
import Page4 from './page/page4';
import Page5 from './page/page5';


function App() {
    return (
        // BrowserRouterでラップする
        <BrowserRouter>
            {/* ルーティング */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/page4" element={<Page4 />} />
                <Route path="/page5" element={<Page5 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;