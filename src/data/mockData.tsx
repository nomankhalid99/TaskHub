import { PiListChecks, PiUsersThree } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { FaDiagramProject } from "react-icons/fa6";
import { BsClipboardData } from "react-icons/bs";
import { LiaClipboardListSolid } from "react-icons/lia";
import {
  EmployeeProps,
  ExpensesTableProps,
  ExperienceCardProps,
  InitialDataProps,
  InvoiceDataProps,
  LeaderTableProps,
  NotificationDataProps,
  PaymentsTableProps,
  PersonalInfoProps,
  ProjectCardProps,
  ProjectDataProps,
  RecentActivitiesProps,
  TaskProgressDataProps,
  taskDataProps,
} from "../constants/types";
import { FaMobileAlt } from "react-icons/fa";
import { IoColorPaletteSharp, IoHourglassOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { BsDiagram3Fill } from "react-icons/bs";
import { TbCheckbox } from "react-icons/tb";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { BsClipboard2Check } from "react-icons/bs";
import { HiMiniPaperClip } from "react-icons/hi2";
import { Avatar } from "@mui/material";
import { TfiVector } from "react-icons/tfi";

export const mockDataProjects = [
  {
    id: 1,
    leader: "Jon Snow",
    title: "Box of Crayons",
    dateStart: "13-03-2021",
    avatarUrl:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar1.jpg",
    deadline: "1 Month",
    stage: "High",
  },
  {
    id: 2,
    leader: "Cersei Lannister",
    title: "Fast Cad",
    dateStart: "31-06-2021",
    avatarUrl:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar2.jpg",
    deadline: "8 Month",
    stage: "Low",
  },
  {
    id: 3,
    leader: "Jaime Lannister",
    title: "Gob Geeklords",
    avatarUrl:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar3.jpg",
    dateStart: "24-04-2021",
    deadline: "2 Month",
    stage: "Medium",
  },
  {
    id: 4,
    leader: "Anya Stark",
    title: "Java Dalia",
    dateStart: "20-06-2021",
    avatarUrl:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar4.jpg",
    deadline: "10 Month",
    stage: "High",
  },
  {
    id: 5,
    leader: "Daenerys Targaryen",
    title: "Practice to Perfect",
    avatarUrl:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar5.jpg",
    dateStart: "12-02-2021",
    deadline: "2 Month",
    stage: "Medium",
  },
  {
    id: 6,
    leader: "Ever Melisandre",
    title: "Social Geek Made",
    dateStart: "14-05-2021",
    avatarUrl:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar6.jpg",
    deadline: "5 Month",
    stage: "Low",
  },
  {
    id: 7,
    leader: "Ferrara Clifford",
    title: "Rhinestone",
    dateStart: "19-07-2021",
    avatarUrl:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar7.jpg",
    deadline: "6 Month",
    stage: "Medium",
  },
  {
    id: 8,
    leader: "Rossini Frances",
    title: "Gob Geeklords",
    dateStart: "26-03-2021",
    avatarUrl:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar8.jpg",
    deadline: "7 Month",
    stage: "Medium",
  },
  {
    id: 9,
    leader: "Harvey Roxie",
    title: "Java Dalia",
    dateStart: "09-08-2021",
    avatarUrl:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar9.jpg",
    deadline: "12 Month",
    stage: "High",
  },
];

export const taskData: taskDataProps[] = [
  {
    title: "Total Task",
    amount: 122,
    icon: <LiaClipboardListSolid fontSize="34px" />,
  },
  {
    title: "Completed Task",
    amount: 376,
    icon: <PiListChecks fontSize="34px" />,
  },
  {
    title: "Progress Task",
    amount: 74,
    icon: <GiProgression fontSize="34px" />,
  },
];

export const projectData: ProjectDataProps[] = [
  {
    title: "Total Projects",
    amount: 550,
    icon: <GoProjectRoadmap fontSize="34px" />,
  },
  {
    title: "Coming Projects",
    amount: 210,
    icon: <FaDiagramProject fontSize="34px" />,
  },
  {
    title: "Progress Projects",
    amount: "8456 Files",
    icon: <BsClipboardData fontSize="34px" />,
  },
  {
    title: "Finish Projects",
    amount: "88 Files",
    icon: <BsClipboard2Check fontSize="34px" />,
  },
];

export const projectCardData: ProjectCardProps[] = [
  {
    id: 1,
    index: 1,
    icon: <FaMobileAlt fontSize={32} />,
    name: "Rhinestone",
    title: "App Development",
    details: [
      {
        icon: <HiMiniPaperClip />,
        detail: "5 Attach",
      },
      {
        icon: <IoHourglassOutline />,
        detail: "4 Month",
      },
      {
        icon: <PiUsersThree />,
        detail: "5 ",
      },
      {
        icon: <MdOutlineMessage />,
        detail: "10",
      },
    ],
    deadline: "35 days left",
    progValue: 64,
  },
  {
    id: 2,
    index: 2,
    icon: <IoColorPaletteSharp fontSize={32} />,
    name: "Social Geek Made",
    title: "UI/UX Design",
    details: [
      {
        icon: <HiMiniPaperClip />,
        detail: "7 Attach",
      },
      {
        icon: <IoHourglassOutline />,
        detail: "2 Month",
      },
      {
        icon: <PiUsersThree />,
        detail: "6",
      },
      {
        icon: <MdOutlineMessage />,
        detail: "5",
      },
    ],
    deadline: "15 days left",
    progValue: 84,
  },
  {
    id: 3,
    index: 3,
    icon: <TfiVector fontSize={32} />,
    name: "Practice to Perfect",
    title: "Web Design",
    details: [
      {
        icon: <HiMiniPaperClip />,
        detail: "4 Attach",
      },
      {
        icon: <IoHourglassOutline />,
        detail: "1 Month",
      },
      {
        icon: <PiUsersThree />,
        detail: "4 ",
      },
      {
        icon: <MdOutlineMessage />,
        detail: "3",
      },
    ],
    deadline: "25 days left",
    progValue: 74,
  },
  {
    id: 4,
    index: 4,
    icon: <TbCheckbox fontSize={32} />,
    name: "Box of Crayons",
    title: "Quality Assurance",
    details: [
      {
        icon: <HiMiniPaperClip />,
        detail: "1 Attach",
      },
      {
        icon: <IoHourglassOutline />,
        detail: "completed",
      },
      {
        icon: <PiUsersThree />,
        detail: "2 ",
      },
      {
        icon: <MdOutlineMessage />,
        detail: "15",
      },
    ],
    deadline: "Completed",
    progValue: 100,
  },
  {
    id: 5,
    index: 5,
    icon: <MdOutlineDeveloperMode fontSize={32} />,
    name: "Gob Geeklords",
    title: "Development",
    details: [
      {
        icon: <HiMiniPaperClip />,
        detail: "10 Attach",
      },
      {
        icon: <IoHourglassOutline />,
        detail: "10 Month",
      },
      {
        icon: <PiUsersThree />,
        detail: "8 ",
      },
      {
        icon: <MdOutlineMessage />,
        detail: "45",
      },
    ],
    deadline: "20 days left",
    progValue: 80,
  },
  {
    id: 6,
    index: 6,
    icon: <BsDiagram3Fill fontSize={32} />,
    name: "Java Dalia",
    title: "Backend Development",
    details: [
      {
        icon: <HiMiniPaperClip />,
        detail: "8 Attach",
      },
      {
        icon: <IoHourglassOutline />,
        detail: "8 Month",
      },
      {
        icon: <PiUsersThree />,
        detail: "8 ",
      },
      {
        icon: <MdOutlineMessage />,
        detail: "7",
      },
    ],
    deadline: "10 days left",
    progValue: 70,
  },
  {
    id: 7,
    index: 7,
    icon: <BsClipboard2Check fontSize={32} />,
    name: "Fast Cad",
    title: "Software Testing",
    details: [
      {
        icon: <HiMiniPaperClip />,
        detail: "7 Attach",
      },
      {
        icon: <IoHourglassOutline />,
        detail: "2 Month",
      },
      {
        icon: <PiUsersThree />,
        detail: "6 ",
      },
      {
        icon: <MdOutlineMessage />,
        detail: "0",
      },
    ],
    deadline: "Approval",
    progValue: 0,
  },
  {
    id: 8,
    index: 8,
    icon: <TfiVector fontSize={32} />,
    name: "hex Clan",
    title: "Web Design",
    details: [
      {
        icon: <HiMiniPaperClip />,
        detail: "4 Attach",
      },
      {
        icon: <IoHourglassOutline />,
        detail: "completed",
      },
      {
        icon: <PiUsersThree />,
        detail: "4 ",
      },
      {
        icon: <MdOutlineMessage />,
        detail: "3",
      },
    ],
    deadline: "Completed",
    progValue: 100,
  },
  {
    id: 9,
    index: 9,
    icon: <TbCheckbox fontSize={32} />,
    name: "Switch and Swift",
    title: "Quality Assurance",
    details: [
      {
        icon: <HiMiniPaperClip />,
        detail: "1 Attach",
      },
      {
        icon: <IoHourglassOutline />,
        detail: "1 Month",
      },
      {
        icon: <PiUsersThree />,
        detail: "2 ",
      },
      {
        icon: <MdOutlineMessage />,
        detail: "0",
      },
    ],
    deadline: "Approval",
    progValue: 0,
  },
  {
    id: 10,
    index: 10,
    icon: <FaMobileAlt fontSize={32} />,
    name: "Rhinestone",
    title: "App Development",
    details: [
      {
        icon: <HiMiniPaperClip />,
        detail: "7 Attach",
      },
      {
        icon: <IoHourglassOutline />,
        detail: "2 Month",
      },
      {
        icon: <PiUsersThree />,
        detail: "6 ",
      },
      {
        icon: <MdOutlineMessage />,
        detail: "0",
      },
    ],
    deadline: "Approval",
    progValue: 0,
  },
  {
    id: 11,
    index: 11,
    icon: <TbCheckbox fontSize={32} />,
    name: "Box of Crayons",
    title: "Quality Assurance",
    details: [
      {
        icon: <HiMiniPaperClip />,
        detail: "1 Attach",
      },
      {
        icon: <IoHourglassOutline />,
        detail: "1 Month",
      },
      {
        icon: <PiUsersThree />,
        detail: "2 ",
      },
      {
        icon: <MdOutlineMessage />,
        detail: "15",
      },
    ],
    deadline: "2 days left",
    progValue: 90,
  },
  {
    id: 12,
    index: 12,
    icon: <MdOutlineDeveloperMode fontSize={32} />,
    name: "Gob Geeklords",
    title: "Development",
    details: [
      {
        icon: <HiMiniPaperClip />,
        detail: "10 Attach",
      },
      {
        icon: <IoHourglassOutline />,
        detail: "completed",
      },
      {
        icon: <PiUsersThree />,
        detail: "8 ",
      },
      {
        icon: <MdOutlineMessage />,
        detail: "45",
      },
    ],
    deadline: "Completed",
    progValue: 100,
  },
];

export const taskProgressData: TaskProgressDataProps[] = [
  {
    title: "UI/UX Design",
    date: "02/07",
    progValue: 89,
  },
  {
    title: "Web Design",
    date: "01/03",
    progValue: 70,
  },
  {
    title: "Quality Assurance",
    date: "01/07",
    progValue: 55,
  },
  {
    title: "Development",
    date: "01/05",
    progValue: 50,
  },
  {
    title: "Testing",
    date: "02/08",
    progValue: 40,
  },
];

export const taskRecentActivities: RecentActivitiesProps[] = [
  {
    avatar: (
      <Avatar
        alt="Reachard Head"
        src="none"
        sx={{ bgcolor: "#A0D9B4", color: "#4E444B" }}
      />
    ),
    activity: "Rechard Add New Task",
    time: "20Min ago",
  },
  {
    avatar: (
      <Avatar
        alt="Shipa"
        src="none"
        sx={{ bgcolor: "#CF9EAC", color: "#4E444B" }}
      />
    ),
    activity: "Shipa Review Completed",
    time: "40Min ago",
  },
  {
    avatar: (
      <Avatar
        alt="Mora"
        src="none"
        sx={{ bgcolor: "#A883BA", color: "#4E444B" }}
      />
    ),
    activity: "Mora Task To Completed",
    time: "1Hr ago",
  },
  {
    avatar: (
      <Avatar
        alt="Fila"
        src="none"
        sx={{ bgcolor: "#A0D9B4", color: "#4E444B" }}
      />
    ),
    activity: "Fila Add New Task",
    time: "1Day ago",
  },
];

export const taskAllocatedData = [
  {
    id: 1,
    avatar: (
      <Avatar
        alt="Reachard Head"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar1.jpg"
      />
    ),
    name: "Lucinda Massey",
    job: "UI/UX Designer",
  },
  {
    id: 2,
    avatar: (
      <Avatar
        alt="Shipa"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar2.jpg"
      />
    ),
    name: "Ryan Nolan",
    job: "Website Designer",
  },
  {
    id: 3,
    avatar: (
      <Avatar
        alt="Mora"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar3.jpg"
      />
    ),
    name: "Oliver Black",
    job: "App Developer",
  },
  {
    id: 4,
    avatar: (
      <Avatar
        alt="Fila"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar4.jpg"
      />
    ),
    name: "Adam Walker",
    job: "Quality Checker",
  },
  {
    id: 5,
    avatar: (
      <Avatar
        alt="Fila"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar5.jpg"
      />
    ),
    name: "Brian Skinner",
    job: "Quality Checker",
  },
  {
    id: 6,
    avatar: (
      <Avatar
        alt="Fila"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar6.jpg"
      />
    ),
    name: "Dan Short",
    job: "App Developer",
  },
];

export const tasksData: InitialDataProps = {
  tasks: {
    1: {
      id: 1,
      category: "Website Design",
      name: "Box of Crayons",
      avatar: 2,
      priority: "Medium",
      date: "28 Mar",
      message: 5,
      attach: 5,
    },
    2: {
      id: 2,
      category: "Quality Assurance",
      name: "Practice to Perfect",
      avatar: 1,
      priority: "Medium",
      date: "03 Apr",
      message: 8,
      attach: 2,
    },
    3: {
      id: 3,
      category: "UI/UX Design",
      name: "Social Geek Made",
      avatar: 1,
      priority: "Low",
      date: "25 Nov",
      message: 4,
      attach: 6,
    },
    4: {
      id: 4,
      category: "Quality Assurance",
      name: "Practice to Perfect",
      avatar: 2,
      priority: "High",
      date: "12 Feb",
      message: 2,
      attach: 4,
    },
    5: {
      id: 5,
      category: "Website Design",
      name: "Box of Crayons",
      avatar: 1,
      priority: "Medium",
      date: "01 Jan",
      message: 8,
      attach: 6,
    },
    6: {
      id: 6,
      category: "UI/UX Design",
      name: "Practice to Perfect",
      avatar: 2,
      priority: "Low",
      date: "17 Jan",
      message: 7,
      attach: 2,
    },
    7: {
      id: 7,
      category: "Website Design",
      name: "Box of Crayons",
      avatar: 1,
      priority: "Medium",
      date: "17 May",
      message: 6,
      attach: 3,
    },
    8: {
      id: 8,
      category: "UI/UX Design",
      name: "Practice to Perfect",
      avatar: 1,
      priority: "High",
      date: "13 Jun",
      message: 3,
      attach: 7,
    },
    9: {
      id: 9,
      category: "Quality Assurance",
      name: "Social Geek Made",
      avatar: 1,
      priority: "Medium",
      date: "09 Nov",
      message: 6,
      attach: 6,
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To-Do",
      taskIds: [1, 2, 3, 6, 9],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [4, 5],
    },
    "column-3": {
      id: "column-3",
      title: "Completed",
      taskIds: [7, 8, 9],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};

export const leadersData: LeaderTableProps[] = [
  {
    id: 1,
    leader: "Jon Snow",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar5.jpg",
    project: "Box of Crayons",
    tasks: "2 Tasks",
    email: "PhilGlover@gmail.com",
    assigned: "18/03/21",
    staff: 3,
    status: "Working",
  },
  {
    id: 2,
    leader: "Robert Anderson",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar1.jpg",
    project: "Rhinestone",
    tasks: "5 Tasks",
    email: "RobertAnderson@gmail.com",
    assigned: "14/01/21",
    staff: 6,
    status: "Working",
  },
  {
    id: 3,
    leader: "Ryan Randall",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar2.jpg",
    project: "Fast Cad",
    tasks: "8 Tasks",
    email: "	RyanRandall@gmail.com",
    assigned: "14/04/21",
    staff: 4,
    status: "Working",
  },
  {
    id: 4,
    leader: "Ryan Stewart",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar3.jpg",
    project: "Social Geek Made",
    tasks: "15 Tasks",
    email: "RyanStewart@gmail.com",
    assigned: "13/01/21",
    staff: 5,
    status: "Working",
  },
  {
    id: 5,
    leader: "Sally Graham",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar4.jpg",
    project: "Practice to Perfect",
    tasks: "9 Tasks",
    email: "SallyGraham@gmail.com",
    assigned: "13/01/21",
    staff: 4,
    status: "Working",
  },
  {
    id: 6,
    leader: "Victor Rampling",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar6.jpg",
    project: "Java Dalia",
    tasks: "7 Tasks",
    email: "VictorRampling@gmail.com",
    assigned: "	18/06/21",
    staff: 3,
    status: "Working",
  },
  {
    id: 7,
    leader: "Joan Dyer",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar7.jpg",
    project: "Gob Geeklords",
    tasks: "5 Tasks",
    email: "JoanDyer@gmail.com",
    assigned: "23/02/21",
    staff: 6,
    status: "Working",
  },
];

export const employeeData: EmployeeProps[] = [
  {
    id: 1,
    name: "Luke Short",
    designation: "UI/UX Designer",
    avatar: (
      <Avatar
        className="border"
        sx={{ height: "130px", width: "130px" }}
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar11.jpg"
      />
    ),
    taskDone: 4,
    stars: 4.5,
    taskAssigns: 4,
  },
  {
    id: 2,
    name: "Lillian Powell",
    designation: "Quality Assurance",
    avatar: (
      <Avatar
        className="border"
        sx={{ height: "130px", width: "130px" }}
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar2.jpg"
      />
    ),
    taskDone: 0,
    stars: 0,
    taskAssigns: 0,
  },
  {
    id: 3,
    name: "Rachel Parsons",
    designation: "Website Designer",
    avatar: (
      <Avatar
        className="border"
        sx={{ height: "130px", width: "130px" }}
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar3.jpg"
      />
    ),
    taskDone: 10,
    stars: 4,
    taskAssigns: 15,
  },
  {
    id: 4,
    name: "John Hardacre",
    designation: "Developer",
    avatar: (
      <Avatar
        className="border"
        sx={{ height: "130px", width: "130px" }}
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar4.jpg"
      />
    ),
    taskDone: 12,
    stars: 3,
    taskAssigns: 25,
  },
  {
    id: 5,
    name: "Jan Ince",
    designation: "QA/QC Engineer",
    avatar: (
      <Avatar
        className="border"
        sx={{ height: "130px", width: "130px" }}
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar1.jpg"
      />
    ),
    taskDone: 12,
    stars: 4.5,
    taskAssigns: 25,
  },
  {
    id: 6,
    name: "Steven Butler",
    designation: "Mobile developer",
    avatar: (
      <Avatar
        className="border"
        sx={{ height: "130px", width: "130px" }}
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar6.jpg"
      />
    ),
    taskDone: 4,
    stars: 4.5,
    taskAssigns: 0,
  },
  {
    id: 7,
    name: "Rachel Parsons",
    designation: "Developer",
    avatar: (
      <Avatar
        className="border"
        sx={{ height: "130px", width: "130px" }}
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar9.jpg"
      />
    ),
    taskDone: 7,
    stars: 3,
    taskAssigns: 12,
  },
  {
    id: 8,
    name: "Rachel Parsons",
    designation: "Website Designer",
    avatar: (
      <Avatar
        className="border"
        sx={{ height: "130px", width: "130px" }}
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar10.jpg"
      />
    ),
    taskDone: 10,
    stars: 4,
    taskAssigns: 14,
  },
];

export const personalInfoData: PersonalInfoProps[] = [
  {
    key: "Nationality",
    value: "Pakistani",
  },
  {
    key: "Religion",
    value: "Islam",
  },
  {
    key: "Martial Status",
    value: "Married",
  },
  {
    key: "Passport No.",
    value: 468953210,
  },
  {
    key: "Emergency Contact",
    value: 7468953210,
  },
];

export const bankInfoData: PersonalInfoProps[] = [
  {
    key: "Acount Holder",
    value: "Luke Short",
  },
  {
    key: "Bank Name",
    value: "Allied",
  },
  {
    key: "Account Type",
    value: "Asaan Current Account",
  },
  {
    key: "Account No.",
    value: "5436874596325486",
  },
  {
    key: "IBAN No.",
    value: "allied09000021",
  },
];

export const experienceCardData: ExperienceCardProps[] = [
  {
    avatar: (
      <Avatar
        alt="PW"
        src="none"
        sx={{ bgcolor: "#A0D9B4", color: "#4E444B" }}
      />
    ),
    company: "Pixel Wibes",
    experience: "Jan 2016 - Present (5 years 2 months)",
  },
  {
    avatar: (
      <Avatar
        alt="CC"
        src="none"
        sx={{ bgcolor: "#CF9EAC", color: "#4E444B" }}
      />
    ),
    company: "Crest Coder",
    experience: "Dec 2015 - 2016 (1 years)",
  },
  {
    avatar: (
      <Avatar
        alt="MW"
        src="none"
        sx={{ bgcolor: "#A883BA", color: "#4E444B" }}
      />
    ),
    company: "Morning Wibe",
    experience: "Nov 2014 - 2015 (1 years)",
  },
  {
    avatar: (
      <Avatar
        alt="FF"
        src="none"
        sx={{ bgcolor: "#A0D9B4", color: "#4E444B" }}
      />
    ),
    company: "FebiFlue",
    experience: "Jan 2010 - 2009 (1 years)",
  },
];

export const notificationData: NotificationDataProps[] = [
  {
    id:1,
    avatar: (
      <Avatar
        className="border"
        alt="Reachard Head"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar1.jpg"
      />
    ),
    name: "Dynal Hunter",
    notify: "Add new Project for App Develpoment",
    time: "12Min",
  },
  {
    id:2,
    avatar: (
      <Avatar
        className="border"
        alt="Reachard Head"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar1.jpg"
      />
    ),
    name: "Dynal Hunter",
    notify: "Add new Project for App Develpoment",
    time: "12Min",
  },
  {
    id:3,
    avatar: (
      <Avatar
        className="border"
        alt="Reachard Head"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar1.jpg"
      />
    ),
    name: "Dynal Hunter",
    notify: "Add new Project for App Develpoment",
    time: "12Min",
  },
  {
    id:4,
    avatar: (
      <Avatar
        className="border"
        alt="Reachard Head"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar1.jpg"
      />
    ),
    name: "Dynal Hunter",
    notify: "Add new Project for App Develpoment",
    time: "12Min",
  },
];

export const paymentsData: PaymentsTableProps[] = [
  {
    id: "#00001",
    project: "Social Geek Made",
    client: "AgilSoft Tech",
    dateStart: "10-01-2021",
    dateEnd: "10-02-2021",
    amount: "$3250",
    status: "Pending",
  },
  {
    id: "#00002",
    project: "Practice to Perfect",
    client: "Macrosoft",
    dateStart: "12-02-2021",
    dateEnd: "10-04-2021",
    amount: "$1578",
    status: "Paid",
  },
  {
    id: "#00003",
    project: "Rhinestone",
    client: "Google",
    dateStart: "18-02-2021",
    dateEnd: "20-04-2021",
    amount: "$1978",
    status: "Draf",
  },
  {
    id: "#00004",
    project: "Box of Crayons",
    client: "Pixelwibes",
    dateStart: "28-02-2021",
    dateEnd: "30-04-2021",
    amount: "$1978",
    status: "Draf",
  },
  {
    id: "#00005",
    project: "Practice to Perfect",
    client: "Deltasoft Tech",
    dateStart: "11-02-2021",
    dateEnd: "10-04-2021",
    amount: "$1578",
    status: "Paid",
  },
  {
    id: "#00006",
    project: "Rhinestone",
    client: "Google",
    dateStart: "17-02-2021",
    dateEnd: "20-04-2021",
    amount: "$1978",
    status: "Draf",
  },
  {
    id: "#00007",
    project: "Box of Crayons",
    client: "Pixelwibes",
    dateStart: "14-02-2021",
    dateEnd: "30-04-2021",
    amount: "$1978",
    status: "Draf",
  },
];

export const expensesData: ExpensesTableProps[] = [
  {
    id: "#EX-00002",
    item: "Internet Payment",
    orderBy: "Joan Dyer",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar1.jpg",
    date: "	12/03/2021",
    from: "Airtel Portal",
    status: "In Progress",
  },
  {
    id: "#EX-00004",
    item: "Printer Repairing",
    orderBy: "Phil Glover",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar2.jpg",
    date: "16/03/2021",
    from: "JustDial",
    status: "Decline",
  },
  {
    id: "#EX-00006",
    item: "Keybord Order",
    orderBy: "Ryan Randall",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar3.jpg",
    date: "12/03/2021",
    from: "Flipkart",
    status: "In Progress",
  },
  {
    id: "#EX-000011",
    item: "Pen/book Order",
    orderBy: "Victor Rampling",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar4.jpg",
    date: "25/02/2021",
    from: "Flipkart",
    status: "Completed",
  },
  {
    id: "#EX-00014",
    item: "Decoration Order",
    orderBy: "Robert Anderson",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar5.jpg",
    date: "	18/01/2021",
    from: "Flipkart",
    status: "Waiting",
  },
  {
    id: "#EX-00018",
    item: "Food Order",
    orderBy: "Sally Graham",
    avatar:
      "https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar6.jpg",
    date: "16/02/2021",
    from: "Swiggy",
    status: "Completed",
  },
];

export const invoicesData: InvoiceDataProps[] = [
  {
    id: 1,
    avatar: (
      <Avatar
        className="border"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar1.jpg"
      />
    ),
    client: "Ryan MacLeod",
    project: "Box of Crayons",
    address: "2211 Jones Avenue,Winston Salem FL 27107",
    price: "$50 per hour",
    appliedOn: "23 Feb, 2021",
  },
  {
    id: 2,
    avatar: (
      <Avatar
        className="border"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar2.jpg"
      />
    ),
    client: "Penelope Stewart",
    project: "Fast Cad",
    address: " 3154 Sampson Street,Aurora CT 80014",
    price: " $43 per hour",
    appliedOn: "23 Feb, 2021",
  },
  {
    id: 3,
    avatar: (
      <Avatar
        className="border"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar3.jpg"
      />
    ),
    client: "Diane Slater",
    project: "Gob Geeklords",
    address: " 49 Stamford Road. West Chicago, IL 60185",
    price: "$50 per hour",
    appliedOn: "14 Apr, 2021",
  },
  {
    id: 4,
    avatar: (
      <Avatar
        className="border"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar4.jpg"
      />
    ),
    client: "Amy Mills",
    project: "Java Dalia",
    address: " 2698 Northumberland. Melbourne, FL 32904",
    price: "$55 per hour",
    appliedOn: "17 Mar, 2021",
  },
  {
    id: 5,
    avatar: (
      <Avatar
        className="border"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar5.jpg"
      />
    ),
    client: "Tim Mitchell",
    project: "Practice to Perfect",
    address: "35 Gubener Str. Emmering, FL 32904",
    price: "$28 per hour",
    appliedOn: "12 Feb, 2020",
  },
  {
    id: 6,
    avatar: (
      <Avatar
        className="border"
        src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar6.jpg"
      />
    ),
    client: "Brian Swader",
    project: "Rhinestone",
    address: "70 Bowman St. South Windsor, CT 06074",
    price: "$65 per hour",
    appliedOn: "18 Feb, 2020",
  },
];
