
import AccountBalance from "@mui/icons-material/AccountBalance";
import AppsIcon from "@mui/icons-material/Apps";
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';
import { Dashboard } from './components/Dashboard';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
		authProvider={authProvider}
        dashboard={Dashboard}
	>
        <Resource name="Accounts" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} icon={AccountBalance}/>
		<Resource name="Applications" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} icon={AppsIcon}/>
    </Admin>
);

    