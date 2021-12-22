import React from "react";
import { Pagination } from "antd";

const Pagination_Comp = ({onPageChange})=>{
    return (
        <Pagination defaultCurrent={1} total={500} onChange={onPageChange} />
    )
}
export default Pagination_Comp;