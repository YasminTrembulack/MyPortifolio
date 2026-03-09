import PythonIcon from "../../assets/icons/python.svg?react";
import JavaIcon from "../../assets/icons/java.svg?react";
import JavaScriptIcon from "../../assets/icons/javascript.svg?react";
import TypeScriptIcon from "../../assets/icons/typescript.svg?react";
import CSharpIcon from "../../assets/icons/csharp.svg?react";
import CIcon from "../../assets/icons/c.svg?react";
import GoLangIcon from "../../assets/icons/go.svg?react";
import HTML5Icon from "../../assets/icons/html.svg?react";
import CSS3Icon from "../../assets/icons/css.svg?react";
import ReactIcon from "../../assets/icons/react.svg?react";
import FigmaIcon from "../../assets/icons/figma.svg?react";
import NodeJSIcon from "../../assets/icons/nodejs.svg?react";
import NetCoreIcon from "../../assets/icons/net-core.svg?react";
import SpringIcon from "../../assets/icons/spring.svg?react";
import FlaskIcon from "../../assets/icons/flask.svg?react";
import DjangoIcon from "../../assets/icons/django.svg?react";
import FastAPIIcon from "../../assets/icons/fastapi.svg?react";
import AzureIcon from "../../assets/icons/azure.svg?react";
import AzureDevOpsIcon from "../../assets/icons/azure-devops.svg?react";
import GoogleCloudIcon from "../../assets/icons/google-cloud.svg?react";
import CICDIcon from "../../assets/icons/cicd.svg?react";
import DockerIcon from "../../assets/icons/docker.svg?react";
import GitIcon from "../../assets/icons/git.svg?react";
import MicrosoftSQLServerIcon from "../../assets/icons/microsoftsqlserver.svg?react";
import MySQLIcon from "../../assets/icons/mysql.svg?react";
import MongoDBIcon from "../../assets/icons/mongodb.svg?react";
import FirebaseIcon from "../../assets/icons/firebase.svg?react";
import ElasticsearchIcon from "../../assets/icons/elasticsearch.svg?react";
import DatabaseIcon from "../../assets/icons/database.svg?react";
import NoSQLIcon from "../../assets/icons/nosql.svg?react";
import MachineLearningIcon from "../../assets/icons/ml.svg?react";
import NeuralNetworksIcon from "../../assets/icons/neural-networks.svg?react";
import SemanticSearchIcon from "../../assets/icons/semantic-search.svg?react";
import DocumentProcessingIcon from "../../assets/icons/document.svg?react";
import CleanArchitectureIcon from "../../assets/icons/clean-architecture.svg?react";
import SoftwareArchitectureIcon from "../../assets/icons/architecture.svg?react";
import TestsIcon from "../../assets/icons/tests.svg?react";
import RaccoonIcon from "../../assets/icons/raccoon.svg?react";
import IoTIcon from "../../assets/icons/iot.svg?react";
import ArduinoIcon from "../../assets/icons/arduino.svg?react";
import ESP32Icon from "../../assets/icons/esp32.svg?react";
import MQTTIcon from "../../assets/icons/mqtt.svg?react";

export type Tech = {
  name: string;
  icon: React.ReactNode;
  category: string;
  gradient: [string, string];
};

export const techs: Tech[] = [
  // 💻 Languages
  {
    name: "Python",
    icon: <PythonIcon />,
    category: "languages",
    gradient: ["#3776ab", "#4b8bbe"],
  },
  {
    name: "Java",
    icon: <JavaIcon />,
    category: "languages",
    gradient: ["#f89820", "#ed8b00"],
  },
  {
    name: "JavaScript",
    icon: <JavaScriptIcon />,
    category: "languages",
    gradient: ["#f7df1e", "#f0db4f"],
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />,
    category: "languages",
    gradient: ["#3178c6", "#235a97"],
  },
  {
    name: "C#",
    icon: <CSharpIcon />,
    category: "languages",
    gradient: ["#00a950", "#178600"],
  },
  {
    name: "C",
    icon: <CIcon />,
    category: "languages",
    gradient: ["#a8b9cc", "#6a8fb3"],
  },
  {
    name: "GoLang",
    icon: <GoLangIcon />,
    category: "languages",
    gradient: ["#00add8", "#5dc9e2"],
  },

  // 🎨 Frontend
  {
    name: "HTML5",
    icon: <HTML5Icon />,
    category: "frontend",
    gradient: ["#e34c26", "#f06529"],
  },
  {
    name: "CSS3",
    icon: <CSS3Icon />,
    category: "frontend",
    gradient: ["#2965f1", "#563d7c"],
  },
  {
    name: "React",
    icon: <ReactIcon />,
    category: "frontend",
    gradient: ["#61dafb", "#21a1f1"],
  },
  {
    name: "Figma",
    icon: <FigmaIcon />,
    category: "frontend",
    gradient: ["#f24e1e", "#a259ff"],
  },

  // ⚙️ Backend & APIs
  {
    name: "Node.js",
    icon: <NodeJSIcon />,
    category: "backend",
    gradient: ["#68a063", "#3c873a"],
  },
  {
    name: "ASP.NET Core",
    icon: <NetCoreIcon />,
    category: "backend",
    gradient: ["#512bd4", "#0078d4"],
  },
  {
    name: "Spring Boot",
    icon: <SpringIcon />,
    category: "backend",
    gradient: ["#6db33f", "#4ea94b"],
  },
  {
    name: "Flask",
    icon: <FlaskIcon />,
    category: "backend",
    gradient: ["#000000", "#6e6e6e"],
  },
  {
    name: "Django",
    icon: <DjangoIcon />,
    category: "backend",
    gradient: ["#092e20", "#1f6f43"],
  },
  {
    name: "FastAPI",
    icon: <FastAPIIcon />,
    category: "backend",
    gradient: ["#009688", "#00c7b7"],
  },

  // ☁️ Cloud & DevOps
  {
    name: "Microsoft Azure",
    icon: <AzureIcon />,
    category: "cloud",
    gradient: ["#0078d4", "#50e6ff"],
  },
  {
    name: "Azure DevOps",
    icon: <AzureDevOpsIcon />,
    category: "cloud",
    gradient: ["#0078d4", "#2560e0"],
  },
  {
    name: "Cloud Cloud",
    icon: <GoogleCloudIcon />,
    category: "cloud",
    gradient: ["#4285f4", "#ea4335"],
  },
  {
    name: "CI/CD",
    icon: <CICDIcon />,
    category: "cloud",
    gradient: ["#0f2027", "#2c5364"],
  },
  {
    name: "Docker",
    icon: <DockerIcon />,
    category: "cloud",
    gradient: ["#2496ed", "#0db7ed"],
  },
  {
    name: "Git",
    icon: <GitIcon />,
    category: "cloud",
    gradient: ["#f1502f", "#e94e31"],
  },

  // 🗄️ Databases & Search
  {
    name: "SQL Server",
    icon: <MicrosoftSQLServerIcon />,
    category: "database",
    gradient: ["#cc2927", "#e74c3c"],
  },
  {
    name: "MySQL",
    icon: <MySQLIcon />,
    category: "database",
    gradient: ["#00758f", "#f29111"],
  },
  {
    name: "MongoDB",
    icon: <MongoDBIcon />,
    category: "database",
    gradient: ["#13aa52", "#4db33d"],
  },
  {
    name: "Firebase",
    icon: <FirebaseIcon />,
    category: "database",
    gradient: ["#ffa000", "#ffca28"],
  },
  {
    name: "Elasticsearch",
    icon: <ElasticsearchIcon />,
    category: "database",
    gradient: ["#005571", "#00bfb3"],
  },
  {
    name: "RDBMS",
    icon: <DatabaseIcon />,
    category: "database",
    gradient: ["#4a90e2", "#357abd"],
  },
  {
    name: "NoSQL",
    icon: <NoSQLIcon />,
    category: "database",
    gradient: ["#13aa52", "#50c878"],
  },

  // 🤖 AI & Data
  {
    name: "Machine Learning",
    icon: <MachineLearningIcon />,
    category: "ai",
    gradient: ["#ff6b00", "#ff9f1c"],
  },
  {
    name: "Neural Networks",
    icon: <NeuralNetworksIcon />,
    category: "ai",
    gradient: ["#6a11cb", "#2575fc"],
  },
  {
    name: "Semantic Search",
    icon: <SemanticSearchIcon />,
    category: "ai",
    gradient: ["#13aa52", "#34d399"],
  },
  {
    name: "Document Processing",
    icon: <DocumentProcessingIcon />,
    category: "ai",
    gradient: ["#4285f4", "#34a853"],
  },

  // 🏗️ Software Engineering
  {
    name: "Clean Architecture",
    icon: <CleanArchitectureIcon />,
    category: "engineering",
    gradient: ["#444444", "#999999"],
  },
  {
    name: "Software Architecture",
    icon: <SoftwareArchitectureIcon />,
    category: "engineering",
    gradient: ["#555555", "#aaaaaa"],
  },
  {
    name: "Unit Testing",
    icon: <TestsIcon />,
    category: "engineering",
    gradient: ["#13aa52", "#34d399"],
  },
  {
    name: "Design Patterns",
    icon: <RaccoonIcon />,
    category: "engineering",
    gradient: ["#d63384", "#bc8f8f"],
  },

  // 🌐 IoT
  {
    name: "IoT Systems",
    icon: <IoTIcon />,
    category: "iot",
    gradient: ["#ffa500", "#ffb347"],
  },
  {
    name: "Arduino",
    icon: <ArduinoIcon />,
    category: "iot",
    gradient: ["#00979d", "#00c2a8"],
  },
  {
    name: "ESP32",
    icon: <ESP32Icon />,
    category: "iot",
    gradient: ["#e7352c", "#ff5c5c"],
  },
  {
    name: "MQTT",
    icon: <MQTTIcon />,
    category: "iot",
    gradient: ["#660066", "#a64ca6"],
  },
];
