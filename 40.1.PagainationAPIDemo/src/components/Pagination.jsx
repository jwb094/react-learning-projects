

function Pagination({ setPage, pageNo, totalPages }) {
    console.log(pageNo);
    return <div className="text-center">

        <nav aria-label="Page navigation example " >
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#" disabled={pageNo === 1}
                    onClick={() => setPage(1)}>First</a></li>
                <li class="page-item"><a class="page-link" href="#"
                    onClick={() => setPage(pageNo - 1)}>Previous</a></li>

                <li class="page-item"><a class="page-link" href="#">{pageNo}</a></li>

                <li class="page-item"><a class="page-link" href="#"
                    onClick={() => setPage(pageNo + 1)}

                >Next</a></li>
                <li class="page-item"><a class="page-link" href="#"
                    onClick={() => setPage(totalPages)}
                    disabled={pageNo === totalPages}
                >Last</a></li>
            </ul>
        </nav >
    </div >
}


export default Pagination;