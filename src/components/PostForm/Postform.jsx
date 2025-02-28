import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Card } from "react-bootstrap";
import "./PostForm.scss";

const PostForm = ({ onAdd }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    onAdd({ title: data.title, body: data.body });
    reset();
  };

  return (
    <Card className="post-form-card">
      <Card.Body>
        <Card.Title>Добавить пост</Card.Title>
        <Form onSubmit={handleSubmit(onSubmit)} className="post-form">
          <Form.Group controlId="formTitle">
            <Form.Control
              {...register("title", { required: "Заголовок обязателен" })}
              placeholder="Заголовок"
              className="form-input"
            />
          </Form.Group>
          <Form.Group controlId="formBody">
            <Form.Control
              as="textarea"
              {...register("body", { required: "Текст поста обязателен" })}
              placeholder="Текст поста"
              className="form-textarea"
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="submit-button">
            Добавить пост
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default PostForm;
