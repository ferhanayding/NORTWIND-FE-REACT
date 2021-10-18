import React from "react";
import Catogories from "./Catogories";
import ProductLİst from "../pages/ProductList";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { Route } from "react-router";
import CartDetail from "../pages/CartDetail";
import ProductDetail from "../pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Catogories />
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/" component={ProductLİst} />
            <Route exact path="/products" component={ProductLİst} />
            <Route exact path="/product/:name" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />
            <Route exact path="/products/add" component={ProductAdd} />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
