import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomButton from "../components/global/CustomButton";
import { FaPlusCircle } from "react-icons/fa";
import ExpensesTable from "../components/expensesComponents/ExpensesTable";
import AddExpenseModal from "../components/expensesComponents/AddExpenseModal";
import EditExpenseModal from "../components/expensesComponents/EditExpenseModal";
import { expensesData } from "../data/mockData";
import { ExpensesTableProps } from "../constants/types";

interface Props {
  menuCollapse: boolean;
}

const Expenses: React.FC<Props> = ({menuCollapse}) => {
    const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false)
    const [isEditExpenseModalOpen, setIsEditExpenseModalOpen] = useState(false)
    const [expenses, setExpenses] = useState<ExpensesTableProps[]>(expensesData);

  const handleDeleteExpense = (expenseId: string) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== expenseId);
    setExpenses(updatedExpenses);
  };

  useEffect(() => {
    document.title = "Expenses-TaskHub"
  }, [])

  return (
    <Grid container mb={2} sx={{ pl: { xs: 0, lg: menuCollapse ? 14 : 36 }}}>
      <Grid item mt={5} xs={12}>
        <Box
          display="flex"
          mb={2}
          flexDirection={{ sm: "row", xs: "column" }}
          justifyContent="space-between"
          alignItems={{ sm: "center", xs: "" }}
        >
          <Typography mb={{ sm: 0, xs: 1 }} variant="h4" fontWeight="bold">
            Expenses
          </Typography>
          <Box>
            <CustomButton
              title="Add Expenses"
              containerStyles="w-full p-3 rounded-md bg-[#4C3575] "
              textStyles="text-white text-[14px] leading-[17px]"
              leftIcon={<FaPlusCircle className="text-white" />}
              handleClick={() => setIsAddExpenseModalOpen(true)}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider />
        <ExpensesTable
         expenses={expenses}
         onDeleteClick={(expenseId: string) => handleDeleteExpense(expenseId)}
        onEditClick={() => setIsEditExpenseModalOpen(true)}
      />
      </Grid>
      <AddExpenseModal isOpen={isAddExpenseModalOpen} closeModal={() => setIsAddExpenseModalOpen(false)}/>
      <EditExpenseModal isOpen={isEditExpenseModalOpen} closeModal={() => setIsEditExpenseModalOpen(false)}/>
    </Grid>
  );
};

export default Expenses;
