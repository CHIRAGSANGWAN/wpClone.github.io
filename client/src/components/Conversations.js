import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';

export default function Conversations({darkMode}) {
  const { conversations, selectConversationIndex } = useConversations()

  return (
    <div >
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          variant={`${darkMode?'danger':'primary'}`}
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}
        >
          {conversation.recipients.map(r => r.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
    </div>
  )
}
