import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import {router} from "./router/router.tsx";
import {RouterProvider} from "react-router-dom";
import {createRoot} from "react-dom/client";
import './index.css'


createRoot(document.getElementById('root')!).render(
		<Provider store={store}>
			<RouterProvider router={router}/>
		</Provider>
);
