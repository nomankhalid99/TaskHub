import { MouseEventHandler, ReactElement } from "react";

export const ItemTypes = {
  TASK: "task",
};

export interface taskDataProps {
  title: string;
  amount: number;
  icon: ReactElement;
}

export interface ProjectDataProps {
  title: string;
  amount: number | string;
  icon: ReactElement;
}

export interface FormValues {
  username: string;
  password: string;
  confirmPassword: string;
}

interface DataItem {
  x: string;
  y: number[];
  goals?: {
    name: string;
    value: number;
    strokeColor: string;
  }[];
}

interface SeriesItem {
  name: string;
  data: DataItem[];
}

export interface TimeLineChartData {
  series: SeriesItem[];
  options: {
    chart: {
      height: number;
      type: string;
    };
    plotOptions: {
      bar: {
        horizontal: boolean;
        barHeight: string;
      };
    };
    xaxis: {
      type: string;
    };
    stroke: {
      width: number;
    };
    fill: {
      type: string;
      opacity: number;
    };
    legend: {
      position: string;
      horizontalAlign: string;
    };
  };
}

export interface ApexChartProps {}

interface ChartOptions {
  chart: {
    width: number | string;
    type: string;
  };
  labels: string[];
  fill: {
    opacity: number;
  };
  stroke: {
    width: number;
    colors: undefined;
  };
  yaxis: {
    show: boolean;
  };
  legend: {
    position: string;
  };
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: number;
      };
      spokes: {
        strokeWidth: number;
      };
    };
  };
  theme: {
    monochrome: {
      enabled: boolean;
      shadeTo: string;
      shadeIntensity: number;
    };
  };
}

export interface PolarChartData {
  series: number[];
  options: ChartOptions;
}

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export interface ProjectDetailProps {
  icon: ReactElement;
  detail: string;
}

export interface Detail {
  icon: React.ReactNode;
  detail: string;
}

export interface ProjectCardProps {
  id: number;
  index: number
  icon: JSX.Element;
  name: string;
  title: string;
  details: Detail[];
  deadline: string;
  progValue: number;
}

export interface ProjectFormProps {
  projectName: string;
  projectCategory: string;
  notificationSent: string;
  taskAssign: string;
  priority: string;
  budget: number;
  file: FileList | undefined;
  startDate: string;
  endDate: string;
  description: string;
}
export interface TaskProgressDataProps {
  title: string;
  date: string;
  progValue: number;
}

export interface RecentActivitiesProps {
  avatar: ReactElement;
  activity: string;
  time: string;
}

interface TaskProps {
  id: number;
  category: string;
  name: string;
  avatar: number;
  priority: string;
  date: string;
  message: number;
  attach: number;
}

export interface ColumnProps {
  id: string;
  title: string;
  taskIds: number[];
}

export interface InitialDataProps {
  tasks: Record<string, TaskProps>;
  columns: Record<string, ColumnProps>;
  columnOrder: string[];
}

export interface LeaderTableProps {
  id: number;
  leader: string;
  avatar: string;
  project: string;
  tasks: string;
  email: string;
  assigned: string;
  staff: number;
  status: string;
}

export interface EmployeeProps {
  id: number;
  name: string;
  designation: string;
  avatar: React.ReactElement;
  taskDone: number;
  stars: number;
  taskAssigns: number;
}

export interface EmployeeFormProps {
  employeeName: string;
  employeeCompany: string;
  file: FileList | undefined;
  employeeId: number | undefined;
  joiningDate: string;
  username: string;
  password: string;
  email: string;
  phone: number | undefined;
  department: string;
  designation: string;
  description: string;
}

export interface PersonalInfoProps {
  key: string;
  value: string | number;
}

export interface ExperienceCardProps {
  avatar: ReactElement;
  company: string;
  experience: string;
}

export interface PersonalInfoFormProps {
  nationality: string;
  religion: string;
  martialStatus: string;
  passportNo: number;
  emergencyContact: number;
}

export interface BankInfoFormProps {
  accountHolder: string;
  bankName: string;
  accountType: string;
  accountNo: number;
  ibanNo: string;
}

export interface NotificationDataProps{
  id:number;
  avatar: ReactElement;
  name:string;
  notify:string;
  time:string;
}

export interface PaymentsTableProps{
  id:string;
  project: string;
  client: string;
  dateStart : string;
  dateEnd : string;
  amount : string;
  status: string;
}

export interface ExpensesTableProps{
  id:string;
  item: string;
  orderBy: string;
  avatar :string;
  date : string;
  from : string;
  status : string;
}

export interface AddExpenseFormProps{
  item:string;
  orderBy:string;
  date:string;
  from:string;
  status:string;
}

interface Row {
  item: string;
  description: string;
  unitCost: string;
  quantity: string;
  price: string;
}

export interface CreateInvoiceTableProps {
  rows: Row[];
  handleInputChange: (index: number, field: keyof Row, value: string) => void;
  handleDeleteRow: (index: number) => void;
  handleAddRow: () => void;
  subtotal: number;
  total: number;
  balanceDue: number;
  amountDues: number;
  setAmountDues: (amount: number) => void;
}

export interface InvoiceDataProps{
  id:number,
  avatar:ReactElement;
  client: string,
  project: string,
  address: string,
  price: string,
  appliedOn: string,
}