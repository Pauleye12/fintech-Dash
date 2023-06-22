import React, { useCallback, useEffect, useState } from "react";
import dropDown from "/svg/Vector.svg";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Link } from "react-router-dom";
dayjs.extend(utc);
dayjs.extend(advancedFormat);

interface TableCont {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: { facebook: string; instagram: string; twitter: string };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: [string, string];
    loanRepayment: string;
  };
  id: string;
}

function Table() {
  const [tableInfo, setTableInfo] = useState<TableCont[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [hideBtnIncr, setHideBtnIncr] = useState(false);
  const [hideBtnDecr, setHideBtnDecr] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
  const toggleFilter = ():void => {
    setShowFilter((prev) => !prev)
  }
  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    const fetchTableData = async () => {
      try {
        const res = await fetch(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        const resJson: TableCont[] = await res.json();
        setTableInfo(resJson);
        setIsLoading(false)
      } catch (err) {
        setIsError(true)
        setIsLoading(false);
        console.log("error fetching data");
      }
    };
    fetchTableData();
  }, []);

  let contentNum: number = 10;
  const totPage: number = tableInfo.length / contentNum;
  // console.log(tableInfo.length)
  // console.log(totPage)
  const BtnArr = Array(totPage);
  // console.log(`length of mumu array = ${BtnArr.length}`)
  let pageContent = tableInfo.slice(
    pageNumber * contentNum,
    pageNumber * contentNum + contentNum
  );
console.log(pageContent)
  let selectPage = useCallback(
    (num: number) => () => {
      setPageNumber(num - 1);
    },
    [tableInfo]
  );

  let prevPage = () => {
    if (pageNumber <= 0) {
      setHideBtnDecr(true);
    } else {
      setHideBtnDecr(false);
      setHideBtnIncr(false);
      setPageNumber(pageNumber - 1);
    }
  };

  let nextPage = () => {
    if (pageNumber <= BtnArr.length - 2) {
      setPageNumber(pageNumber + 1);
      setHideBtnIncr(false);
      setHideBtnDecr(false);
    } else {
      setHideBtnIncr(true);
    }
    // ?  :
  };

  return (
    <div className="tableWrapper">
      <div className="tableContainer">
        <table className="dashTable">
          <tr>
            <th className="dashTh">
              <div>
                <h1>Organization</h1>
                <img
                  src="/svg/filter-results-button.svg"
                  onClick={toggleFilter}
                  alt=""
                />
              </div>
            </th>
            <th className="dashTh">
              <div>
                <h1>username</h1>
                <img
                  src="/svg/filter-results-button.svg"
                  onClick={toggleFilter}
                  alt=""
                />
              </div>
            </th>
            <th className="dashTh">
              <div>
                <h1>email</h1>
                <img
                  src="/svg/filter-results-button.svg"
                  onClick={toggleFilter}
                  alt=""
                />
              </div>
            </th>
            <th className="dashTh">
              <div>
                <h1>phone number</h1>
                <img
                  src="/svg/filter-results-button.svg"
                  onClick={toggleFilter}
                  alt=""
                />
              </div>
            </th>
            <th className="dashTh">
              <div>
                <h1>date joined</h1>
                <img
                  src="/svg/filter-results-button.svg"
                  onClick={toggleFilter}
                  alt=""
                />
              </div>
            </th>
            <th className="dashTh">
              <div>
                <h1>status</h1>
                <img
                  src="/svg/filter-results-button.svg"
                  onClick={toggleFilter}
                  alt=""
                />
              </div>
            </th>
          </tr>
          {isLoading && !isError ? (
            <div>Fetching data, please wait...</div>
          ) : (
            pageContent.map((data, index) => (
              <Link
                to={`/User/details/${data.id}`}
                className="tableContent a"
                key={index}
              >
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
              </Link>
            ))
          )}

          {!isLoading && isError ? (
            <div>
              Error loading Data, please check your internet connection.
            </div>
          ) : (
            pageContent.map((data, index) => (
              <Link
                to={`/User/details/${data.id}`}
                className="tableContent a"
                key={index}
              >
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
              </Link>
            ))
          )}
          {showFilter && (
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
              {`${pageContent[0].id}-${pageContent[9].id}`}{" "}
              <img src={dropDown} alt="" />{" "}
            </span>{" "}
            out of <span>{tableInfo.length} </span>
          </h1>
        </div>
        <div className="rightTableNav">
          {!hideBtnDecr && (
            <button onClick={prevPage} className="tableNavArrow left">
              <img src={dropDown} alt="" />
            </button>
          )}

          <div>
            {BtnArr.map((e, index) => (
              <button className="page" key={index} onClick={selectPage(index)}>
                {index}
              </button>
            ))}
          </div>
          {!hideBtnIncr && (
            <button onClick={nextPage} className="tableNavArrow right">
              <img src={dropDown} alt="" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default Table;
