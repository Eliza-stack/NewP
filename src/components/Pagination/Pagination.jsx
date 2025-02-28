import React from "react";
import { Button } from "react-bootstrap";
import "./Pagination.scss";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination">
      <Button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="pagination-button"
      >
        Предыдущая
      </Button>
      <span>Страница {page}</span>
      <Button onClick={() => setPage(page + 1)} className="pagination-button">
        Следующая
      </Button>
    </div>
  );
};

export default Pagination;
