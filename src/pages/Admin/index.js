import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminContact from "./AdminContact";
import { useSelector } from "react-redux";
function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) window.location.href = "/admin-login";
  });

  return (
    <div>
      <Header />
      <div className="flex  px-5 py-2  items-center  justify-between ">
        <div className="flex gap-10 items-center">
          <h1 className="text-2xl px-5 py-2 font-semibold mt-2  text-primary">
            Admin Portfolio
          </h1>
        </div>

        <h1
          className="text-primary font-semibold text-2xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Log Out
        </h1>
      </div>
      {portfolioData && (
        <div className="mt-5 p-5 px-5 pb-5 ">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Intro" key="1">
              <AdminIntro />
            </Tabs.TabPane>
            <Tabs.TabPane tab="About" key="2">
              <AdminAbout />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Experiences" key="3">
              <AdminExperiences />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Projects" key="4">
              <AdminProjects />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Contact" key="5">
              <AdminContact />
            </Tabs.TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;
