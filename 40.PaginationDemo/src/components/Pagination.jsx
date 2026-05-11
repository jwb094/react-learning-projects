import React from "react";
import { returnPaginationRange } from "../utils/appUtils";

function Pagination(props) {
    let array = returnPaginationRange(props.totalPage, props.page, props.limit, props.siblings);
    return (
        <ul className="pagination pagination-md justify-content-end">
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous"
                    onClick={() => props.onPageChange("&laquo;")}>
                    <span aria-hidden="true">&laquo;</span></a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#"
                    onClick={() => props.onPageChange("lsaquo;")}>&lsaquo;</a>
            </li>
            {array.map(value => {
                if (value === props.page) {
                    return (
                        <li key={value} className="page-item active"><span className="page-link" href="#"
                            onClick={() => props.onPageChange(value)}>{value}</span></li>
                    )
                } else {
                    return (
                        <li key={value} className="page-item"><span className="page-link" href="#"
                            onClick={() => props.onPageChange(value)}>{value}</span></li>
                    )
                }
            })}
            <li className="page-item">
                <a className="page-link" href="#"
                    onClick={() => props.onPageChange("&rsaquo;")}>&rsaquo;</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Next"
                    onClick={() => props.onPageChange("&raquo;")}>
                    <span aria-hidden="true">&raquo;</span></a>
            </li>
        </ul>
    )

}


export default Pagination;