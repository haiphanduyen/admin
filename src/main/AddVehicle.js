import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,

} from 'antd';

export default function AddVehicle () {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        
        <Form.Item label="Tên Xe">
          <Input />
        </Form.Item>
        <Form.Item label="Hãng Xe">
          <Select>
            <Select.Option value="demo">Hãng</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Loại">
          <Select>
            <Select.Option value="demo">Loại</Select.Option>
          </Select>
          
        </Form.Item>
        
        <Form.Item label="Ngày thêm">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Giá">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Thêm xe">
          <Button>Add</Button>
        </Form.Item>
      </Form>
    </>
  );
};
