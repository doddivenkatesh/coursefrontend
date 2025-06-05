import React from "react";
import { Table, Button } from "reactstrap";

const CategoryTable = ({ data, onEdit }) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Category Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? (
          data.map((cat, index) => (
            <tr key={cat.id}>
              <td>{index + 1}</td>
              <td>{cat.name}</td>
              <td>
                <Button
                  color="warning"
                  size="sm"
                  onClick={() => onEdit(cat)}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center">
              No categories found.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default CategoryTable;
