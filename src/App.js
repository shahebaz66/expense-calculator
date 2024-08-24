import React, { useState } from "react";
import { ChakraProvider, Box, Heading } from "@chakra-ui/react";
import ExpenseForm from "./ExpenseForm";
import ExpenseSummary from "./ExpenseSummary";

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt={10} p={5}>
        <Heading mb={6}>Expense Sharing Calculator</Heading>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseSummary expenses={expenses} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
