import React from "react";
import { Button, Card } from "react-bootstrap";

const Post = ({ post, onDelete }) => {
  return (
    <Card className="post">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="danger" onClick={() => onDelete(post.id)}>
          Удалить
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
