import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";


const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 106px;
  border-radius: 5px;
  max-width: 311px;
  background: ${({ isDragging }) =>
    isDragging ? "rgba(255, 59, 59, 0.15)" : "white"}; 
  background: white;
  margin-top: 15px;

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
  }
  p{
    line-height:1;
    padding:0 !important;
    margin:0.3rem !important;
    font-size:13px;
  }
  /* .priority{ */
  /* margin-right: 12px; */
  /* align-self: center;
    svg{
      width: 12px !important;
      height: 12px !important;
      margin-right: 12px; */
  /* margin-top: 2px; */
  /* } */
  /* } */
`;

const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation>
            <div className={`${item.id === ' ' ? 'hidden' : ''}`}>
            <img
                  src={item.image}
                  alt={item.image}
                  className="w-full"
                  // onClick={() => openModal(item.original)}
                />
            </div>
            <p><b>Make : </b>{item.make}</p>
            <p><b>Model : </b>{item.model}</p>
            <p><b>Price : </b>{item.price}</p>
            <p><b>Year: </b>{item.year}</p>
            <p><b>Mileage : </b>{item.mileage}</p>
            <div className="secondary-details">
              <p>
                <span className={`rounded-pill ${item.status === 'Blocked'
                    ? 'rounded-pill--warning'
                    : item.status === 'Sold'
                      ? 'rounded-pill--danger'
                      : 'rounded-pill--success'
                  }`}>
                  {item.status}
                </span>
              </p>
            </div>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;

// <span className="priority">
// {item.Priority === 'High' ? (<RedArrow />) : item.Priority === 'Medium' ? (<YellowArrow />) : (<BlueArrow />)}
// </span>
// <div><CustomAvatar name={item.Assignee} isTable={false} size={16} /></div>
