import React, { useEffect, useState, useMemo } from "react";

//! api call
import { getMembers } from "../../services/users/user.api";

//! assets
import { filter, remove, edit, update } from "../../assets/images/index";
import Pagination from "../../components/Pagination";

const PageSize = 10;
const AdminMainList = () => {
  const [memberList, setMemberList] = useState([
    {
      id: "1",
      name: "Aaron Miles",
      email: "aaron@mailinator.com",
      role: "member",
    },
    {
      id: "2",
      name: "Aishwarya Naik",
      email: "aishwarya@mailinator.com",
      role: "member",
    },
    {
      id: "3",
      name: "Arvind Kumar",
      email: "arvind@mailinator.com",
      role: "admin",
    },
    {
      id: "4",
      name: "Caterina Binotto",
      email: "caterina@mailinator.com",
      role: "member",
    },
    {
      id: "5",
      name: "Chetan Kumar",
      email: "chetan@mailinator.com",
      role: "member",
    },
    {
      id: "6",
      name: "Jim McClain",
      email: "jim@mailinator.com",
      role: "member",
    },
    {
      id: "7",
      name: "Mahaveer Singh",
      email: "mahaveer@mailinator.com",
      role: "member",
    },
    {
      id: "8",
      name: "Rahul Jain",
      email: "rahul@mailinator.com",
      role: "admin",
    },
    {
      id: "9",
      name: "Rizan Khan",
      email: "rizan@mailinator.com",
      role: "member",
    },
    {
      id: "10",
      name: "Sarah Potter",
      email: "sarah@mailinator.com",
      role: "admin",
    },
    {
      id: "11",
      name: "Keshav Muddaiah",
      email: "keshav@mailinator.com",
      role: "member",
    },
    {
      id: "12",
      name: "Nita Ramesh",
      email: "nita@mailinator.com",
      role: "member",
    },
    {
      id: "13",
      name: "Julia Hunstman",
      email: "julia@mailinator.com",
      role: "member",
    },
    {
      id: "14",
      name: "Juan Alonso",
      email: "juan@mailinator.com",
      role: "admin",
    },
    {
      id: "15",
      name: "Gabriel Montoya",
      email: "gabriel@mailinator.com",
      role: "admin",
    },
    {
      id: "16",
      name: "Beatrice Iglesias",
      email: "beatrice@mailinator.com",
      role: "admin",
    },
    {
      id: "17",
      name: "Sarah Symms",
      email: "sarah.s@mailinator.com",
      role: "admin",
    },
    {
      id: "18",
      name: "Patrick Pinheiro",
      email: "patrick@mailinator.com",
      role: "admin",
    },
    {
      id: "19",
      name: "Anand Patel",
      email: "anand@mailinator.com",
      role: "member",
    },
    {
      id: "20",
      name: "Kishore Kalburgi",
      email: "kishore@mailinator.com",
      role: "member",
    },
    {
      id: "21",
      name: "Rebecca Norris",
      email: "rebecca@mailinator.com",
      role: "member",
    },
    {
      id: "22",
      name: "Özgür Başak",
      email: "ozgur@mailinator.com",
      role: "member",
    },
    {
      id: "23",
      name: "Robin Andersen",
      email: "robin@mailinator.com",
      role: "member",
    },
    {
      id: "24",
      name: "Nandini Kumar",
      email: "nandini@mailinator.com",
      role: "member",
    },
    {
      id: "25",
      name: "Nikita Smith",
      email: "nikita@mailinator.com",
      role: "member",
    },
    {
      id: "26",
      name: "Colton Doe",
      email: "colton@mailinator.com",
      role: "member",
    },
    {
      id: "27",
      name: "Alain Senna",
      email: "alain@mailinator.com",
      role: "member",
    },
    {
      id: "28",
      name: "Ashwin Jain",
      email: "ashwin@mailinator.com",
      role: "member",
    },
    {
      id: "29",
      name: "Seema Bhatt",
      email: "seema@mailinator.com",
      role: "member",
    },
    {
      id: "30",
      name: "Kayla Scarpinski",
      email: "kayla@mailinator.com",
      role: "member",
    },
    {
      id: "31",
      name: "Ajay Ghosh",
      email: "ajay@mailinator.com",
      role: "member",
    },
    {
      id: "32",
      name: "Chris Lindberg",
      email: "chris@mailinator.com",
      role: "member",
    },
    {
      id: "33",
      name: "Christina Mourujärvi",
      email: "christina@mailinator.com",
      role: "member",
    },
    {
      id: "34",
      name: "Mikhail Bill",
      email: "mikhail@mailinator.com",
      role: "member",
    },
    {
      id: "35",
      name: "Eino Göregen",
      email: "eino@mailinator.com",
      role: "member",
    },
    {
      id: "36",
      name: "Zachariah Johansson",
      email: "zacharaiah@mailinator.com",
      role: "member",
    },
    {
      id: "37",
      name: "Aimaan Mohammed",
      email: "aimaan@mailinator.com",
      role: "admin",
    },
    {
      id: "38",
      name: "Aika Tsunoda",
      email: "aika@mailinator.com",
      role: "member",
    },
    {
      id: "39",
      name: "Kimiko Minamoto",
      email: "kimiko@mailinator.com",
      role: "member",
    },
    {
      id: "40",
      name: "Alyona Baginskaite",
      email: "alyona@mailinator.com",
      role: "member",
    },
    {
      id: "41",
      name: "Anirudh Mukherjee",
      email: "anirudh@mailinator.com",
      role: "member",
    },
    {
      id: "42",
      name: "Alyona Gov",
      email: "alyonagov@mailinator.com",
      role: "member",
    },
    {
      id: "43",
      name: "Robin Singh",
      email: "robin@mailinator.com",
      role: "member",
    },
    {
      id: "44",
      name: "Vijay Vasudevan",
      email: "vijayv@mailinator.com",
      role: "member",
    },
    {
      id: "45",
      name: "Steve Smith",
      email: "steve@mailinator.com",
      role: "member",
    },
    {
      id: "46",
      name: "Anirudh Banerjee",
      email: "anirudhb@mailinator.com",
      role: "member",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedDeleteMember, setSelectedDeleteMember] = useState([]);

  const [editableRow, setEditableRow] = useState({
    editableRowMember: [],
  });

  const [editRowDetails, setEditRowDetails] = useState({
    id: null,
    name: null,
    email: null,
    role: null,
  });

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return memberList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, memberList]);

  const getMemberList = async () => {
    let response = await getMembers();
  };
  useEffect(() => {
    getMemberList();
  }, []);

  const handleDeleteMember = (id, allSelectedId) => {
    let deletedMembers;
    if (!allSelectedId.length) {
      deletedMembers = [];
      deletedMembers.push(id);
    } else {
      deletedMembers = [...allSelectedId];
    }
    let updateMemberList = memberList.filter(
      (member) => !deletedMembers.includes(member.id)
    );
    setMemberList(updateMemberList);
  };

  const handleClickEdit = async (member) => {
    await setEditableRow({
      editableRowMember: member,
    });
    setEditRowDetails({
      name: member?.name,
      email: member?.email,
      role: member?.role,
    });
  };

  const handleUpdateDetails = (editRow) => {
    let memberListCopy = [...memberList];
    let updatedRowId = memberListCopy.findIndex(
      (member) => member.id === editRow.id
    );
    memberListCopy.splice(updatedRowId, 1, editRow);
    setMemberList(memberListCopy);
    setEditableRow(null);
  };

  return (
    <div className="adminMainList">
      <div className="adminMainList__topHeading">
        <h2>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7506 12.0009C14.7868 12.0009 13.8547 11.5706 13.1253 10.7895C12.4159 10.0277 11.9828 9.01176 11.9063 7.92973C11.8248 6.7755 12.1768 5.7141 12.8974 4.94055C13.618 4.167 14.6255 3.74976 15.7506 3.74976C16.8678 3.74976 17.8781 4.1745 18.5964 4.94618C19.3216 5.72535 19.6746 6.78488 19.5931 7.92926C19.5148 9.01269 19.0821 10.0282 18.3741 10.789C17.6465 11.5706 16.715 12.0009 15.7506 12.0009Z"
                fill={"#6A757F"}
              />
              <path
                d="M21.9285 20.2498H9.56993C9.37123 20.2508 9.17493 20.2063 8.99615 20.1196C8.81737 20.0329 8.66086 19.9063 8.53868 19.7496C8.40907 19.5797 8.31956 19.3828 8.27687 19.1734C8.23417 18.964 8.23938 18.7477 8.29211 18.5407C8.6868 16.9559 9.66461 15.6415 11.1196 14.7401C12.411 13.9404 14.0549 13.4998 15.749 13.4998C17.4763 13.4998 19.0771 13.9216 20.376 14.7208C21.8343 15.6176 22.8135 16.9394 23.2063 18.5435C23.2584 18.7507 23.2631 18.967 23.2199 19.1763C23.1767 19.3855 23.0868 19.5823 22.957 19.7519C22.8349 19.9079 22.6788 20.0339 22.5005 20.1202C22.3222 20.2064 22.1266 20.2508 21.9285 20.2498Z"
                fill={"#6A757F"}
              />
              <path
                d="M6.89041 12.1885C5.24064 12.1885 3.79012 10.6545 3.65557 8.76941C3.589 7.80365 3.88998 6.91055 4.49944 6.25561C5.10234 5.60724 5.95277 5.25 6.89041 5.25C7.82804 5.25 8.67191 5.60911 9.27809 6.26124C9.89224 6.92133 10.1923 7.81255 10.122 8.77035C9.98741 10.655 8.53736 12.1885 6.89041 12.1885Z"
                fill={"#6A757F"}
              />
              <path
                d="M9.96921 13.6621C9.14456 13.259 8.07425 13.0574 6.89143 13.0574C5.51029 13.0574 4.16901 13.4174 3.11417 14.071C1.91822 14.8131 1.11373 15.8937 0.788839 17.1984C0.741294 17.3861 0.736797 17.5821 0.775685 17.7717C0.814572 17.9614 0.895838 18.1398 1.0134 18.2936C1.12496 18.4368 1.26787 18.5525 1.43115 18.6318C1.59443 18.7112 1.77373 18.752 1.95526 18.7512H7.15912C7.24695 18.7511 7.332 18.7203 7.39942 18.664C7.46685 18.6077 7.51238 18.5296 7.52808 18.4431C7.53324 18.4136 7.5398 18.3841 7.5473 18.355C7.94486 16.7582 8.8764 15.409 10.2528 14.4254C10.3035 14.3889 10.3442 14.3403 10.3713 14.2841C10.3984 14.2279 10.4111 14.1658 10.4082 14.1035C10.4052 14.0412 10.3868 13.9805 10.3545 13.9271C10.3222 13.8737 10.2771 13.8292 10.2233 13.7976C10.1497 13.7545 10.0653 13.709 9.96921 13.6621Z"
                fill={"#6A757F"}
              />
            </svg>
          </span>
          Member List
        </h2>
      </div>
      <div className="adminMainList__searchSection">
        <div className="adminMainList__searchSection--searchBar">
          <input
            placeholder={"Search by member, name, role"}
            // onChange={(e) => {
            //   e.preventDefault();
            //   e.stopPropagation();
            //   setSearchInput(e.target.value);
            // }}
          />
        </div>
        <div className="adminMainList__searchSection--filter">
          <div>
            <p>
              <span>
                <img src={filter} alt="filter" />
              </span>
              Apply filter
            </p>
          </div>
          <div></div>
        </div>
        <div className="adminMainList__searchSection--btnWrapper">
          <button className="btn btn__primary reset">Reset</button>
        </div>
      </div>
      <div className="adminMainList__tableSection">
        <div className="adminMainList__tableSection__header">
          <div className="adminMainList__tableSection__header--col"></div>
          <div className="adminMainList__tableSection__header--col">
            <h3>Name</h3>
          </div>
          <div className="adminMainList__tableSection__header--col">
            <h3>Email</h3>
          </div>
          <div className="adminMainList__tableSection__header--col">
            <h3>Role</h3>
          </div>
          <div className="adminMainList__tableSection__header--col">
            <h3>Action</h3>
          </div>
        </div>
        <div className="adminMainList__tableSection__details">
          {currentTableData.map((member, index) => {
            return (
              <div
                className="adminMainList__tableSection__details--row"
                key={index}
              >
                <div
                  className="adminMainList__tableSection__details--row--col"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDeleteMember((prev) => [...prev, member?.id]);
                  }}
                >
                  <input type="checkbox" name={member?.id} value={member.id} />
                </div>
                <div className="adminMainList__tableSection__details--row--col">
                  {member?.id === editableRow?.editableRowMember?.id ? (
                    <input
                      type="text"
                      value={editRowDetails.name}
                      onChange={(e) => {
                        e.preventDefault();
                        setEditRowDetails({
                          id: member.id,
                          name: e.target.value,
                          email: editRowDetails.email
                            ? editRowDetails.email
                            : member?.email,
                          role: editRowDetails.role
                            ? editRowDetails.role
                            : member?.role,
                        });
                      }}
                    />
                  ) : (
                    <p> {member?.name}</p>
                  )}
                </div>
                <div className="adminMainList__tableSection__details--row--col">
                  {member.id === editableRow?.editableRowMember?.id ? (
                    <input
                      type="text"
                      value={editRowDetails?.email}
                      onChange={(e) => {
                        e.preventDefault();
                        setEditRowDetails({
                          id: member.id,
                          name: editRowDetails.name
                            ? editRowDetails.name
                            : member?.name,
                          email: e.target.value,
                          role: editRowDetails.role
                            ? editRowDetails.role
                            : member?.role,
                        });
                      }}
                    />
                  ) : (
                    <p> {member?.email}</p>
                  )}
                </div>
                <div className="adminMainList__tableSection__details--row--col">
                  {member?.id === editableRow?.editableRowMember?.id ? (
                    <input
                      type="text"
                      value={editRowDetails.role}
                      onChange={(e) => {
                        e.preventDefault();
                        setEditRowDetails({
                          id: member.id,
                          name: editRowDetails.name
                            ? editRowDetails.name
                            : member?.name,
                          email: editRowDetails.email
                            ? editRowDetails.email
                            : member?.email,
                          role: e.target.value,
                        });
                      }}
                    />
                  ) : (
                    <p>{member?.role}</p>
                  )}
                </div>
                <div className="adminMainList__tableSection__details--row--col">
                  {member?.id === editableRow?.editableRowMember?.id ? (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUpdateDetails(editRowDetails);
                      }}
                    >
                      <img src={update} alt="edit" />
                    </span>
                  ) : (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClickEdit(member);
                      }}
                    >
                      <img src={edit} alt="edit" />
                    </span>
                  )}

                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteMember(member.id, []);
                    }}
                  >
                    <img src={remove} alt="remove" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="adminMainList__pagination">
        <div
          className="adminMainList__pagination__btnWrapper"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteMember(null, selectedDeleteMember);
          }}
        >
          {selectedDeleteMember.length ? (
            <button className="btn btn__negative">Delete All</button>
          ) : null}
        </div>

        <Pagination
          currentPage={currentPage}
          totalCount={memberList.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <div></div>
      </div>
    </div>
  );
};

export default AdminMainList;
