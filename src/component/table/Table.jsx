import React, { Fragment } from "react";
import styled from "styled-components";
import Input from "../input/Input";
import Select from "../select/Select";

const TABLEWRAPPER = styled.div`
  margin-top: 50px;
  width:100%;
`;
const TABLE = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-collapse: collapse;
  border: 1px solid rgba(181, 52, 113,.05);
  & thead {
    background: rgba(179, 55, 113,1.0);
    color: #fff;
    & tr th {
      padding:15px;
      text-align: left;
      font-size:14px;
    }
    & tr th:last-child{
      text-align:right
    }
  }
  & tr td {
    padding: 20px 15px;
    font-size:14px;
    color:rgba(30,39,46,.7)
  };
  & tr td:last-child{
    text-align:right
  }
  & tbody tr:nth-child(even) {
    background: rgba(179,55,113,.05);
   
  }
`;
const SelectWrapper = styled.div`
  width: 150px;

`;
const SearchWrapper = styled.div`
  width: 200px;

`;

const Table = ({ children }) => {
  return (
    <Fragment>
      <TABLEWRAPPER>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"20px"}}>
          <SelectWrapper>
            <Select>
                <option>Choose</option>
            </Select>
          </SelectWrapper>
          <SearchWrapper>
           <Input placeholder="Search..."/>
          </SearchWrapper>
        </div>
        <TABLE>{children}</TABLE>
      </TABLEWRAPPER>
    </Fragment>
  );
};

export default Table;
