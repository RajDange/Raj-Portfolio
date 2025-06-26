export type Skill = {
  name: string;
  icon: string; // Name of the lucide-react icon
  color?: string; // Optional color hex code
};

export type Project = {
  title: string;
  image: string;
  Gitlink: string;
  tags: string[];
  className: string;
  aiHint: string;
  description?: string; // Optional description
};



export const skillsData: Skill[] = [
  { name: 'Python', icon: 'python', color: '#37E55D' },
  { name: 'SQL', icon: 'sql', color: '#4479A1' },
  { name: 'AZURE', icon: 'azure', color: '#37B6E5' },
  { name: 'ADF', icon: 'adf', color: '#3777E5' },
  { name: 'Synapse', icon: 'synapse', color: '#37E5E5' },
  { name: 'Spark', icon: 'spark', color: '#E25A1C' },
  { name: 'Kafka', icon: 'kafka', color: '#E5167A' },
  { name: 'Databricks', icon: 'databricks', color: '#E56227' },
  { name: 'Informatica', icon: 'informatica', color: '#F1981C' },
  { name: 'Kubernetes', icon: 'kubernetes', color: '#DFD155' },
  { name: 'Data Lake', icon: 'datalake', color: '#E1318F' },
  { name: 'Git', icon: 'git', color: '#ECEAD9' },
  { name: 'DBT', icon: 'dbt', color: '#E56227' },
  { name: 'Power Bi', icon: 'powerbi', color: '#E0D345' },
  { name: 'Snowflake', icon: 'snowflake', color: '#45A4E0' },
  { name: 'Rest API', icon: 'restapi', color: '#4D45E0' }
];

export const projectsData: Project[] = [
  { 
    title: "Data Migration - Databricks", 
    image: "/Images/Databricks_Proj.png", 
    Gitlink: "https://github.com/RajDange/Databricks_Projects",
    tags: ["Databricks", "PySpark", "DLT"], 
    className: "md:col-span-2", 
    aiHint: "analytics platform",
    description: "A streaming data platform for real-time analytics and reporting."
  },
  { 
    title: "ADF-Analytics", 
    image: "/Images/ADF.png", 
    Gitlink: "https://github.com/RajDange/ADF-Analytics",
    tags: ["ADF", "Data Lake"], 
    className: "md:row-span-2", 
    aiHint: "data orchestration",
    description: "Complex data pipeline orchestration using Azure."
  },
  { 
    title: "Power BI- Dashboard", 
    image: "/Images/PowerBi.png", 
    Gitlink: "https://github.com/RajDange",
    tags: ["Power Bi", "Dax","Excel"], 
    className: "", 
    aiHint: "Power Bi",
    description: "Power bi Dashboard"
  },
  { 
    title: "Portfolio", 
    image: "/Images/RD_Port.png", 
    Gitlink: "https://github.com/RajDange/RD-Portfolio",
    tags: ["Next.JS", "Typescript","Tailwind.css","Firebase"], 
    className: "md:col-span-2", 
    aiHint: "Web-dev",
    description: "End-to-end portfolio of my skills"
  },
];
