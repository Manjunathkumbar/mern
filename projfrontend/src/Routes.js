import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./core/Home"
import signup from "./user/Signup";
import signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateThisProduct from "./admin/UpdateProduct";






const Routes = ()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={signup} />
            <Route path="/signin" exact component={signin} />
            <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
            <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
            <AdminRoute path="/admin/create/category" exact component={AddCategory} />
            <AdminRoute path="/admin/categories" exact component={ManageCategories} />
            <AdminRoute path="/admin/create/product" exact component={AddProduct} />
            <AdminRoute path="/admin/products" exact component={ManageProducts} />
            <AdminRoute path="/admin/product/update/:productId" exact component={UpdateThisProduct} />
        </Switch>
        </BrowserRouter>
    )
}


export default Routes;