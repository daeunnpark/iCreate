import "babel-polyfill";
import React, { Component } from "react";
import { Admin, Resource } from "react-admin";

import "./App.css";

import authProvider from "./authProvider";
import sagas from "./sagas";
import themeReducer from "./themeReducer";
import Login from "./Login";
import Layout from "./Layout";
import Menu from "./Menu";
import { Dashboard } from "./dashboard";
import customRoutes from "./routes";
import englishMessages from "./i18n/en";
/*
import {
  VisitorList,
  VisitorEdit,
  VisitorCreate,
  VisitorIcon
} from "./visitors";
import { CommandList, CommandEdit, CommandIcon } from "./commands";
*/
import {
  ProductList,
  ProductCreate,
  ProductEdit,
  ProductIcon
} from "./products";

import {
  CategoryList,
  CategoryCreate,
  CategoryEdit,
  CategoryIcon
} from "./categories";

import { ReviewList, ReviewEdit, ReviewIcon } from "./reviews";

import dataProviderFactory from "./dataProvider";
import fakeServerFactory from "./fakeServer";

const i18nProvider = locale => {
  if (locale === "fr") {
    return import("./i18n/fr").then(messages => messages.default);
  }

  // Always fallback on english
  return englishMessages;
};

class App extends Component {
  state = { dataProvider: null };

  async componentWillMount() {
    this.restoreFetch = await fakeServerFactory(
      process.env.REACT_APP_DATA_PROVIDER
    );

    const dataProvider = await dataProviderFactory(
      process.env.REACT_APP_DATA_PROVIDER
    );

    this.setState({ dataProvider });
  }

  componentWillUnmount() {
    this.restoreFetch();
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return (
        <div className="loader-container">
          <div className="loader">Loading...</div>
        </div>
      );
    }

    return (
      <Admin
        title="Posters Galore Admin"
        dataProvider={dataProvider}
        customReducers={{ theme: themeReducer }}
        customSagas={sagas}
        customRoutes={customRoutes}
        authProvider={authProvider}
        dashboard={Dashboard}
        loginPage={Login}
        appLayout={Layout}
        menu={Menu}
        locale="en"
        i18nProvider={i18nProvider}
      >
        {/*
        <Resource
          name="customers"
          list={VisitorList}
          edit={VisitorEdit}
          create={VisitorCreate}
          icon={VisitorIcon}
        />
        <Resource
          name="commands"
          list={CommandList}
          edit={CommandEdit}
          icon={CommandIcon}
          options={{ label: "Documents" }}
        />
        */}
        <Resource
          name="products"
          list={
            ProductList // Documents
          }
          create={ProductCreate}
          edit={ProductEdit}
          icon={ProductIcon}
        />
        <Resource
          name="reservation"
          list={ReviewList}
          edit={ReviewEdit}
          icon={ReviewIcon}
          options={{ label: "Reservation" }}
        />
        <Resource
          name="calendar"
          list={ReviewList}
          edit={ReviewEdit}
          icon={ReviewIcon}
        />
        <Resource
          name="categories"
          list={
            CategoryList //Settings
          }
          create={CategoryCreate}
          edit={CategoryEdit}
          icon={CategoryIcon}
        />
      </Admin>
    );
  }
}

export default App;
