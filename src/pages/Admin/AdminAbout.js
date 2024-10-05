import React from "react";
import { Form, Input, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const temskills = values.skills.split(',');
      values.skills = temskills;
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...portfolioData.about,
          skills: portfolioData.about.skills.join(' , '),
        }}
      >
        <Form.Item name="lottieURL" label="Lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>

        <Form.Item name="description1" label="Descriptione1">
          <textarea placeholder="Description1" />
        </Form.Item>
        <Form.Item name="description2" label="Descriptione2">
          <textarea placeholder="Description2" />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <textarea placeholder="Skills" />
        </Form.Item>
        <div className="flex justify-end">
          <button className="px-5 py-2 bg-primary text-white" type="sumbit">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
