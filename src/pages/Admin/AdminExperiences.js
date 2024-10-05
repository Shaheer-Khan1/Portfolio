import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import axios from "axios";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";

function AdminExperiences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      let response;

      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-experience", values);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-experience", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (selectedItemForEdit) {
      form.setFieldsValue(selectedItemForEdit);
    } else {
      form.resetFields();
    }
  }, [selectedItemForEdit, form]);

  return (
    <>
      <div>
        <div className="flex justify-end">
          <button
            className="bg-primary text-white px-5 py-2"
            onClick={() => {
              setSelectedItemForEdit(null);
              setShowAddEditModal(true);
            }}
          >
            Add Experience
          </button>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1 ">
          {experiences.map((experience) => (
            <div
              className="shadow border p-5 border-gray-400 flex flex-col"
              key={experience._id}
            >
              <h1 className="text-primary text-xl font-bold">
                {experience.period}
              </h1>
              <hr />
              <h1>Company: {experience.company}</h1>
              <h1>Role: {experience.title}</h1>
              <h1>{experience.description}</h1>
              <div className="flex justify-end gap-5 mt-5">
                <button
                  className="bg-secondary text-white px-5 py-2"
                  onClick={() => onDelete(experience)}
                >
                  Delete
                </button>

                <button
                  className="bg-primary text-white px-5 py-2"
                  onClick={() => {
                    setSelectedItemForEdit(experience);
                    setShowAddEditModal(true);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={showAddEditModal}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        footer={null}
        onCancel={() => {
          setShowAddEditModal(false);
          setSelectedItemForEdit(null);
        }}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="period" label="Period">
            <input placeholder="Period" />
          </Form.Item>
          <Form.Item name="company" label="Company">
            <input placeholder="Company" />
          </Form.Item>
          <Form.Item name="title" label="Title">
            <input placeholder="Title" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <input placeholder="Description" />
          </Form.Item>

          <div className="flex justify-end">
            <button
              className="border-primary text-primary px-5 py-2"
              onClick={() => {
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
              }}
            >
              Cancel
            </button>
            <button className="bg-primary text-white px-5 py-2" type="submit">
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default AdminExperiences;

