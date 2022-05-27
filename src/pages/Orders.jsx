import React from "react";
import { Header } from "../components/index";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-grids";
import { ordersGrid } from "../data/dummy";

const Orders = () => {
  return (
    <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default Orders;
