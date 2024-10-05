const router = require("express").Router();

const {
  Intro,
  About,
  Experience,
  Project,
  Course,
  Contact,
} = require("../models/portfolioModel");
//  all routes

const User = require("../models/userModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Project.find();
    const courses = await Course.find();
    const contacts = await Contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      experiences: experiences,
      contact: contacts[0],
      projects: projects,
      courses: courses,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update intro
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// about

router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "About updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//  experience

router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience add successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update experience

router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete experience

router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add projects

router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project add successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update projects
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "project updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete projects

router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: " Project Deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add contact

router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// admin login

router.post("/admin-login", async (req, res) => {
  try {

    const user = await User.findOne({username: req.body.username, password: req.body.password})

    if(user){
      
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully"
      })
    }else{
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password"
      })
    }

  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
