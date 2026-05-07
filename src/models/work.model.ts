interface Tasks {
    id: number;
    task: string;
}

export interface WorkExperience {
  companyName: string;
  companyType: string;
  location: string;
  jobRole: string;
  contractType: string;
  startTime: string;
  endTime: string;
  tasks: Tasks[];
}
