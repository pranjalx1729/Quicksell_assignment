import React from 'react';
import { fade_circle, grey_exclamation } from '../assets/index';
import UserProfile from './UserProfile';
import '../App.css'

function KanbanCard({ statusIcon, ticket, users, selectedGrouping, priorityIcon }) {
  const taskId = ticket.id;
  const renderCard = () => {
    const cardClass = `kanban-card ${selectedGrouping === 'priority' ? 'priority-card' : ''}`;

    return (
      <div className={cardClass}>
        {/* Top row of the card */}
        <div className="top-row">
          <div className="user-id">{taskId}</div>
          
          {/* Render user profile only when grouping is not 'users' */}
          {selectedGrouping !== 'user' && (
            <div className="user-profile">
              {<UserProfile userId={ticket.userId} users={users} selectedGrouping={selectedGrouping} />}
            </div>
          )}
        </div>

        {/* Ticket title */}
        <div className="ticket-title">
          {selectedGrouping === 'priority' && (
            <img src={statusIcon[ticket.status]} alt="Status Icon" style={{ marginRight: '10px', height: "15px" }} />
          )}
          {ticket.title}
        </div>

        {/* Feature request block */}
        <div className="feature-request-button">
          {selectedGrouping !== 'priority' && (
            <img className="priority-icon" src={ticket.priority === 4 ? grey_exclamation : priorityIcon[ticket.priority]} alt="Priority Icon" />
          )}
          <div className='Feature_block'>
            <img src={fade_circle} className="status-icon" alt="Status Icon" />
            <span className="feature-text">Feature Request</span>
          </div>
        </div>
      </div>
    );
  };

  return renderCard();
}

export default KanbanCard;