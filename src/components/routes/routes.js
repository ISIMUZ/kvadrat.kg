import Home from './../screens/home/Home';
import BuyProperty from './../screens/buy-property/Buy-Property';
import Services from './../screens/services/Services';
import Appraisal from './../screens/appraisal/Appraisal';
import Contacts from './../screens/contacts/Contacts';
import AboutUs from './../screens/about-us/About-Us';
import Sell from './../screens/sell/Sell';
import Details from './../screens/details/Details';
import Mortgage from '../screens/mortgage/Mortgage';

export const pablicRoutes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/buy-property',
    Component: BuyProperty,
  },
  {
    path: '/services',
    Component: Services,
  },
  {
    path: '/appraisal',
    Component: Appraisal,
  },
  {
    path: '/contacts',
    Component: Contacts,
  },
  {
    path: '/about-us',
    Component: AboutUs,
  },
  {
    path: '/sell',
    Component: Sell,
  },
  {
    path: '/mortgage',
    Component: Mortgage,
  },
  {
    path: '/prodazha/:title',
    Component: Details,
  },
];
