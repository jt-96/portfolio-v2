import { Tech } from "./tech.model";
import NodeJSIcon from "@/assets/nodejs.svg";
import ExpressIcon from "@/assets/express.svg";
import MySQLIcon from "@/assets/sql.svg";
import PostgreSQLIcon from "@/assets/postgresql.svg";
import MongoDBIcon from "@/assets/mongodb.svg";

export const backStack: Tech[] = [
  {
    name: "NodeJS",
    icon: NodeJSIcon,
  },
  {
    name: "Express",
    icon: ExpressIcon,
  },
  {
    name: "SQL",
    icon: MySQLIcon,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQLIcon,
  },
  {
    name: "MongoDB",
    icon: MongoDBIcon,
  },
];
