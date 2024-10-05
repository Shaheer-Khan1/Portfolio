import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import axios from "axios";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";

function Adminprojects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      let response;

      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
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
      const response = await axios.post("/api/portfolio/delete-project", {
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
            Add Projects
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1  ">
          {projects.map((project) => (
            <div
              className="shadow border p-5 gap-5  border-gray-400 flex flex-col"
              key={project._id}
            >
              <h1 className="text-primary text-xl font-bold">
                {project.title}
              </h1>
              <hr />
              <img src={project.image} alt="" className=" h-60 w-80" />
              <h1>Title: {project.title}</h1>
              <h1>{project.description}</h1>
              <div>Technologies: {project.technologies?.join(", ")}</div>
              <div className="flex justify-end gap-5 mt-5">
                <button
                  className="bg-secondary text-white px-5 py-2"
                  onClick={() => onDelete(project)}
                >
                  Delete
                </button>

                <button
                  className="bg-primary text-white px-5 py-2"
                  onClick={() => {
                    setSelectedItemForEdit(project);
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
        title={selectedItemForEdit ? "Edit Project" : "Add Project"}
        footer={null}
        onCancel={() => {
          setShowAddEditModal(false);
          setSelectedItemForEdit(null);
        }}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="title" label="Title">
            <input placeholder="Title" />
          </Form.Item>
          <Form.Item name="image" label="Image">
            <input placeholder="Image" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <textarea placeholder="Description" />
          </Form.Item>
          <Form.Item name="technologies" label="Technologies">
            <input placeholder="Technologies" />
          </Form.Item>
          <Form.Item name="link" label="Link">
            <input placeholder="Link" />
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

export default Adminprojects;
