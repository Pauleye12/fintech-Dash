import React, { useCallback, useEffect, useState } from "react";
import filterSVG from "/svg/filter-results-button.svg";
import dropDown from "/svg/Vector.svg";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(utc);
dayjs.extend(advancedFormat);

function Table({ Filter }) {
  const [tableInfo, setTableInfo] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const res = await fetch(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        const resJson = await res.json();
        setTableInfo(resJson);
      } catch (error) {
        console.log("error fetching data");
      }
    };
    fetchTableData();
  }, []);

  
  let contentNum: number = 10;


  let pageContent = tableInfo.slice(
    pageNumber * contentNum,
    pageNumber * contentNum + contentNum
  );

  let selectPage = useCallback(
    (num: number) => () => {
      setPageNumber(num - 1);
    },
    [tableInfo]
  );

  return (
    <div className="tableWrapper">
      <div className="tableContainer">
        <table className="dashTable">
          <tr>
            <th className="dashTh">
              <div>
                <h1>Organization</h1>
                <img src={filterSVG} alt="" />
              </div>
            </th>
            <th className="dashTh">
              <div>
                <h1>username</h1>
                <img src={filterSVG} alt="" />
              </div>
            </th>
            <th className="dashTh">
              <div>
                <h1>email</h1>
                <img src={filterSVG} alt="" />
              </div>
            </th>
            <th className="dashTh">
              <div>
                <h1>phone number</h1>
                <img src={filterSVG} alt="" />
              </div>
            </th>
            <th className="dashTh">
              <div>
                <h1>date joined</h1>
                <img src={filterSVG} alt="" />
              </div>
            </th>
            <th className="dashTh">
              <div>
                <h1>status</h1>
                <img src={filterSVG} alt="" />
              </div>
            </th>
          </tr>
          {pageContent.map((data, index) => (
            <tr className="tableContent" key={index}>
              <td className="dashTd orgName">
                <div>
                  <h1>{data.orgName}</h1>
                </div>
              </td>
              <td className="dashTd userName">
                <div>
                  <h1>{data.userName}</h1>
                </div>
              </td>
              <td className="dashTd email">
                <div>
                  <h1>{data.email}</h1>
                </div>
              </td>
              <td className="dashTd phoneNumber">
                <div>
                  <h1>{data.phoneNumber}</h1>
                </div>
              </td>
              <td className="dashTd createdAt">
                <div>
                  <h1>
                    {dayjs(data.createdAt).format("MMM DD, YYYY. h:mm A")}
                  </h1>
                </div>
              </td>
              <td className="dashTd">
                <div>
                  <h1>status</h1>
                </div>
              </td>
            </tr>
          ))}
          {Filter && (
            <section className="filterBox">
              <form className="filterForm">
                <div className="organizationWrapper">
                  <label htmlFor="organization">Organization</label>
                  <select className="formInput" name="Select" id="organization">
                    <option selected value="select">
                      Select
                    </option>
                    <option value="Pauleye">Pauleye</option>
                    <option value="Crimson">Crimson</option>
                    <option value="Teepy">Teepy</option>
                    <option value="YDF">YDF</option>
                    <option value="OlaYK">OlaYK</option>
                  </select>
                </div>
                <div className="userNameWrapper">
                  <label htmlFor="userName">Username</label>
                  <input
                    className="formInput"
                    placeholder="User"
                    type="text"
                    id="userName"
                  />
                </div>
                <div className="emailWrapper">
                  <label htmlFor="email">Email</label>
                  <input
                    className="formInput"
                    placeholder="Email"
                    type="text"
                    id="email"
                  />
                </div>
                <div className="dateWrapper">
                  <label htmlFor="date">Date</label>
                  <input
                    className="formInput"
                    placeholder="date"
                    type="date"
                    id="date"
                  />
                </div>
                <div className="phoneNumberWrapper">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    className="formInput"
                    placeholder="Phone Number"
                    type="number"
                    id="phoneNumber"
                  />
                </div>
                <div className="statusWrapper">
                  <label htmlFor="status">Status</label>
                  <input
                    className="formInput"
                    placeholder="status"
                    type="text"
                    id="status"
                  />
                </div>
                <div className="filterBtns">
                  <button className="resetBtn">Reset</button>
                  <button className="filterBtn">Filter</button>
                </div>
              </form>
            </section>
          )}
        </table>
      </div>
      <section className="tableNav">
        <div className="leftTableNav">
          <h1>
            Showing{" "}
            <span className="contentNumDisp">
              {contentNum} <img src={dropDown} alt="" />{" "}
            </span>{" "}
            out of <span >{tableInfo.length} </span>
          </h1>
        </div>
        <div className="rightTableNav">
          <button className="tableNavArrow left">
            <img src={dropDown} alt="" />
          </button>
          <button className="page" onClick={selectPage(1)}>
            1
          </button>
          <button className="page" onClick={selectPage(2)}>
            2
          </button>
          <button className="page" onClick={selectPage(3)}>
            3
          </button>
          <button className="page" onClick={selectPage(4)}>
            4
          </button>
          <button className="page" onClick={selectPage(5)}>
            5
          </button>
          <button className="page" onClick={selectPage(6)}>
            6
          </button>
          <button className="page" onClick={selectPage(7)}>
            7
          </button>
          <button className="page" onClick={selectPage(8)}>
            8
          </button>
          <button className="page" onClick={selectPage(9)}>
            9
          </button>
          <button className="page" onClick={selectPage(10)}>
            10
          </button>
          <button className="tableNavArrow right">
            <img src={dropDown} alt="" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Table;
