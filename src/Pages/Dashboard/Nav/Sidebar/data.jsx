import {
  MdCategory,
  MdOutlineSpaceDashboard,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { IoCreateSharp, IoFastFood } from "react-icons/io5";
import { FaBowlFood, FaUserTie } from "react-icons/fa6";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { IoMdPersonAdd } from "react-icons/io";

export const data = [
  {
    title: "Dashboard",
    link: "/",
    category: "Core",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    title: "Create Orders",
    link: "/create-orders",
    category: "Core",
    icon: <IoFastFood />,
  },
  {
    title: "Orders",
    link: "/orders",
    category: "Core",
    icon: <VscGitPullRequestCreate />,
  },

  {
    title: "Create Category",
    link: "/create-category",
    category: "Interface",
    icon: <IoCreateSharp />,
    miniCategory: "category",
  },
  {
    title: "View Category",
    link: "/view-category",
    category: "Interface",
    icon: <MdCategory />,
    miniCategory: "category",
  },
  {
    title: "Create Product",
    link: "/create-product",
    category: "Interface",
    icon: <FaBowlFood />,
    miniCategory: "products",
  },
  {
    title: "View Products",
    link: "/view-products",
    category: "Interface",
    icon: <MdProductionQuantityLimits />,
    miniCategory: "products",
  },
  {
    title: "Add Customer",
    link: "/add-customer",
    icon: <IoMdPersonAdd />,
    category: "Manage User",
  },
  {
    title: "View Customer",
    link: "/view-customer",
    icon: <FaUserTie />,
    category: "Manage User",
  },
];
