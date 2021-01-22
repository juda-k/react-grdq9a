import { render } from "react-dom";
import "./index.css";
import * as React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  DetailRow,
  Page,
  Sort
} from "@syncfusion/ej2-react-grids";
import { employeeData, customerData, orderDatas } from "./data";
import { SampleBase } from "./sample-base";
export class Hierarchy extends SampleBase {
  constructor() {
    super(...arguments);
    this.secondChildGrid = {
      dataSource: customerData,
      queryString: "CustomerID",
      columns: [
        {
          field: "ActionItem",
          headerText: "Action Item",
          textAlign: "Right",
          width: 75
        },
        { field: "AssignedTo", headerText: "Assigned To", width: 100 },
        { field: "DueDate", headerText: "Due Date", width: 175 },
        { field: "Status", headerText: "Action Item Status", width: 100 }
      ]
    };
    this.childGrid = {
      dataSource: orderDatas,
      queryString: "EmployeeID",
      allowPaging: true,
      pageSettings: { pageSize: 6, pageCount: 5 },
      columns: [
        {
          field: "TopicName",
          headerText: "Topics",
          textAlign: "Right",
          width: 120
        },
        { field: "TopicPriority", headerText: "Topic Priority", width: 120 },
        { field: "SME", headerText: "SME", width: 120 },
        { field: "Notes", headerText: "Notes", width: 200 }
      ],
      childGrid: this.secondChildGrid
    };
  }
  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <GridComponent
            dataSource={employeeData}
            childGrid={this.childGrid}
            allowSorting={true}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="EventName"
                headerText="Event Name"
                width="125"
                textAlign="Right"
              />
              <ColumnDirective
                field="EventDate"
                headerText="Date"
                width="75"
              />
              
              <ColumnDirective
                field="Attendees"
                headerText="Attendees"
                width="125"
              />
              
            </ColumnsDirective>
            <Inject services={[DetailRow, Page, Sort]} />
          </GridComponent>
        </div>
      </div>
    );
  }
}

render(<Hierarchy />, document.getElementById("sample"));
