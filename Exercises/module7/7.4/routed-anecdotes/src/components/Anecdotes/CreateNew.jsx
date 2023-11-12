import { useState } from 'react'
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const CreateNew = (props) => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = (e) => {};

  const onFinish = (values) => {
    props.addNew({
      ...values,
      votes: 0,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }; 


  return (
    <div>
      <h2>create a new anecdote</h2>
      <Form
    name="newAnecdote"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish} onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="Content"
      name="content"
      rules={[
        {
          required: true,
          message: 'Please input your super content you wish to save!',
        },
      ]}
    >
      <Input placeholder="my super note" value={content} />
    </Form.Item>

    <Form.Item
      label="Author"
      name="author"
      rules={[
        {
          required: true,
          message: 'Please input your beautiful name!',
        },
      ]}
    >
      <Input placeholder="Name of the super author" value={author}/>
    </Form.Item>

    <Form.Item
      label="Url for more info"
      name="url"
      rules={[
        {
          required: true,
          message: 'Please input your super info!',
        },
      ]}
    >
      <Input placeholder="https://aANuRL1nc0mPreHEn518LE.com"
            value={info}/>
    </Form.Item>

    
    <Form.Item>
    <Button type="primary" htmlType="submit">
        Create my super note
      </Button>
    </Form.Item>
  </Form>

      {/* <form onSubmit={handleSubmit}>
        <div>
          Content
          <Input
            placeholder="My super note"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          Author
          <Input
            placeholder="Name of the super author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          Url for more info
          <Input
            placeholder="https://aANuRL1nc0mPreHEn518LE.com"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
       <button><Button>create</Button></button> 
        
      </form> */}
    </div>
  );
};

export default CreateNew;
