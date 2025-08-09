import { Button } from "react-bootstrap";

function PaginationControls({ currentPage, totalPages, onPrev, onNext }) {
  return (
    <div className="mt-3 d-flex justify-content-center gap-3 align-items-center pagination">
      <Button onClick={onPrev} disabled={currentPage === 1}>
        <i className="fa-solid fa-arrow-left"></i>
      </Button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <Button onClick={onNext} disabled={currentPage === totalPages}>
        <i className="fa-solid fa-arrow-right"></i>
      </Button>
    </div>
  );
}

export default PaginationControls;
